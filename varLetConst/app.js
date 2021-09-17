/*
  VAR 
  En una funcion solo toma el scope de la funcion
  para evitar esto se deja sin el var y funciona como global
  pero es mala practica con 'use strict' da error
  En bloques de codigo (if, switch) si toma scope global
*/
'use strict';

var a = 10;
console.log(a); // 10

function myFunction() {
  var b = 20;
  // b = 20; // la tomaria como global pero con use strict daria error
  console.log(a); // 10
  console.log(b); // 20
}

myFunction();
// console.log(b); // b is not defined

if (true) {
  var c = 30;
}
console.log(c);

switch (a) {
  case 10:
    var d = 40;
    break;
}
console.log(d);

/*
  LET 
  Solo tiene scope donde se declara fuera no 
  Fuera de bloques de codigo (if, switch) NO sirve
*/

function myFunction2() {
  let e = 120; // e is not defined fuera de aca
}

myFunction2();
// console.log(e); // e is not defined

if (true) {
  let f = 130;
}
// console.log(f); // f is not defined

function myFunction3() {
  let e = 120;
  console.log(e); // 120
  if (true) {
    let f = 130;
    console.log(e); // 120
  }
  // console.log(f); // f is not defined
}
myFunction3();

/*
  CONST 
  Valor de solo lectura asignado, se debe inicializar al declarar
  No se puede cambiar valor, ni volver a declara con el mismo nombre
  se usan para almacenar constantes o elemetos que se espera no cambien
*/

const x = 50;
// x = 500; // TypeError: Assignment to constant variable.
// const x = 500; // SyntaxError: Identifier 'x' has already been declared
console.log(x);

/*
task
*/
function tengoClases(dia) {
  switch (dia) {
    case 'lunes':
      console.log('tenés clases');
      break;

    case 'miércoles':
      console.log('tenés clases');
      break;

    case 'viernes':
      console.log('tenés clases');
      break;

    default:
      console.log('no tenés clases');
      break;
  }
}
let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11, 16);
console.log(licenciada);

for (let i = 0; i < numero; i++) {
  if (i % 2 === 1) {
    count++;
  }
}
return count;
// tengoClases('miércoles');
