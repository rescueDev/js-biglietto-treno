//INPUT

     //chiedo all'utente quanti km dovrà percorrere
    var askKm = parseInt(prompt("Quanti km dovrai percorrere?"));

    //chiedo all'utente quanti anni ha
    var askAge = parseInt(prompt("Quale è la tua età?"));

console.log(askKm, askAge);


//OPERAZIONI

    //calcolo prezzo biglietto
    var ticketPrice = (askKm * 0.21);

    //calcolo biglietto con sconto 20%
    var discount20 = (ticketPrice - (ticketPrice * 0.2));

    //calcolo biglietto con sconto 40%
    var discount40 = (ticketPrice - (ticketPrice * 0.4));

console.log(ticketPrice, discount20, discount40);

// OUTPUT

// stabilire il costo biglietto e se spetta lo sconto
if (askAge < 18) {
//prezzo con sconto underAged
    document.getElementById("prezzo-biglietto").innerHTML = "Il totale del biglietto con lo sconto minorenni è di" + discount20 + " euro";
}
else if (askAge > 65) {
//sconto over65 
document.getElementById("prezzo-biglietto").innerHTML = "Il totale del biglietto con lo sconto over 65 è di " + discount40 + " euro";
}
else { 
//nessuno sconto
    document.getElementById("prezzo-biglietto").innerHTML = "Il totale del biglietto è di " + ticketPrice + " euro";
}


  
   