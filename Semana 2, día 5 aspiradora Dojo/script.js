let theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
let theRandomDojo = [];
let ninjasTotales = 0;
let aleatorio = 0;


for (let i = 0; i < 10; i++) {
  theRandomDojo.push([]);
  for (let j = 0; j < 10; j++) {
    aleatorio = Math.round(Math.random()*2);
    console.log(ninjasTotales)
    if(ninjasTotales > 10 || ninjasTotales > 11){
      theRandomDojo[i].push(0);
    }else{
      if (aleatorio == 1) {
        theRandomDojo[i].push(1); 
        ninjasTotales++
      }
      if(aleatorio == 2){
        theRandomDojo[i].push(2)
        ninjasTotales += 2;
      }
      if(aleatorio == 0){
        theRandomDojo[i].push(0)
      }
    }
  }
}

console.table(theRandomDojo)



let dojoDiv = document.querySelector("#the-dojo");
let domNinjas = document.getElementById("ninjas")
  
// Crea las filas de botones para este juego
function render(theDojo) {
  let result = "";
  for(let i=0; i<theDojo.length; i++) {
    for(let j=0; j<theDojo[i].length; j++) {
      // result += `<button class="tatami" onclick="howMany(${i}, ${j}, this, theDojo)"></button>`;
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this, theRandomDojo)"></button>`;
    }
  }
  return result;
}
    
// TODO - Haz que esta función nos diga cuántos ninjas están escondidos 
//        Debajo de los cuadros adyacentes (todos los lados y esquinas)
//        Usa i y j como los índices para verificar theDojo
function howMany(i, j, element, arr) {
  console.log({i, j});
  if (arr[i][j] !=0) {
  dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
  }
  let ninjas = [];
  let sum = 0;
  ninjas[0] = arr[i][j-1];
  ninjas[1] = arr[i][j+1];
  if (arr[i-1]) {
    ninjas[2] = arr[i-1][j];
    ninjas[3] = arr[i-1][j-1];
    ninjas[4] = arr[i-1][j+1];
  }
  if (arr[i+1]) {
    ninjas[5] = arr[i+1][j];
    ninjas[6] = arr[i+1][j-1];
    ninjas[7] = arr[i+1][j+1];
  }
  console.log(ninjas)
  for (let i = 0; i < ninjas.length; i++) {
    if (ninjas[i] != undefined) {
      sum += ninjas[i]
    }
  }
  console.log(sum)
  domNinjas.innerText = `Al rededor hay ${sum} ninjas`
}
    
// BONUS CHALLENGES
// 1. dibuja el número en el inferior en vez de alertarlo DONE
// 2. al comienzo, sitúa 10 ninjas al azar en thgeDojo con al menos 1 en cada lugar DONE
// 3. si haces clic en un ninja, el juego debe comenzar de cero
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`; DONE
    

// dojoDiv.innerHTML = render(theDojo);    
dojoDiv.innerHTML = render(theRandomDojo);    

