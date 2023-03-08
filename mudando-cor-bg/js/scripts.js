const container = document.getElementById("container")
const cor = document.querySelector('input')

const defaltColor = "#ffffff"
container.style.background = `${defaltColor}`

function onchangeBg() {
    container.style.backgroundColor = `${cor.value}`
}


