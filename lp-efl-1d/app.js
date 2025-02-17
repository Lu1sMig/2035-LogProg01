// 2 Cambiar contenido de `h1` con `document.querySelector` y asignar texto: `Hora del Desafío`.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

// 3 Crear función a mostra mensaje en consola: `El botón fue clicado` siempre que se presione el botón `Console`.
function mostarMensajeEnLaConsola() {
    console.log(`El botón fue pulsado!`)
}

/* T4 Crear función que se ejecute al pulsar botón "`prompt`", pregunte nombre de ciudad en Perú.
Luego, muestre alerta con texto: "`Estuve en {ciudad} y me acordé de ti`". */
function mostrarPromt() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Perú:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}
// T5 Crear función que muestre mensaje de alerta: "Amo JS" siempre que se presione el botón "Alerta". 
function mostrarAlerta(){
    alert("AMO JS");
} 
// T6 Crear funcion en boton "suma", pide 2 números y muestra el resultado de la suma en una alerta. 
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    sumaResultado(primerNumero, segunNumero)     
    //let resultado = primerNumero + segunNumero;
    //alert(`${primerNumero} + ${segunNumero} = ${resultado}`);
}

function sumaResultado(primerNumero, segunNumero) {
    if (isNaN(primerNumero) | isNaN(segunNumero)) {
      alert("No son numeros, intente nuevamente");
      sumaDosNumeros();
    }
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`); 
    return 0;   
  }