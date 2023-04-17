// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity javascript.
// 
// YOU WILL NEED TO RUN EACH FUNCTION AT A TIME SO CONSIDER COMMENTING OUT FUNCTIONS THAT YOU ARE NOT WORKING ON
// FOR EXMAPLE TO RUN THE ADD FUNCTION, YOU WILL NEED TO COMMENT ALL THE OTHER THREE TO AVOID ERRORS IN THE CONSOLE
// ALSO CONSIDER COMMENTING OUT THE CONSOLE.LOGS IN THE FUNCTIONS TO AVOID ERRORS IN THE CONSOLE

let inventory = ["apples", "bananas", "oranges"];
let stockQuantities = [10, 15, 8];

// function to add a new item to the inventory
function addItem(name, quantity) {
  // check if the inventory and stockQuantities arrays are already at maximum capacity
  if (inventory.length >= 10 || stockQuantities.length >= 10) {
    console.log("Maximum capacity reached.");
    return;
  }

  // add the new item to the inventory array and its corresponding stock quantity to the stockQuantities array
  inventory.push(name);
  stockQuantities.push(quantity);
}

// function to update the stock quantity of an existing item
function updateStock(name, newQuantity) {
  // find the index of the item in the inventory array
  const index = inventory.indexOf(name);

  // check if the item exists in the inventory
  if (index === -1) {
    console.log("Item not found.");
    return;
  }

  // update the corresponding stock quantity in the stockQuantities array
  stockQuantities[index] = newQuantity;
}

// function to calculate the total number of items in the inventory
function getTotalItems() {
  // return the length of the inventory array
  return inventory.length;
}

// function to find the item with the lowest stock quantity
function findLowestStockItem() {
  // initialize variables to store the lowest stock quantity and its corresponding item
  let lowestQuantity = stockQuantities[0];
  let lowestItem = inventory[0];

  // loop through the stockQuantities array to find the lowest quantity and its corresponding item
  for (let i = 1; i < stockQuantities.length; i++) {
    if (stockQuantities[i] < lowestQuantity) {
      lowestQuantity = stockQuantities[i];
      lowestItem = inventory[i];
    }
  }

  // return the item with the lowest stock quantity
  return lowestItem;
}

// add a new item to the inventory
addItem("grapes", 12);
console.log(inventory);
console.log(stockQuantities);

// update the stock quantity of an existing item
updateStock("bananas", 20);
console.log(inventory)
console.log(stockQuantities);

// // get the total number of items in the inventory
const totalItems = getTotalItems();
console.log("Total items in inventory: " + totalItems);

// // find the item with the lowest stock quantity
const lowestStockItem = findLowestStockItem();
console.log("Item with the lowest stock quantity: " + lowestStockItem);