let container = document.querySelector(".container");
let color = 50;

function hover(element) {
    element.classList.add("hovered");
    //element.style.color = `hsl(${color}, 100%, 50%)`;
    //console.log(element.style.color);
}

function makeRow(rows) {
    let row = document.createElement("div");
    row.classList.add("row")

    for (let i = 0; i < rows; i++) {
        let element = document.createElement("div");
        element.classList.add("pixel");
        element.addEventListener("mouseover", () => hover(element))

        row.appendChild(element);
    }
    return(row);
}

function makeGrid(dimension) {
    nuke();
    for (let i = 0; i < dimension; i++) {
        container.appendChild(makeRow(dimension));
    }
}

function nuke() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function updateVal () {
    value.textContent = `${(slider.value)**2} tiles created`;
    makeGrid(slider.value);
}

let slider = document.querySelector(".slider");
slider.addEventListener("input", () => updateVal());

let value = document.querySelector(".sliderVal");

let nukeButton = document.querySelector(".nukeButton");

nukeButton.addEventListener("click", () => nuke());

