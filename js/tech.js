const links = document.querySelector(".links");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const num1 = document.querySelector(".number1");
const num2 = document.querySelector(".number2");
const num3 = document.querySelector(".number3");
const title = document.querySelector(".title");
const titleContent = document.querySelector(".title-content");
const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");


// consuming data from data.json and click events for space launch menu
const renderOne = () => {
    getData()
        .then(data => {
            img1.src = data.technology[0].images.landscape;
            img2.src = data.technology[0].images.portrait;
            link1.style.backgroundColor = "white";
            link1.style.color = "black";
            title.innerHTML = data.technology[0].name;
            titleContent.innerHTML = data.technology[0].description;
        })
        .catch(err => console.log("rejected:", err.message))
}

// btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
        
//     })
// })



// active states for buttons
links.addEventListener("click", e => {

    if (e.target.classList.contains("link")) {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
        // console.log(link);
    }
})

link1.addEventListener("click", () => {
    getData()
        .then(data => {
            img1.src = data.technology[0].images.landscape;
            img2.src = data.technology[0].images.portrait;
            link1.style.backgroundColor = "white";
            link1.style.color = "black";
            title.innerHTML = data.technology[0].name;
            titleContent.innerHTML = data.technology[0].description;
            link2.style.backgroundColor = "transparent";
            link2.style.color = "white";
            link3.style.backgroundColor = "transparent";
            link3.style.color = "white";
        })
        .catch(err => console.log("rejected:", err.message))
})

link2.addEventListener("click", () => {
    getData()
        .then(data => {
            img1.src = data.technology[1].images.landscape;
            img2.src = data.technology[1].images.portrait;
            link2.style.backgroundColor = "white";
            link2.style.color = "black";
            title.innerHTML = data.technology[1].name;
            titleContent.innerHTML = data.technology[1].description;
            link1.style.backgroundColor = "transparent";
            link1.style.color = "white";
            link3.style.backgroundColor = "transparent";
            link3.style.color = "white";
        })
        .catch(err => console.log("rejected:", err.message))
})

link3.addEventListener("click", () => {
    getData()
        .then(data => {
            img1.src = data.technology[2].images.landscape;
            img2.src = data.technology[2].images.portrait;
            link3.style.backgroundColor = "white";
            link3.style.color = "black";
            title.innerHTML = data.technology[2].name;
            titleContent.innerHTML = data.technology[2].description;
            link1.style.backgroundColor = "transparent";
            link1.style.color = "white";
            link2.style.backgroundColor = "transparent";
            link2.style.color = "white";
        })
        .catch(err => console.log("rejected:", err.message))
})

// on page load function
function setUpTech() {
    const TechNav = document.querySelector(".navigate-tech");
    TechNav.appendChild(newDiv2);
    renderOne();
}