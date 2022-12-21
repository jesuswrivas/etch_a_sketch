let range = document.querySelector(".mod-buttons-range")
let rangeValue = document.querySelector(".mod-buttons-rangevalue")


/*Event for changing the span Innertext Value*/
range.addEventListener("change", (e) => {
    rangeValue.innerHTML = `${range.value}x${range.value}`
})


/*Event for creating the grid*/
