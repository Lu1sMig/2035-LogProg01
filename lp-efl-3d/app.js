//T1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a
// partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function ingresarCalcularIMC(){
  let altura = parseInt(prompt("Ingreso su Altura"));
  let peso = parseInt(prompt("Ingrese su Peso"));
  alert(`Su IMC es ${calcularIMC(altura, peso)}`);
}
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
//T2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero){
    if (numero === 0 | numero === 1)
    {    return 1;
    }else {
        return numero * calcularFactorial(numero-1);
    }
}
function valorFactorial(){
    let numero = parseInt(prompt("Ingrese valor a factorizar"));
    //calcularFactorial(numero);
    alert(`El factorial de ${numero} es: ${calcularFactorial(numero)}`);
}
// T3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el
// valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.
function calcularTipoCambio(valorDolares, ValoReales){
    return valorDolares*ValoReales;
}
function valorTipoCambio(){
    let dolares = parseInt(prompt("Ingrese monto de dolares a cambiar"));
    let realesTipoCambio = 4.80;
    //calcularTipoCambio(dolares,realesTipoCambio);
    alert(`Para $ ${dolares}, el tipo de cambio es de R$ ${calcularTipoCambio(dolares,realesTipoCambio)}`);
}
// 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  function ingresarLargoAncho(){
    let altura = parseInt(prompt("Ingreso el ancho de la sala"));
    let anchura = parseInt(prompt("Ingrese el largo de la sala"));
    calcularAreaYPerimetroRectangular(altura, anchura);
  }
//   5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//   utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
  function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  function ingresarRadio(){
    let radio = parseInt(prompt("Ingrese radio de la sala"));
    calcularAreaYPerimetroCircular(radio);
  }
  
// 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
function ingresarValorTabla(){
    let numero = parseInt(prompt("Ingresar valor de tabla"));
    mostrarTablaDeMultiplicar(numero);
}