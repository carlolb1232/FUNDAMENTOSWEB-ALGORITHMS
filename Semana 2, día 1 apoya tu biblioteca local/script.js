let suelo = Math.floor(1.8);
let techo = Math.ceil( Math.PI );
let random = Math.random();
    
console.log(suelo);
// 1
console.log(techo);
// 4
console.log(random);
// 0.o ?

function d6() {
  let roll = Math.random();
  
  roll = Math.round(roll*6);
  return roll;
}
  
let tiradaJugador = d6();
console.log("El jugador sumó: " + tiradaJugador);

function oraculo(arr) {
  let random = Math.random();
  random = Math.floor(random*(arr.length+1))
  console.log(arr[random]);
}

let respuestaCotidiana = [
  "Es seguro.",
  "Es decididamente así.",
  "Sin duda.",
  "Sí, definitivamente.",
  "Puedes confiar en ello.",
  "Como yo lo veo, sí.",
  "Es lo más probable.",
  "Pinta bien.",
  "Sí.",
  "Las señales apuntan a que sí.",
  "Respuesta confusa, intenta otra vez.",
  "Pregunta de nuevo más tarde.",
  "Mejor no decirte ahora.",
  "No se puede predecir ahora.",
  "Concéntrate y pregunta otra vez.",
  "No cuentes con eso",
  "Mi respuesta es no.",
  "Mis fuentes dicen que no.",
  "No pinta bien",
  "Muy dudoso."
];

oraculo(respuestaCotidiana)

