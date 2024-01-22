// variable para generar numero secreto
let numeroSecreto;

// variable del numero de intentos
let intentos;

// Arrays de numeros ya sorteados
let listaNumerosSorteados = [];

// variable de Numero Maximo
let numeroMaximo = 20;

// funcion para asignar texto al p
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

// funcion para verificar los intentos del usuario
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.querySelector('input').value);

  // Usuario Acerto al numero secreto
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      'p',
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? 'intento' : 'intentos'
      }!`
    );
    document.getElementById('reiniciar').removeAttribute('disabled');

    // Usuario no acerto al numero secreto
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

// funcion para limpiar la caja de intentos del usuario
function limpiarCaja() {
  document.querySelector('input').value = '';
}

// funcion para generar el numero secreto
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se asignaron todos los números!');
  } else {
    // Si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del Número Secreto!');
  asignarTextoElemento('p', `Indica un Numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  // funcion para limpiar caja
  limpiarCaja();
  // Funcion para llamar las condiciones Iniciales
  condicionesIniciales();
  // Desactivar el boton de "Nuevo Juego"
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
