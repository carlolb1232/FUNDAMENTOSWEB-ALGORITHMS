var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// Podemos console.log el `8` en esta arreglo si
console.log(arr2d[0][2]);
// el primer índice `0` selecciona el subarreglo `[2, 5, 8]` 
// el segundo índice `2`selecciona el `8` fuera de ese subarreglo

// Función que devuelva true si el valor está presente y false en caso contrario.
console.log("Función que devuelva true si el valor está presente y false en caso contrario");

function isPresent2d(arr, value){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == value) {
        console.log("true")
        return true
      }
    }
  }
  console.log("false")
  return false
}

isPresent2d(arr2d, 9)

// completa la función siguiente
function flatten(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j])
    }
  }
  return flat;
}
  
let result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // esperamos obtener de vuelta [2, 5, 8, 3, 6, 1, 5, 7, 7]