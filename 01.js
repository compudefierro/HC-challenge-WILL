/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej:
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  // APRENDERME: formas de recorrer un arrray.
  var arregloSoloNumeros = [];
  // PLANTEO 01: arrow function
  // array.forEach(element => {
  //   if(Number.isInteger(element)) {
  //     arregloSoloNumeros.push(element)
  //   }
  // });
  // PLANTEO 02: function
  // array.forEach(function (element) {
  //   if (typeof element === "number") {
  //     arregloSoloNumeros.push(element);
  //   }
  // });
  // PLANTEO 03: bucle for
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arregloSoloNumeros.push(array[i]);
    }
  }
  return arregloSoloNumeros;
}

// No modifiques nada debajo de esta linea //

module.exports = soloNumeros;
