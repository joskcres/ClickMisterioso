let cuadro = document.querySelectorAll('.cuadro')
let texto = document.createElement('p')
let reinicio = document.querySelector('.reinicio')
let siguiente = document.querySelector('.ronda')
let intentos = document.querySelector('.intentos')
let puntos = document.querySelector('.puntos')
let contador = 0
let id = 0
let correcto = 0
let contadorPuntos = 0
let ganar = false
texto.textContent = 'You Wins!'
let puntosTotales = 0






const numeroRandom = () => {
    let numero = 0
    while (numero == 0) {
        numero = Math.floor(Math.random() * 21)
    }
    return numero
}
correcto = numeroRandom()

cuadro.forEach(cuadro => {
    cuadro.addEventListener('click', (event) => {
        console.log(correcto)
        if (event.target.id == correcto&&ganar == false) {
            event.target.append(texto)
            id = event.target.id
            event.target.classList.add('bg-info', 'text-center')
            contadorPuntos++
            puntosTotales+=contador
            ganar = true;
            if (contadorPuntos == 5) {
                alert(`Ganaste en ${puntosTotales} intentos`)

            }
        } else if (!ganar) {
            contador++
        }
        puntos.textContent = `Puntos: ${contadorPuntos}`
        intentos.textContent = `Intentos: ${contador}`
    })
})


siguiente.addEventListener('click', (event) => {
    console.log('este es un reinicio')
    correcto = numeroRandom()
    texto.remove()
    contador = 0
    intentos.textContent = `Intentos: ${contador}`

    ganar = false
    if(contadorPuntos==5){
        contador = 0
        contadorPuntos  = 0
    }
    cuadro[id - 1].className = 'cuadro'
})
