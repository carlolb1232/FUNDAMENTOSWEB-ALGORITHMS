let a = 25;
a = a - 13;
console.log(a/2);
// 6
a = "hola";
console.log(a + " hola");
// hola hola

for(let i=0; i<10; i++) {
  console.log(i);
  i = i + 3; 
}
  
// console.log("fuera del bucle " + i);
// Error

function getTotal(arrayOfNumbers) {
    
  let sum = arrayOfNumbers[0];
    
  for(let i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("la suma actual es: " + sum); 
  }
    
  console.log("el total es: " + sum);
    
}
    
getTotal([1, 3, 5]);
// La suma es 10 porque esta inicializando en el primer elemento, que es 1 y se esta sumando 2 veces

