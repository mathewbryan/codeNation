// // some random vairables, number string and boolean 
// let num1 = 123
// let string = 'some string'
// let bool = true

// let arrayTest1 = [
//     'Mat',
//     'Bryan',
//     28,
//     'Stoke-on-Trent'
// ]
// // adding to the end of the list
// arrayTest1.push('Staffordshire')

// // loops through the above array and logs each seperately 
// for (let i = 0; i < arrayTest1.length; i++) {
//     console.log(arrayTest1[i])
//     }


// // function to ask how much should be withdrawn and then deduct from balance
// let myBalance = 1200
// let userInput;

// const withdrawFunction = () => {
//     userInput = prompt('How much would you like to withdraw?')
//     myBalance -= userInput
//     console.log(`Your new balance is ${myBalance}`)
//     }


class Cars {
    constructor(reg){
        this._reg = reg;
        this._charge = 0.00;
        this._hours = 0;
    }
    get reg(){
        return this._reg;
    }
    get hours(){
        return this._hours;
    }
    get charge(){
        return this._charge;
    }
    increaseHours(){
        this._hours++;
        this._charge += 1.50;
    }
}

class Staff extends Cars {
    constructor(hours, staffNum){ 
        super(hours);
    this._credits = 0.00;
    this._staffNum = staffNum 
}
    get credits(){
        return this._credits;
    }
    get staffNum(){
        return this._staffNum;
    }
    increaseCredits(){
        this._hours++;
        this._charge += 1.50;
    }
}

const amountOfCredits = (hours, staffNum) => {
    const staff = new Staff(hours, staffNum);{
    for (i = 0; i < hours; i++){
        staff.increaseCredits();
    }   
    console.log(`Staff member ${staffNum} has been parked for ${staff.hours} hours and the is credits accrued are ${staff.charge}`) 
}}

const amountToPay =(reg, hr) => {
    const cars = new Cars(reg);
    for (i = 0; i < hr; i++){
        cars.increaseHours();
    }
    console.log(`The amount you need to pay for parking for ${cars.hours} hours is £${cars.charge}`);
}
amountToPay('RE68 DSY', 5);
amountOfCredits(99, 4321); 
amountOfCredits(99, 4321); 