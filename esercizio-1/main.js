"use strict";

const word1 = prompt("Inserisci la prima parola:");
const word2 = prompt("Inserisci la seconda parola:");


if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
} else {
    console.log("Le parole hanno la stessa lunghezza");
};