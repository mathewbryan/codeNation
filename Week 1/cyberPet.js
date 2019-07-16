let userInput;
let petName;
let foodTypes;
let enjoys;

class cyberPet {
    constructor (name) {
    this._name = name;
    this._hunger = 75;
    this._thirst = 75;
    this._happiness = 75;
    }
get name(){
    return this._name;
}
get hunger(){
    return this._hunger;   
}
get thirst(){
    return this._thirst;
}
get happiness(){
    return this._happiness;
}
eat(){
    if (this.hunger <= 90){
        this._hunger = this.hunger + 10
        alert(`${pet1.name} started eating, their hunger level is now ${pet1.hunger}%`)
    }
    else {
        alert('Sorry you can not feed any more')
    }
}
drink(){
    if (this.thirst <= 90){
        this._thirst = this.thirst + 10
        alert(`${pet1.name} started drinking, their thirst level is now ${pet1.thirst}%`)
    }
    else {
        alert('Sorry you can not give any more water')
    }
}
ignore(){
    this._happiness = this.happiness - 10
    this._hunger = this.hunger - 15
    this._thirst = this.thirst - 15
    if (this.hunger <= 0 || this.thirst <= 0){
    alert(`You're pet ${this.name} has died, game over`)
    }
    else{
    alert(`Your pet ${this.name} didnt like that, their happiness is now ${pet1.happiness}, their hunger is ${pet1.hunger} and their thirst is ${pet1.thirst}`)
    }
}
} 

class rabbit extends cyberPet {
    constructor (name, lovesCarrots, favFoods){
        super(name)
        this._lovesCarrots = lovesCarrots;
        this._favFoods = favFoods;
    }
    get lovesCarrots(){
        return this._lovesCarrots
    }
    play(){
        alert(`${this._name} takes a few hops forward, using some energy`)
        this._hunger = this.hunger - 10
        this._thirst = this.thirst - 10
        this._happiness = this._happiness + 10
    }
}

class dog extends cyberPet {
    constructor (name, _lovesBonese){
        super(name)
        this._lovesBones = _lovesBones;
    }
    get lovesBones(){
        return this.lovesBones
    }
    play(){
        alert(`${this._name} enjoys their walk, and uses some energy`)
        this._hunger = this.hunger - 10
        this._thirst = this.thirst - 10
        this._happiness = this._happiness + 10

    }
}

class cat extends cyberPet {
    constructor (name, _lovesCatNip){
        super(name)
        this._lovesCatNip = _lovesCatNip;
    }
    get lovesCatNip(){
        return this.lovesCatNip
    }
    play(){
        alert(`${this._name} disapears outside for hours to catch mice, using some energy`)
        this._hunger = this.hunger - 10
        this._thirst = this.thirst - 10
        this._happiness = this._happiness + 10

    }
}

const foods = () => {
    foodTypes =  prompt(`What type of food does ${petName} enjoy?`)
    // return foodTypes
    console.log(foodTypes)
}

const namePet = () => {
    petName = prompt('What would you like to call your pet?')
    return petName
    console.log(petName) 
}
const options = () => {
    userInput = prompt(`What would you like to do with your pet ${pet1.name}  \n  1. Feed \n 2. Play \n 3. Give water \n 4. Ignore \n 5. Quit`)
    console.log(userInput)
    if (userInput == 1 || userInput == 'Feed'){
    pet1.eat()
    // alert(`${pet1.name} started eating, their hunger level is now ${pet1.hunger}%`)
    options()
    }
    else if (userInput == 2 || userInput == 'Play') {
    pet1.play()
        alert(`${pet1.name}'s happiness level is now ${pet1.happiness} but there hunger is now ${pet1.hunger} and their thirst is ${pet1.thirst} as they have used some energy`)
    options()
    }
    else if (userInput == 3 || userInput == 'Give water') {
        pet1.drink()
        options()
    }
    else if (userInput == 4 || userInput == 'Ignore'){
        pet1.ignore()
        options()}

    else if (userInput == 5 || userInput == 'Quit'){
        
    }
    else{
        alert(`Please choose something to do with ${pet1.name}`)
        options()
    }
}


const createPet = () => {
    userInput = prompt('Hello! What type of pet would you like to look after?? \n1. Rabbit \n 2. Dog \n 3. Cat')
    console.log(userInput)
    namePet()
    foods()
    if (userInput == 1 || userInput == 'Rabbit'){
    alert(`Your pet is a Rabbit called ${petName} who really enjoys eating ${foodTypes}`)
    // move next line to a seperate function??? 
    enjoys = prompt(`Does ${petName} enjoy carrots? \n true \n false`)
    console.log(enjoys)
    pet1 = new rabbit(petName, enjoys, foodTypes)
    }
    else if (userInput == 2 || userInput == 'Dog'){
    alert(`Your pet is a Dog called ${petName} who really enjoys eating ${foodTypes}`)
    pet1 = new dog(petName, true, foodTypes)
}
    else if (userInput == 3 || userInput == 'Cat'){
    alert(`Your pet is a Cat called ${petName} who really enjoys eating ${foodTypes}`)
    pet1 = new cat(petName, true, foodTypes)
    }
   
    else {
    alert('Please enter something')
    }
    options()
}

// const timer = () => {
    
// }

createPet()
console.log(pet1.name)
console.log(pet1.lovesCarrots)
