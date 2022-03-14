console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//create global variable basket set to empty array
const basket = [];

// Create a function called `addItem`. It should:
// - take an input parameter for a string `item`
// - add the new item to the global array `basket`. 
// - return `true` indicating the item was added
function addItem(item) {
    console.log('in addItem. Basket before add:', basket);
    basket.push(item);
    console.log(`added ${item}. Basket now:`, basket);
    if (basket[basket.length-1] === item) {
        console.log(true);
        return true;
    }
}
addItem('socks');
addItem('peaches');
addItem('oat milk');
addItem('goat milk');


// - Create a function called `listItems`. It should:
// - loop over the items in the `basket` array
// - console.log each individual item on a new line
function listItems() {
    for (let i of basket) {
        console.log(i);
    }
}
console.log('running listItems:', listItems());

// - Create a function called `empty`. It should:
// - reset the `basket` to an empty array
function empty(){
    basket.length = 0;
    console.log('in empty. basket should be empty:', basket);
}
empty();