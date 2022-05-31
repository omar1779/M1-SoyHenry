'use strict'

const { prototype } = require("@11ty/eleventy");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial
(representado como n!) es el producto de n por todos los números naturales menores que él y mayores a
0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
*/

function nFactorial(n) {

  if (n === 0){
		return 1;
	}
	return n * nFactorial (n-1);

// var total = 1;
// for (var i = 1; i<= n; i++) {
//   total = total * i;
// }
// return total;
}
/* nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1,
respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que
se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
Secuencia: [
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
]
Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden
intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
function nFibonacci(n) {
  // var fibonacci = [0]
  // for (var i = 2; i < n; i++){
  //   if (i>=1){
  //     fibonacci.push(fibonacci[i] + fibonacci[i-1]);
  //   }
  //   else{
  //     fibonacci.push(fibonacci[i]+1);
  //   }
  // }
  // return fibonacci [n]
  if (n === 0 || n === 1) return n
  return nFibonacci(n-1) + nFibonacci(n-2)
}

/*
  Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que
  ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.fifo = [];

  this.enqueue = function (valor){
    this.fifo.push(valor)
  }
  this.dequeue = function (remueve){
    return this.fifo.shift(remueve)
  }
  this.size = function (){
    return this.fifo.length
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
