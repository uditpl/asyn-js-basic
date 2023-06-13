const lib = require('./lib');

let amount = 2000;
let tocut = 200;


function chargeDebitCard(){
    amount = amount-tocut
    console.log(`remening amount is ${amount}`)
}

//chargeDebitCard()

//lib.updateAccount('tv', chargeDebitCard)

let promisesObj = lib.promisesUpdateAccount('tv').then(chargeDebitCard);