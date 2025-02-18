
// 1. Crear una función que muestra "¡Hola, mundo!" en la consola. 
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

// 2. Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.

function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

function ingresarHolaNombre(){
  let nombre = prompt("Ingresa tu nombre");
  mostrarHolaNombre(nombre);
}

// 3. Crear una función que recibe un número como parámetro y devuelve el doble de ese número.

function valorDoble(){
  let numero =prompt("Ingresa un numero")
  let resultadoDoble = calcularDoble(numero);
  console.log(`El doble de ${numero} es: ${resultadoDoble}`);
}

function calcularDoble(numero) {
  return numero * 2;
}

// 4. Crear una función que recibe tres números como parámetros y devuelve su promedio.
function calcularPromedio(a, b, c) {
  let promedio = (a + b + c) / 3;
  return (a + b + c) / 3;
  //console.log(promedio);
  //return promedio ;
}

function valorPromedio(){
  let valor1 = parseInt(prompt("Ingrese valor 1:"));
  let valor2 = parseInt(prompt("Ingrese valor 2:"));
  let valor3 = parseInt(prompt("Ingrese valor 3:"));
  let promedio1 = calcularPromedio(valor1, valor2, valor3);
  console.log(`El valor promedio de ${valor1}, ${valor2}, ${valor3} es ${promedio1}`);
}

// 5. Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

function valorCompara(){
  let valor1 = parseInt(prompt("Ingrese valor 1:"));
  let valor2 = parseInt(prompt("Ingrese valor 2:"));
  let numeroMayor = encontrarMayor(valor1, valor2);
  console.log(numeroMayor);
}

// 6. Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}
function valorCuadrado() {
  let numero = parseInt(prompt("Ingrese el numero a hallar su cuadrado"));
  let resultado = cuadrado(numero);
  console.log(`El cuadrado de ${numero} es: ${resultado}`);
}