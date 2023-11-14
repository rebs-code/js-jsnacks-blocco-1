"use strict";



//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
let myArray = [];
let sum = 0;


while (sum < 50) {
    let userNumber = parseInt(prompt("Inserisci un numero"));
    myArray.push(userNumber);
    sum += userNumber;
    console.log(sum);
}