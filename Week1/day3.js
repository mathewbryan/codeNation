/*
const multiply = (num1, num2) => {
    return num1 * num2    
}
console.log(multiply(6, 7))
console.log(multiply(10, 2))
console.log(multiply(99, 7))


const addStr = (a, b) => {
    return a + ' ' + b;
}

console.log(addStr("Dry", "toast"))
console.log(addStr("Buttered", "toast"))
console.log(addStr("Burnt", "toast"))
*/

/*
let bands = 
["Bloc Party",
"Editors",
"The National", 
];
console.log(bands);
bands[1] = "Radiohead";
console.log(bands);
console.log(bands.length);

bands.push('The Smiths');
console.log(bands);
bands.pop();
console.log(bands);
*/

/*
let websites = [
    'theverge.com',
    'techcrunch.com',
    'bbc.com/news',
];
// push - adds item to the end of an array   
websites.push('thegaurdian.com', 'bbc.com/weather');


// pop - removes the last element of an array 
websites.pop();
console.log(websites);


// shift - removes the first element of an array
websites.shift();
console.log( websites);


//unshift - adds new element to the begining of a string
websites.unshift('Social media - facebook.com');
console.log(websites);


//slice - returns a specific part of an array 
websites.slice(1, 2);
console.log(websites);


//splice - adds/ removes elements from an array
websites.splice(0, 0, "radius.com")
console.log(websites); 

console.log(websites[2]);

websites.push('apple.com/uk', 'google.com');

console.log(websites);

console.log(websites.length)    
*/
/*
const subSandwich = (topping1, topping2, topping3, topping4, topping5, topping6) => {
    console.log(`Your sandwich order has the following toppings ${topping1 }, ${topping2 }, ${topping3 }, ${topping4 }, ${topping5 }, ${topping6}`)
}
subSandwich("Cheese", "Tomato", "Bacon", "Chicken", "Cucumber", "Onion", );

let values = [1, 2, 3]
values.push(4)
console.log(values)

for (i = 0; i < 6; i++ ){
    console.log(Math.random() * 49 + 1);
}
*/

// for loops 
/* let bands = 
["Bloc Party",
"Editors",
"The National", 
"The Cure"
]; 
bands.push('Radiohead', 'The Futureheads')
for(let i = 0; i < bands.length; i++){
    console.log(bands[i]);
}
*/
/*
let tvShows =
["Game of Thrones",
"Breaking Bad",
"Stranger Things",
"Gardeners World",
];
// add new entries to the array
tvShows.push("BBC News", "The Simpsons");
//loop through the array from index 0
for(let i = 0; i < tvShows.length; i++){
    console.log(tvShows[i]);
}


let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let currentNumber = 15
// print current number, if current number does not = 2 pick a random number from the array until it equals 2 
while (currentNumber != 2) {
    console.log(currentNumber)
    currentNumber= numbers1[Math.floor(Math.random()*16)];
}
console.log(currentNumber);
*/


let films = [
    "Ghostbusters",
    "The Dark Knight",
    "Control",
    "Random film title",
]
for (let i = 0; i < films.length; i++){
    console.log(films[i]);
}
let filmCheck = () => {
    if (films[2] == "Ghostbusters") {
        console.log("Yay Ghostbusters")
    }
    else{
        console.log("boo, its not Ghostbusters")
    }
}
filmCheck()