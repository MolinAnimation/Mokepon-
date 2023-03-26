function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let input1 = document.getElementById('hipodoge')
    let input2 = document.getElementById('capipepo')
    let input3 = document.getElementById('ratigueya')
    
    if (input1.checked) {
        alert('Seleccionaste a Hipodoge')
    } else if (input2.checked) {
        alert('Seleccionaste a Capipepo')
    } else if (input3.checked) {
        alert('Seleccionaste a Ratigueya')
    } else {
        alert('Selecciona una mascota')
    }
}

window.addEventListener('load', iniciarJuego)