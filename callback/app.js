// Function callback
function saludar(name, callback) {
  callback(name);
}

const saludo = function (name) {
  console.log('Hello', name);
};

// saludar('Harold', saludo);

/*
  Sumar 2 numeros
  El resultado eleverlo al cuadrado
  El resultado dividirlo entre 2
  El resultado sustraerle 100
  El resultado validar si es mayor a 0
*/

function sumar(num1, num2, callback) {
  callback(num1 + num2);
}

function cuadrado(num, callback) {
  callback(num * num);
}

function dividir(num, callback) {
  callback(num / 2);
}

function sustraer(num, callback) {
  callback(num - 100);
}

function esMayorCero(num, callback) {
  if (num > 0) {
    callback('El numero es Mayor a 0');
  } else {
    callback('El numero es menor o igual a 0');
  }
}

// callback hell
/*
sumar(8, 5, function (resultSumar) {
  console.log('La suma de los 2 numeros es:', resultSumar);
  cuadrado(resultSumar, function (resultCuadrado) {
    console.log('El cuadrado de la suma de los 2 numeros es:', resultCuadrado);
    dividir(resultCuadrado, function (resultDividir) {
      console.log(
        'La division entre 2 del cuadrado de la suma de los 2 numeros es:',
        resultDividir
      );
      sustraer(resultDividir, function (resultSustraer) {
        console.log(
          'Al sustraer 100 a La division entre 2 del cuadrado de la suma de los 2 numeros es:',
          resultSustraer
        );
        esMayorCero(resultSustraer, function (resultEsMayorCero) {
          console.log(resultEsMayorCero);
        });
      });
    });
  });
});
*/

/*
  No caer en callback hell: 
  funcion anonima , dentro de otra , dentro de otra
  Dificil de mantener, de entender, de leer , de Refactorizar 

  Tips
  1- Definir las funciones aparte, y en lugar de pasar la funcion anonima pasar 
    el nombre de la funcion definida

  2- Modularizar en diferente Archivo
*/

function cbSumar(resultSumar) {
  console.log('La suma de los 2 numeros es:', resultSumar);
  cuadrado(resultSumar, cbCuadrado);
}

function cbCuadrado(resultCuadrado) {
  console.log('El cuadrado de la suma de los 2 numeros es:', resultCuadrado);
  dividir(resultCuadrado, cbDividir);
}

function cbDividir(resultDividir) {
  console.log(
    'La division entre 2 del cuadrado de la suma de los 2 numeros es:',
    resultDividir
  );
  sustraer(resultDividir, cbSustraer);
}

function cbSustraer(resultSustraer) {
  console.log(
    'Al sustraer 100 a La division entre 2 del cuadrado de la suma de los 2 numeros es:',
    resultSustraer
  );
  esMayorCero(resultSustraer, cbEsMayorCero);
}

function cbEsMayorCero(resultEsMayorCero) {
  console.log(resultEsMayorCero);
}

sumar(8, 10, cbSumar);
