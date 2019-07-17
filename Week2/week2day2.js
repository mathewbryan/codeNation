// challenge 1 

let simpleFunc = () => {
    console.log('Hello Code Nation')
}

let simpleLoop = (simpleFunc) => {
    
    for (i = 0; i < 5; i++)
    simpleFunc()
}

simpleLoop(simpleFunc)

// challenge 2 

// let arrayVar = [10, 29, 34, 41, 58]
// let newArray = arrayVar.map((num) => num *3)

// console.log(newArray)

// // challenge 3

// const multiply = (a,b) =>{
//     return a*b
// }
// const add = (a,b) => {
//     return a + b
// }
// const divide = (a,b) => {
//     return a/b
// }
// const subract = (a,b) => {
//     return a - b
// }
// const doMath = (num1) => {
//     return a-b
// }

// const doMath = (num1) => {
//     return (num1, fn) => {
//         return fn(num1, num2)
//     }
// }
// doMath(3)