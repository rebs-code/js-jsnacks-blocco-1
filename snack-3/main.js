"use strict";

//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
let myArray = [];
let sum = 0;

//con ciclo while
while (sum < 50) {
  let userNumber = parseInt(prompt("Inserisci un numero"));
  myArray.push(userNumber);
  sum += userNumber;
  console.log(sum);
}

//con ciclo for
for (let i = 0; sum < 50; i++) {
  let userNumber = parseInt(prompt("Inserisci un numero"));
  myArray.push(userNumber);
  sum += userNumber;
  console.log(sum);
}

//con ciclo do while
do {
  let userNumber = parseInt(prompt("Inserisci un numero"));
  myArray.push(userNumber);
  sum += userNumber;
  console.log(sum);
} while (sum < 50);
