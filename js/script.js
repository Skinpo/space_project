// Hamburger menu for mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
}

const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "line2");
    newDiv2.innerHTML = `
        <div class="linear2"></div>
    `


// active state for nav menu (Desktop view)
function setUpHome() {
    const homeNav = document.querySelector(".navigate-home");
    homeNav.appendChild(newDiv2);
}



// Fetching data from data.json
const renderData = async () => {
    let uri = "data.json";

    const res = await fetch(uri);
    const data = await res.json();
    console.log(data);
}

window.addEventListener("DOMContentLoaded", () => renderData());