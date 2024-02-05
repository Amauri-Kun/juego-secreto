let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);   

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste el número con ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es mayor')
        } else {            
            asignarTextoElemento('p','El numero secreto es menor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Se han completado todos los números');
    }else {
    //Si el número generado está incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    //Indicar mensaje de intervalo de números
    
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generar número aleatorio 
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
