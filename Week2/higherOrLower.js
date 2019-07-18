let player1;
// let player2;
let currentCard;
let userInput; 
let numCorrect = 0; 

let newCard; 
let deck = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
]

class Player {
    constructor(name){ 
    this._name = name
    this._score;
}
get name(){
    return this._name
}
get score(){
    return this._score
}
get currentCard(){
    return this._currentCard
}
}

// const cardPlayer = new player(startGame())
// console.log(cardPlayer.name)

// can be used to see how many correct guesses a user has 
const scoreCalc = () =>{
    numCorrect += 1
    alert(`You managed to get ${numCorrect} correct in a row`)

}

// used to start the game 
const startGame = () => {
    userInput = prompt("Hi! What's your name player 1?")
    player1 = userInput
    alert(`Great, lets see if you can play your cards right ${userInput}`)
    const cardPlayer = new Player(userInput, 1)
    console.log(cardPlayer.name)
    currentCardFunc()

}
// picks random card from the deck variable
const drawCard = () => {
    newCard = deck[Math.floor(Math.random()* deck.length)]
    console.log(newCard)
    higherOrLower()
}

// compares new card to players current card & compares to user guess
const higherOrLower = () => {
if (newCard > currentCard && userInput == 1 || userInput == 'Higher'){
    alert(`Your new card is ${newCard}, you were right it was higher! Lets see if you'll be so lucky next time`)
    currentCard = newCard
    currentCardFunc()
}
else if (newCard <= currentCard && userInput == 2 || userInput == 'Lower'){
    alert(`Your new card is ${newCard}, you were right it was lower! Lets see if you'll be so lucky next time`)
    currentCard = newCard
    currentCardFunc()
}
else{
    alert(`Your card was ${newCard} too bad, you lose!!!`)
    // scoreCalc()
}
}


const currentCardFunc = () => {
    alert(`Your current card is ${currentCard}`)
    userInput= prompt(`Is your next card going to be higher or lower than ${currentCard} \n 1. Higher \n 2. Lower`)
    if (userInput == 1 || userInput.toLowerCase == 'Higher'){
    drawCard()
    }
    else if (userInput == 2|| userInput.toLocaleLowerCase == 'Lower') {
    drawCard()
    }       
}

// 
const firstCard = () => {
    currentCard = deck[Math.floor(Math.random()* deck.length)]

}    
firstCard()
startGame()


