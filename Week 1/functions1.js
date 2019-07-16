/*
let coffeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeIsGrinding){
        console.log("Stopping the grind");
        coffeIsGrinding = false;
    }
    else {
        console.log("Grinding is about to begin");
        coffeIsGrinding = true;
    }
}

pressGrindBeans();
pressGrindBeans();


const coffeeOrder = (size, type) => {
    console.log(`Your coffee order is a ${size} ${type}`);
}
coffeeOrder('small', 'americano');
coffeeOrder('large', 'latte');
coffeeOrder('large', 'mocha');
*/


//activity 1

// let orderCount = 0;

// const takeOrder = (topping, topping2) => {
//     console.log(`Pizza with ${topping} & ${topping2}`);
//     orderCount++;
// }

// takeOrder("pineapple", "peppers");
// takeOrder("pineapple", "ham");
// takeOrder("cheese", "mushrooms");
// console.log(orderCount);

// /*
// //cash machine
// let myPin = 1234
// let myBalance = 400

// const dispenseCash = (pin, cashAmount) => {
//     if (pin == myPin && cashAmount <= myBalance)
//         console.log("PIN correct, here is your cash")
//         else if ( pin == myPin && cashAmount >= myBalance)
//         console.log("Sorry you have insufficient funds")
//         else if ( pin != myPin)
//         console.log("Sorry your pin is incorrect")
//         else{
//             console.log('Please try again')
//         }
// }

// dispenseCash(1234, 20);
// dispenseCash(1244, 20);
// dispenseCash(1234, 600);
// */

// //cash machine v2 

// let myPin  = 1234
// let myBalance = 400

// const checkBalance = (cashToWithdraw) => {
//     if (cashToWithdraw <= myBalance) {
//         console.log6(`You have sufficient funds, here is your cash to the value of £${cashToWithdraw}`);
//     }
//     else { 
//         console.log('Sorry you have insufficient funds')
//     }
// }

// const checkPIN = (pin, cashToWithdraw) => {
//     if (pin == myPin) {
//         console.log('Your pin is correct');
//         checkBalance(cashToWithdraw)
//     }
//     else{
//         console.log('Your pin is incorrect')
//     }
// }



// checkPIN(1234, 90) //checkBalance(20);

//cash machine v3 
let userBalance = 1200
let userPin = 1234
let withdrawLimit = 250
let depositLimit = 500 

const checkPIN = (pin) => {
    if (userPin == pin) {
        console.log('PIN correct')       
    }
    else{
        console.log('PIN incorrect')
    }
}

const withdraw = (withdrawAmount) => {
    if (withdrawAmount <= withdrawLimit && withdrawAmount <= userBalance) {
        console.log(`Sufficient funds, here is your £${withdrawAmount}`)
    }
    else{
        console.log('Sorry unable to process request')
    }
} 


// const depositLimit = () =>

// const changePin = () =>

// const exit = () =>

checkPIN(1234)
withdraw(20)