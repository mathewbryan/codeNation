//variables here

let userInput;
let userPin = 1234;
let accountNum = 11223344
let userBalance = 1200;
let enteredPIN; 

//functions here

// checks the PIN input against the PIN stored in the vairable, this can be changed later
const checkPin = () => {
    userInput = prompt('Please tell me your pin: ')
    console.log(userInput);

    if (userInput == userPin){
        alert(`Its you, account number ${accountNum}!!`) 
        enteredPIN = true
        console.log(enteredPIN) 
        options()
    }
    else{
        alert('Umm... go away')
        enteredPIN = false
    }
}
// user can withdraw money, this updates the current balance
const withDrawCash = () => {
    userInput = prompt ('How much would you like to withdraw?')
    console.log(userInput);

    if (userInput < userBalance){
        alert('Processing your request, here is your cash')
        userBalance -= userInput
        alert(`Your new balance is ${userBalance}`)
    }
    else {
        alert('insufficient funds, please try again later.')
    }
}
// user can change their PIN, which is then stored against the pin variable
const changePIN = () => {
    userInput = prompt('To change your PIN, please enter your current PIN')
    if (userInput == userPin){
        userInput = prompt('Please enter your new PIN')
        userPin = userInput
        console.log(userPin)
        options()
    }
    else{
        alert('incorrect PIN try again later')
    }
}
// allows user to add money to their account and updates the balance
const depositCash = () => {
    userInput = prompt('How much would you like to deposit?')
   
    userBalance += parseInt(userInput)  
    alert(`Your new balance is ${userBalance}`)
}
// displays current user balance 
const checkBalance = () => {
    alert(`Your current balance is £${userBalance}`)
    options()
}
// presents user with a list of options they can use 
const options = () => {
    userInput = prompt('What would you like to do?? \n 1. Withdraw Cash \n 2. Change PIN \n 3. Deposit Cash \n 4. Check Balance \n 5. Quit')
    
    if (userInput == 1 || userInput == 'Withdraw Cash'){
        withDrawCash()
    }
    else if (userInput == 2 || userInput == 'Change PIN'){
        changePIN()
    }
    else if (userInput == 3 || userInput == 'Deposit Cash'){
        depositCash()
    }
    else if (userInput == 4 || userInput == 'Check Balance'){
        checkBalance()
    }
    // added in an exit option so the user can leave 
    else if (userInput == 5 || userInput == 'Quit'){
        alert('Thanks for using our cash machine today ')
    }
    else {
        alert('No action selected, try again later')
    }
}
//main code
alert('Hello')
checkPin();
