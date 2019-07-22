// challenges 1

let myArray = ["Sam", "Dean", "Stuart", "Leona","Jacob", "Dan"]

console.log(myArray.sort())

// challenge 2

let word = "codenation"

const alphOrder = () =>{
    newWord = word.split('').sort().join('')
    console.log(newWord)
}
alphOrder()

//challenge 3

let numArray = [1,10]

const addNums = () => {
    
}


//challenge 4 

let randArray = ["Sam", "Dean", "Stuart", "Leona","Jacob", "Dan"]

const randFunction = (ARR) =>{

newVariable = randArray[Math.floor(Math.random()* randArray.length)]
console.log(newVariable)}
randFunction(randArray)

// challenge 5

let shoppingList = [
    ['steak', 'chicken', 'tuna'],
    ['flour', 'eggs', 'salt'],
    ['wine', 'beer', 'squash']
]
console.log(shoppingList[1][2])