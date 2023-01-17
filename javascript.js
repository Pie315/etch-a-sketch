let container = document.querySelector(".container");

function hover(element) {
    element.classList.add("hovered");
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
    console.log(container);
}

function nuke() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}