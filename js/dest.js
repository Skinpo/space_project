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

function setUpDest() {
    const destNav = document.querySelector(".navigate-dest");
    destNav.appendChild(newDiv2);
}