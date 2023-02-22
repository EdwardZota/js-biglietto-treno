/*
    Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const km = parseInt(prompt('Quanti chilometri dovete percorrere?'));
console.log(km);

const età = parseInt(prompt('Inserisca gentilmente la propria età'));
console.log(età);

const priceKm = 0.21 ;

let priceTot = km * priceKm ;

if (età < 18) {
    document.getElementById('titlediscount').innerHTML = `Dato che sei minorenne ti facciamo uno sconto del 20%`
    priceTot = (priceTot - (priceTot * 0.2)).toFixed(2)

} else if (età >= 65){
    document.getElementById('titlediscount').innerHTML = `Dato che sei minorenne ti facciamo uno sconto del 40%`
    priceTot = (priceTot - (priceTot * 0.4)).toFixed(2)
}

document.getElementById('priceTot').innerHTML = `Il tuo biglietto costa: ${priceTot} euro`