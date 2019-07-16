let money = 20
let coffee = 1
let chocolate = 1
let userInput;

const thisFunction = () => {
    userInput = prompt('What drink would you like? \n 1. Coffee \n 2. Chocolate \n ');
if (userInput == 1 || userInput == 'coffee'){
    coffeeValue()
    console.log("You're in for a good time!")    
}

else if (userInput == 2 || userInput == 'Chocolate'){
    chocolateValue()
    console.log("You're in for a good time!")    
}
else {
    alert('Not a valid choice, sorry')   
}
}
   

const coffeeValue = () => {
    userInput = prompt('How many coffees would you like?')
    if (userInput == '' || userInput == 0) {
        alert('not a valid amount')
    }
        else{
    money -= userInput * coffee 
        if (money < 0){
            alert('sorry no coffee for you not enough MONEY')
        }
         else {
            alert('great heres your drink')
            alert(`New balance = £${money}`) 
        }
        
 }
}

const chocolateValue = () => {
    userInput = prompt('How many chocolates would you like?')
    if (userInput == '' || userInput == 0) {
        alert('not a valid amount')
    }
        else{
    money -= userInput * chocolate
    if (money < 0) {
        alert('sorry no choco for you, not enough MONEY') 
    }
   else {
    alert('great heres your drink')
    alert(`New balance = £${money}`) 
   }
        }
    }
// const blankState = () => {
//     if (userInput == ''){
//         alert('Please enter an amount')
//     }
//     else{
//         alert('thanks')
//     }
// }

thisFunction()