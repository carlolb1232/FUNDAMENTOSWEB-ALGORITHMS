let fruta1 = "manzanas";
let fruta2 = "naranjas";
    
fruta2 = fruta1;
    
console.log(fruta2 + " y " + fruta1);

// manzanas y manzanas

var fruta3 = "s";
var fruta4 = "naranjas";
    
var temp = fruta3; // temp es un nombre común para esto
fruta3 = fruta4;
fruta4 = temp;
    
console.log(fruta4 + " y " + fruta3);
// s y naranjas

let start = 0;
let end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

function reverse(arr) {
  let auxiliar = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    auxiliar = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = auxiliar
  }
  console.log(arr)
}

reverse(["a", "b", "c", "d", "e"])

// [ 'e', 'd', 'c', 'b', 'a' ]



