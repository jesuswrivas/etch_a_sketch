let range = document.querySelector(".mod-buttons-range")
let rangeValue = document.querySelector(".mod-buttons-rangevalue")
let gridContainer = document.querySelector(".grid-container")


/*Event for changing the span Innertext Value*/
range.addEventListener("change", (e) => {
    rangeValue.innerHTML = `${range.value}x${range.value}`
})


/*Event for creating the grid when the input changes*/

range.addEventListener("change", (e) => {

    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }
    for (let i = 1; i <= range.value * range.value; i++) {
        let newDiv = document.createElement("div")
        gridContainer.append(newDiv)
    }
    gridContainer.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`
    gridContainer.style.gridTemplateRows = "auto"

    /*Event to color the divs inside grid container */
    let divsVar = document.querySelectorAll(".grid-container div")
    console.dir(divsVar)

    for (let div of divsVar) {
        console.dir(div)
        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = "red"
        })
    }
})








