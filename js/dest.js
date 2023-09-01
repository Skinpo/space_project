// active states for choosing of planets on destination page
const galaxies = document.querySelector(".cluster");
const moon = document.querySelector(".moon");
const mars = document.querySelector(".mars");
const europa = document.querySelector(".europa");
const titans = document.querySelector(".titans");
const description = document.querySelector(".description");
const distance = document.querySelector(".distance");
const time = document.querySelector(".time");
const solarPlanet = document.querySelector(".solar-planet");
const image = document.querySelector(".image");

// creating a new div element for active state on planets menu
const newDiv = document.createElement("div");
newDiv.setAttribute("class", "line");

newDiv.innerHTML = `
<div class="linear"></div>
`
// active state on planets menu
galaxies.addEventListener("click", e => {
    
    if (e.target.classList.contains("planet")) {
        e.target.parentElement.append(newDiv); 
    };
})


// consuming data from data.json and click events for planet menu
const renderMoon = () => {
    getData()
        .then(data => {
            image.src = data.destinations[0].images.png;
            solarPlanet.innerHTML = data.destinations[0].name;
            description.innerHTML = data.destinations[0].description;
            distance.innerHTML = data.destinations[0].distance;
            time.innerHTML = data.destinations[0].travel;
        })
        .catch(err => console.log("rejected:", err.message))
}

moon.addEventListener("click", () => {
    getData()
        .then(data => {
            image.src = data.destinations[0].images.png;
            solarPlanet.innerHTML = data.destinations[0].name;
            description.innerHTML = data.destinations[0].description;
            distance.innerHTML = data.destinations[0].distance;
            time.innerHTML = data.destinations[0].travel;
        })
        .catch(err => console.log("rejected:", err.message))
})

mars.addEventListener("click", () => {
    getData()
        .then(data => {
            image.src = data.destinations[1].images.png;
            solarPlanet.innerHTML = data.destinations[1].name;
            description.innerHTML = data.destinations[1].description;
            distance.innerHTML = data.destinations[1].distance;
            time.innerHTML = data.destinations[1].travel;
        })
        .catch(err => console.log("rejected:", err.message))
})

europa.addEventListener("click", () => {
    getData()
        .then(data => {
            image.src = data.destinations[2].images.png;
            solarPlanet.innerHTML = data.destinations[2].name;
            description.innerHTML = data.destinations[2].description;
            distance.innerHTML = data.destinations[2].distance;
            time.innerHTML = data.destinations[2].travel;
        })
        .catch(err => console.log("rejected:", err.message))
})

titans.addEventListener("click", () => {
    getData()
        .then(data => {
            image.src = data.destinations[3].images.png;
            solarPlanet.innerHTML = data.destinations[3].name;
            description.innerHTML = data.destinations[3].description;
            distance.innerHTML = data.destinations[3].distance;
            time.innerHTML = data.destinations[3].travel;
        })
        .catch(err => console.log("rejected:", err.message))
})

// active state for choosing the destination menu from the main menu and default nav menu on planets menu
function setUpDest() {
    const destNav = document.querySelector(".navigate-dest");
    destNav.appendChild(newDiv2);
    moon.appendChild(newDiv);
    renderMoon();
}

