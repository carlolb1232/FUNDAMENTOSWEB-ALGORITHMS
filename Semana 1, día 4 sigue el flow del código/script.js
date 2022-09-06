let x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
// 5
setX(15);
console.log(x);
// 15

let y = 5;
    
function addToY(amount) {
    return y + amount;
    console.log("hola, ahí");
}
    
console.log(y);
// 5
let result = addToY(-10);

console.log(result);
// -5
console.log(y);
// 5

function esPal(arr) {
  for(let left=0; left<arr.length/2; left++) {
      let right = arr.length-1-left;
      if(arr[left] != arr[right]) {
          return "No es un palíndromo!";
      }
  }
  return "Palíndromo!";
}
  
let result1 = esPal( [1, 1, 2, 2, 1] );
console.log(result1);
// No es un palíndromo
  
let result2 = esPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
// Palíndromo