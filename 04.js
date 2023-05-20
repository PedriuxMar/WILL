/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var string=num.toString();
  var array=string.split("");
  var j=array.length-1;
  for (i=0;i<(array.length/2);i++){
    if (array[i]!=array[j]){
      return false;
    }
    j=j-1;
  }
  return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico