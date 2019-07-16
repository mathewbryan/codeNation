/*
let num = 10

if (num >= 12) {
    console.log(" It's bigger")
}
else {
    console.log("It's smaller")
}


let age = 28
let country = 'UK'

if (age > 17 && country == 'UK'){
    console.log('Yes I can serve you')
}

else {
    console.log('You are not old enough')
} 
*/

// challenge 1 

let password = "password"

if (password.length < 8){
    console.log('Your password is too short')
}
else {
    console.log(password)
}

// challenge 2

let num = 15

if (num % 3 == 0|| num % 5 == 0){
    console.log('This number is divisible by 3 or 5')
}
else {
    console.log('This is number is not divisble by 3 or 5')
}

//  challenge 3

let num1 = 12

if (num1 % 3 == 0){
    console.log('fizz')
}
else if (num1 % 5 == 0){
console.log('buzz')
}
else if (num1 % 3 == 0 && num1 % 5 == 0){
    console.log('fizz buzz')
}
else {
    console.log(num1)
}

//challenge 4

let num2 = [1000]

if (num2.reverse() - num2 == 0) {
    console.log('palindrome')
}
else {
    console.log('Not a palindrome')
}

/*
// chanllenge 5a 
let time = '9:00'
let placeOfWork = 'Radius'
let townOfHome = 'Biddulph'

if (time == '7:00'){    
    console.log(`I'm in ${townOfHome}`)
}
else if (time == '8:00'){
    console.log('Im currently commuting')
}
else if (time == '9:00'){
    console.log(`Im currently at ${placeOfWork}`)
}
else {
    console.log("Not sure where I am right now")
}
*/

// Challenge 5b 

let time = 7
let placeOfWork = 'Radius'
let townOfHome = 'Biddulph'

switch(time) {
    case 11:
        console.log(`I'm in ${townOfHome}`)
        break;

    case 8:
        console.log('Im currently commuting')
        break;
    case 8.5:
        console.log('Ive just got to work')
        break;
    case 9:
        console.log(`Im currently at ${placeOfWork}`)

    default:
        console.log('Im somewhere or other')
}

// Challenge 6 
let string1 = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'

console.log(string1.lastIndexOf('i'))


// Chanllenge 7 
let word = 'toast'

if (word.charAt(0) == word.charAt(word.length-1)){
    console.log('True')
}
else {
    console.log('False')
}


// Challenge 8
let num3 = 2
let num4 = 6 

if (num3 + num4 % 2  == 0){
    console.log(num3 + num4)
}
else {
    console.log(num3 * num4)
}

// Cinema machine

let age = 18

if (age < 18){
    console.log('ticket price is £8')
}
else if (age >= 60) {
    console.log('ticket price is £7.50')
}
else {
    console.log('ticket price is £10.50')
}


