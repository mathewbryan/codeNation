let player1Name; 
let player2Name;
let userInput;
let player1Card;
let player2Card;
let deck = [card1, card2, card3, card4, card5, card6, card7, card8]


// card class
 class Card {   
    constructor(cardName, population, highestTemp, lowestTemp){
        this._cardName = cardName
        this._population = population
        this._highestTemp = highestTemp
        this._lowestTemp = lowestTemp
}
get cardName(){
    return this._cardName
}
get population(){
    return this._population
}
get highestTemp(){
    return this.highestTemp
}
get lowestTemp(){
    return this._lowestTemp
}
}

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


// deck of cards
const createDeck = () =>{
const card1 = new Card('UK', 66000000, 30, -5)
const card2 = new Card('Brazil', 209000000, 51, 49)
const card3 = new Card('USA', 0, 34, -10)
const card4 = new Card('Russia', 400000000, 5, -20)
const card5 = new Card('Greece', 60000000, 39, 9)
const card6 = new Card('France', 40000000, 35, -2)
const card7 = new Card('Germany', 77000000, 32, -3)
const card8 = new Card('Cananda', 20000000, 22, -19)
return card1, card2, card3, card4, card5, card6, card7, card8

}

console.log(card1.cardName)


// // start game
// const startGame = () => {
//     userInput = prompt("Hi! What's the name of player 1?")
//     player1Name = userInput
//     const cardPlayer1 = new Player(player1Name)
//     userInput = prompt(`Great, thanks ${player1Name}, how about the name of player 2?`)
//     player2Name = computer
//     const cardPlayer2 = new Player(player2Name)
//     alert(`ok so player 1 is ${cardPlayer1.name} and player 2 is ${cardPlayer2.name}`)
//     console.log(cardPlayer1.name)
//     console.log(cardPlayer2.name)
// }


const allocateCards = () => {
player1Card = deck[Math.floor(Math.random() * deck.length)]

console.log(player1Card)
}
// const compareCards = () =>{

// } 

// startGame()
createDeck()
allocateCards()