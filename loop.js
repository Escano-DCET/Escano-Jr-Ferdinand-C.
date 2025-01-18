//loops

for (let i = 0; i < 5; i++){
    console.log(i)
}

for (let i = 5; i > 0; i--){
    console.log(i)
}

for (let i = 5; i > 0; i--){
    if(i>3){
    console.log(i)
}
    else{
        console.log("i is less than 3");
    }
    i > 3 ? console.log(i) : console.log("i is less than 3");
}

//while loop
let i = 0;
while (i<5) {
    console.log(i);
    i++;
}

//do while loop
let j = 0;
do {
    console.log(j);
    j++;
}
while (j<5);

// for...in loop 
const fruits = ['apple', 'banana', 'orange', 'grape', 'grape',  'apple']
for(let fruit in fruits) {
    console.log(fruits[fruit]);
}

// for...of loop
for(let fruit of fruits) {
    console.log(fruit);
}

// forEach loop
fruits.forEach(fruit => console.log(fruit));


// map
const fruitLength = fruits.map(fruit => fruit.length);
console.log(fruitLength);

const users = [
    {name: 'John', age: 34},
    {name: 'Amy', age: 20},
    {name: 'Cam', age: 24}
]

const userNames = users.map(user => user.name);
console.log(userNames);