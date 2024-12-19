//CONSEGNA

// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



//PUNTI PRINCIPALI

//numero di partenza : 1
//numero finale : 100
//il numero è multiplo di 3? Allora stampa il messaggio "Fizz"
//il numero è multiplo di 5? Allora stampa il messaggio "Buzz"
//il numero è sia multiplo di 3 che di 5? Allora stampa il messaggio "FizzBuzz"
//il numero non rientra nelle condizioni precedenti? Allo stampa il valore di i 



//SVOLGIMENTO DELL'ESERCIZIO

// Il valore iniziale assegnato alla variabile i è 1.
// La condizione prevede che i sia minore o uguale a 100.
// Alla fine di ogni iterazione, il valore di i viene incrementato di 1.
// Dichiaro una variabile "messaggio", per migliorare la leggibilità del codice.



for (let i = 1; i <= 100; i++) {

    let messaggio;

    // condizione 1: il numero è sia multiplo di 3 che di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {

        messaggio = "FizzBuzz";

    }

    // condizione 2: il numero è multiplo di 3
    else if (i % 3 === 0) {

        messaggio = "Fizz";

    }

    // condizione 3: il numero è multiplo di 5
    else if (i % 5 === 0) {

        messaggio = "Buzz";

    }

    // il numero non rientra nelle condizioni precedenti
    else {

        messaggio = i;

    }

    console.log(messaggio);

}