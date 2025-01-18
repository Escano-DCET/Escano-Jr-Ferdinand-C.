const fruits = ['apple', 'banana', 'orange', 'grape', 'cherry'];

console.log(fruits);
console.log(fruits[0])

/*
//array methods
//1. concat

const vegetables = ['carrot', 'beetroot', 'cucumber'];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables); 

//2. copywithin

const copyFruits = fruits.copyWithin(2,0);
console.log(copyFruits); //apple banana orange grape cherry

//3. sntries
const fruitsIterator = fruits.entries();
console.log(fruitsIterator.next().value); //[0, 'apple']

//4. every
const isAllfruits = fruits.every(fruit => typeof fruit === 'string'); //apple false
console.log(isAllfruits); //false


//5. fill
const fillFruits = fruits.fill('cherry', 2, 4);
console.log(fillFruits); //apple banana cherry cherry cherry


//6. filter
const filterFruits = fruits.filter(fruit => fruit === 'apple');
console.log(filterFruits); //apple


//7. find
const findFruits = fruits.find(fruit => fruit === 'apple');
console.log(findFruits); 

//8. findIndex
const findFruitIndex = fruits.findIndex(fruit => fruit === 'apple');
console.log(findFruitIndex); 

//9. forEach
fruits.forEach(fruit => console.log(fruit +"s"))


//10. includes
const hasApples = fruits.includes(fruit => fruit === 'apple');
console.log(hasApples); 

//11. includes
const indexofApple = fruits.indexOf(fruit => fruit === 'apple');
console.log(indexofApple); 

//12. join
const fruitsString = fruits.join(fruit => fruit === 'apple');
console.log(fruitsString); 
*/
//13. keys
const fruitsIterator = fruits.keys();
console.log(fruitsIterator.next().value); 

//14. lastIndexOf
const lastIndexOfApple = fruits.lastIndexOf('apple');
console.log(lastIndexOfApple); 




