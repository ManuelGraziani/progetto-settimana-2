/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

function petsStamp(x){
  for(let i = 0;i<x.length;i++){
    console.log(x[i])
  }
}
petsStamp(pets)
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
function petsSort(z){
  console.log(z.sort())
}

petsSort(pets)
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
function petsReverse(y){
  console.log(y.reverse())
}
petsReverse(pets)
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
function petsChange(x){
  let animal = x.shift();
  x.push(animal)
}
petsChange(pets)
console.log(pets)
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function addProp(n){
  for(let i = 0; i<n.length;i++){
    n[i].licensePlate = "dyuok78"
  }
  console.log(cars)
} 
addProp(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let obj = {brand: 'Fiat', model: 'Punto', color: 'gray', trims: ['titanium', 'st', 'active'],}
function addObj(z){
  z.push(obj);
  for(let i = 0; i<z.length;i++){
    z[i].trims.pop()
  }
}
addObj(cars)
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
function firstEl(y){
  for( let i = 0;i < y.length;i++){
    let element = y[i].trims.shift();
    justTrims.push(element)
  }
}
firstEl(cars)
console.log(justTrims)
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
let car = 0
for (let i = 0; i<cars.length; i++){
  if(cars[i].color.startsWith("b")){
    console.log("Fizz")
  } else{
    console.log("Buzz")
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while(i<numericArray.length && numericArray[i] !== 32){
  console.log(numericArray[i])
  i++
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let arr1 = [];
let letters = "";
for( let i = 0;i < charactersArray.length;i++){
  letters = charactersArray[i];
  switch(letters){
    case "g":
      arr1.push(7);
      break;
    case "n":
      arr1.push(12);
      break;
    case "u":
      arr1.push(19);
      break;
    case "z":
      arr1.push(21);
      break;
    case "d" :
    arr1.push(4);
    break;
}
}

console.log(arr1)
