// OBJECTS

// const person = {
//     firstName: "Mathew",
//     secondName: "Bryan",
//     age: 28,
//     sayHi(){
//         return `Hello, my name is ${this.firstName}`
//     }
// } 
// console.log(person.sayHi())
// console.log(person["firstName"])

// let time = 1000
// let offer = 'none'

// const cafe = {
//     name: "Good Coffee Shop",
//     numberOfSeats: 600,
//     hasSpecialOffer: false,
//     drinks: [
//         'water',
//         'juice',
//         'coffee',
//         'tea',
//     ],
//     breakfastOffer: "Free toast with any drink",
//     lunchOffer: "Free drink with any meal" ,
//     dinnerOffer: "Buy one meal, get one free",
//     none: "Sorry no offer",
//     openCafe(){
//         if(this.hasSpecialOffer){
//             return "Time for a special offer"
//         }
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow"
//     }
// }
// console.log(cafe.openCafe())

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer)
// }
//     else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer)
// }
//     else {
//     offer = cafe.dinnerOffer;
//     console.log(cafe.dinnerOffer)
// }

// let day = 'Saturday'
// let alarm = 'none'

// const alarmSet = {
//     weekendAlarm: "No Alarm",
//     weekdayAlarm: "Get up at 7am"
// }

// if(day == "Saturday" || day == "Sunday"){
//     alarm = alarmSet.weekendAlarm
//     console.log(alarmSet.weekendAlarm)
// }
// else{
//     alarm = alarmSet.weekdayAlarm
//     console.log(alarmSet.weekdayAlarm)
// }

const pet = {
    name: 'Buster',
    typeOfPet: "Dog",
    age: 4,
    colour: 'Brown',
    petEat(){
        return `${this.name} is eating`
    },
    petDrink(){
        return `${this.name} is drinking`
    }
}
console.log(pet.petEat())
console.log(pet.petDrink())