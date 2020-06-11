//Hoisting and Functions: My name
setName();
function setName(){
name = 'Stacey';
var name = 'Stacey';
console.log(name);
}

//Create a new function declaration that will accept two parameters.
    console.log('some text');
    let avg = findAvg(2, 2);
    console.log('some text', avg);
    function findAvg(a, b) {
        console.log('some text');
        var answer = ( a + b) / 2;
        return answer;
    }

//Scoping practice: declaring variable fruits with a function array with fruits
let fruits = ['peaches', 'cherries', 'blackberries'];
let favFruit;
//function declaration print first fruit and declaration for fav fruit
function printFruits() {
    favFruit = fruits[2];
    console.log(fruits[0]);
    printFavFruit();
//variable of least fav fruit to be console.logged    
    let leastFav = ('greenApple');
    console.log(leastFav);
}

function printFavFruit() {
    console.log(favFruit)
}

printFruits();
//outside the local scope say 'Hello' to be hoisted
greetingsFunc();
function greetingsFunc() {
    console.log('Hello', name ); 
}

let groundControl = ('Major Tom!');
alert(groundControl);