const hora = document.getElementById("hora")
const min = document.getElementById("min")
const seg = document.getElementById("seg")

setInterval(() => {
    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    hora.innerHTML = `${formatTime(horas)}`
    min.innerHTML = `${formatTime(minutos)}`
    seg.innerHTML = `${formatTime(segundos)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? "0" + time : time
}

