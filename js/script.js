// Hamburger menu for mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
}


// active states for nav menu (Desktop view)
function setUpEvents() {
    const desktop = document.querySelector(".desktop");
    console.log(desktop);

    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "line2");
    newDiv2.innerHTML = `
        <div class="linear2"></div>
    `

    desktop.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.classList.contains("navigation")) {
            e.target.parentElement.append(newDiv2);
        }
    })
    console.log("Yea, I did it!")
}

// setUpEvents()

// window.onload = function() {
//     setUpEvents();
// }

// window.onload = setUpEvents;

// window.onload = function() {
//     var reloading = sessionStorage.getItem("reloading");
//     if (reloading) {
//         sessionStorage.removeItem("reloading");
//         setUpEvents();
//     }
// }

// function reloadP() {
//     sessionStorage.setItem("reloading", "true");
//     document.location.reload();
// }



// consuming local json data

// automatic  slide for the crew members

// active states for choosing of planets on destination page
const galaxies = document.querySelector(".galaxy");

const newDiv = document.createElement("div");
newDiv.setAttribute("class", "line");

newDiv.innerHTML = `
<div class="linear"></div>
`

galaxies.addEventListener("click", e => {
    
    if (e.target.classList.contains("planet")) {
        e.target.parentElement.append(newDiv); 
    };
})

// const desktop = document.querySelector(".desktop");

// const newDiv2 = document.createElement("div");
// newDiv.setAttribute("class", "line2");
// newDiv2.innerHTML = `
// <div class="linear2"></div>
// `

