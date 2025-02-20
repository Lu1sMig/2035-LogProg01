function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','¡Pulsa un boton para iniciar con el DESAFIO 04 de LP-EFL!');
    //asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    // numeroSecreto = generarNumeroSecreto();
    // intentos = 1;
    // console.log(numeroSecreto);
}
condicionesIniciales() 

// 1 Crea una lista vacía con el nombre listaGenerica. 
function listaGenerica(){
    let listaGenerica = [];
    console.log(`T1. Valor de listaGenerica es: ${listaGenerica}`)
    asignarTextoElemento('p',`T1. Valor de listaGenerica es: ${listaGenerica}`);
    
}
// 2. Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
function ingresarLenguagesDeProgramación(lenguagesDeProgramacion){
    //let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
    lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
    return asignarTextoElemento('p',`T2. La lista de lenguajeDeProgramacion: ${lenguagesDeProgramacion}`);
}


// 3. Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
function agregarLenguagesDeProgramación(){
    lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
}
// 4. Crea una función que muestre en la consola todos los elementos de la lista
// lenguagesDeProgramacion por separado.
function tareacuatro(){
    const lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python','Java', 'Ruby', 'GoLang'];
    mostrarLenguagesSeparadamente(lenguagesDeProgramacion);
}
function mostrarLenguagesSeparadamente(lenguagesDeProgramacion) {
  listView = document.querySelector('#list1');  
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
    listView.innerHTML += `<li>${lenguagesDeProgramacion[i]}</li>`;
  }
}
// function tareacuatroB(){
// var list = [ 'Eum perferendis aliquam id.', 'Voluptatum recusandae eligendi eius rerum ut nemo error.', 'Dolores ex nobis vel ipsa deleniti nulla doloribus.', ];
// var listView = document.querySelector('#list1');
// list.forEach((item) => {
// listView.innerHTML += `<li>${item}</li>`;
// });
// }
// 5. Crea una función que muestre en la consola todos los elementos de la lista
//  lenguagesDeProgramacion de manera inversa.
function tareacinco(){
    const lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python','Java', 'Ruby', 'GoLang'];
    mostrarLenguagesReversoSeparadamente(lenguagesDeProgramacion);
}
function mostrarLenguagesReversoSeparadamente(lenguagesDeProgramacion) {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

// 6. Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}
function ingresarMedia(){
    let numeros = [10, 20, 30, 40, 50];
    let media = calcularMedia(numeros);
    console.log('Média:', media);
}

// 7. Crea una función que muestre en la consola el número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

function registrarMayorMenor(){
    let numeros = [15, 8, 25, 5, 12];
    encontrarMayorMenor(numeros);
}

// 8. Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}
function ingresarSuma(){
    let numeros = [15, 8, 25, 5, 12];
    let suma = calcularSuma(numeros);
    console.log('Suma:', suma);
}
// 9. Crea una función que reciba una lista como parámetro y retorne el índice de un elemento 
// también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
     for (let i = 0; i < lista.length; i++) {
       if (lista[i] === elemento) {
         return i; // Retorna el índice del elemento encontrado
       }
     }
     return -1; // Retorna -1 si el elemento no se encuentra en la lista
   }
function ingresarLista(){
    let numero = [15, 8, 25, 5, 12];
    let elemento = 25;
    let posicion = encontrarIndiceElemento(numero, elemento)+1;
    console.log(`Elemento ${elemento} se encontro en la posición:`, posicion);
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
        return lista1.map((num, index) => num + lista2[index]);
    }
function ingresarListas(){
    const lista1 = [1, 2, 3];
    const lista2 = [4, 5, 6];
    const resultado = sumarListas(lista1, lista2);
    console.log(resultado);  
}    
        
// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}
function cuadradoIngresarLista() {
const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(`De los valores ${lista} sus cuadrados son ${resultado}`); 
}

