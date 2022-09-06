let estáSoleado = true;
let temperatura = 45; // supongamos que son grados Fahrenheit
let estáLloviendo = false;
let quéLlevar = "Debería llevar: ";
    
if(estáSoleado) {
  quéLlevar += "gafas, ";
}
if(temperatura < 50) {
  quéLlevar += "un abrigo, ";
}
if(estáLloviendo) {
  quéLlevar += "un paraguas, ";
}
quéLlevar += "y una sonrisa!";
    
console.log(quéLlevar);
// Debería llevar: gafas, un abrigo, y una sonrisa!

for(let i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignición!");
  }
}
    
console.log("despegue!");
// 10 9 8 7 6 5 4 3 ignición! 1 despegue!

let contarPositivos = 0;
let numeros = [3, 4, -2, 7, 16, -8, 0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    contarPositivos++
  }
}

console.log("hay " + contarPositivos + " valores positivos");
// hay 4 valores positivos