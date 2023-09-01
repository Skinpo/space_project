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



// Fetching data from data.json (global data)
const getData = async () => {
    const response = await fetch("data.json");

    if (response.status ==! 200) {
        throw new Error('cannot fetch from data, please check resource url')
    }

    const data = await response.json();
    return data;
}

