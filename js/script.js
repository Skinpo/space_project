const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
}

// const navElements = document.querySelector('.hi');

// console.log(navElements.children[1])


// const anch = document.querySelector('.uni');

// console.log(anch.firstElementChild.baseURI);