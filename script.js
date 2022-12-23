let range = document.querySelector(".mod-buttons-range")
let rangeValue = document.querySelector(".mod-buttons-rangevalue")
let gridContainer = document.querySelector(".grid-container")
let colorPalette = document.querySelector(".mod-buttons-palette")



/* First values and creating the grid according to initial value on range input */
rangeValue.innerHTML = `${range.value}x${range.value}`

for (let i = 1; i <= range.value * range.value; i++) {
    let newDiv = document.createElement("div")
    gridContainer.append(newDiv)
}
gridContainer.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`
gridContainer.style.gridTemplateRows = "auto"

let divsVar = document.querySelectorAll(".grid-container div")

for (let div of divsVar) {
    div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = colorPalette.value
    })
}




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

    for (let div of divsVar) {
        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = colorPalette.value
        })
    }
})

/* Event on Clear button for deleting the grid*/

let clearButton = document.querySelector("#clear_button")
clearButton.addEventListener("click", (e) => {
    document.location.reload()
})

/* Event on Color button*/


let colorButton = document.querySelector("#color_button")
colorButton.addEventListener("click", (e) => {


    let divsVar = document.querySelectorAll(".grid-container div")
    for (let div of divsVar) {

        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = colorPalette.value
        })
    }

}, { once: true })




/* Event on rainbow mode to change randomly the color of the hovering*/
let rainbowButton = document.querySelector("#rainbow_button")
rainbowButton.addEventListener("click", (e) => {

    let divsVar = document.querySelectorAll(".grid-container div")
    for (let div of divsVar) {
        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = randomColor()
        })
    }

}, { once: true })




/* Auxiliary functions */

randomColor = function () {
    let randomR = Math.floor(Math.random() * 255 + 1)
    let randomG = Math.floor(Math.random() * 255 + 1)
    let randomB = Math.floor(Math.random() * 255 + 1)
    return `rgb(${randomR},${randomG},${randomB})`

}





