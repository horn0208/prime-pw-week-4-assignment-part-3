console.log('***** Cart Functions *****');

//create global variable basket set to empty array
const basket = [];
const maxItems = 5;

// Create a function called `addItem`. It should:
// - take an input parameter for a string `item`
// - add the new item to the global array `basket`. 
// - return `true` indicating the item was added
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
function addItem(item) {
    // console.log('in addItem. Basket before add:', basket);
    if (isFull()) {
        return false;
    } else {
        basket.push(item);
        // console.log(`added ${item}. Basket now:`, basket);
        if (basket[basket.length-1] === item) {
            return true;
        }
    }
}
// addItem('socks');
// addItem('peaches');
// addItem('oat milk');
// console.log('addItem("goat milk") should return true:', addItem('goat milk'));
// console.log('addItem("goat milk") again. should return true:', addItem('goat milk'));
// console.log('addItem("goat milk") brings basket to a forbidden ammount of goat milk. Expect false:', addItem('goat milk'));

// - Create a function called `listItems`. It should:
// - loop over the items in the `basket` array
// - console.log each individual item on a new line
function listItems() {
    for (let i of basket) {
        console.log(i);
    }
}
// console.log('listItems():', listItems());

// - Create a function called `empty`. It should:
// - reset the `basket` to an empty array
function empty(){
    basket.length = 0;
    //console.log('empty(). expect basket to be empty array', basket);
}

//  Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}
// console.log('isFull(). Basket contains 4 items, should return false:', isFull());
// //also tested w/ 5 items and 6 items in basket, passed
// empty();
// console.log('isFull(). Basket is empty, should return false:', isFull());

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf]to find the index of the first matching item in the basket.
//   - Use [Array.splice]to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found
function removeItem(item) {
    let removeIndex = basket.indexOf(item);
    if (removeIndex !== -1) {
        //console.log(`In removeItem(). Index of item to be removed: ${removeIndex}`)
        let removedItem = basket.splice(removeIndex, 1);
        return removedItem;
    } else {
        return null;
    }
}
// listItems();
// console.log('removeItem("Socks") should return socks', removeItem('socks'));
// console.log('removeItem("ChristpherWalken") should return null', removeItem('Christopher Walken'));
// listItems();