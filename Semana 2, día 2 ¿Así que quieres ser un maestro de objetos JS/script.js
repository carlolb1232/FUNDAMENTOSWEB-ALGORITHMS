let monstruo = {
  id: 1,
  nombre: "Bulbasaur",
  tipos: ["veneno", "hiedra"]
};

console.log(monstruo.nombre);
// Bulbasaus

console.log(monstruo.tipos[1]);
// hiedra

var pokemon = [
  { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
  { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
  { "id": 9,   "name": "Blastoise",  "types": ["water"] },
  { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
  { "id": 23,  "name": "Ekans",      "types": ["poison"] },
  { "id": 24,  "name": "Arbok",      "types": ["poison"] },
  { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
  { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
  { "id": 52,  "name": "Meowth",     "types": ["normal"] },
  { "id": 63,  "name": "Abra",       "types": ["psychic"] },
  { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
  { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
  { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
  { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
  { "id": 98,  "name": "Krabby",     "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
  { "id": 133, "name": "Eevee",      "types": ["normal"] },
  { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for(let i=0; i<pokemon.length; i++) {
  if(pokemon[i].id > 99) {
      console.log(pokemon[i].name);
  }
}

// ID DIVISIBLE POR 3
console.log("ID DIVISIBLE POR 3")
for (let i = 0; i < pokemon.length; i++) {
  if(pokemon[i].id % 3 == 0){
    console.log(pokemon[i])
  }
}

// OBJETOS POKEMON QUE TIENEN MAS DE UN TIPO

console.log("Más de un tipo")

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length>1) {
    console.log(pokemon[i])
  }
}

// POKEMON QUE SU UNICO TIPO ES VENENO

console.log("POKEMON QUE SU UNICO TIPO ES VENENO")

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length == 1 && pokemon[i].types[0] == "poison") {
    console.log(pokemon[i])
  }
}

// POKEMON QUE SU SEGUNDO TIPO ES VOLADOR

console.log("POKEMON QUE SU SEGUNDO TIPO ES VOLADOR")

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length > 1 && pokemon[i].types[1] == "flying") {
    console.log(pokemon[i]);
  }
}

// INVERTIR NOMBRE DE POKEMON QUE SON SOLO SEAN DE TIPO VENENO
console.log("INVERTIR NOMBRE DE POKEMON QUE SON SOLO SEAN DE TIPO VENENO")
for (let i = 0; i < pokemon.length; i++) {
  let nombreInverso = ""
  if (pokemon[i].types.length == 1 && pokemon[i].types[0] == "poison") {
    for (let j = pokemon[i].name.length-1; j >= 0; j--) {
      nombreInverso +=  pokemon[i].name[j]
    }
    console.log(nombreInverso)
  }
}