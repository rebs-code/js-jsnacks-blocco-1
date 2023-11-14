// Ask the user to insert two words with two prompts

const word1 = prompt("Inserisci la prima parola:");
const word2 = prompt("Inserisci la seconda parola:");



Il software stampa prima la parola più corta, poi la parola più lunga.

if (word1.length > word2.lenght) {
    console.log(word1)
} else if (word1.length < word2.lenght) {
    console.log(word2)
} else {
    console.log("Le parole hanno la stessa lunghezza)
};


## Snack 4

Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 



Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.