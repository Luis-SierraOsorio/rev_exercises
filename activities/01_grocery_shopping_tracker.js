// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // Read from standard input (keyboard)
    output: process.stdout // Write to standard output (console)
});

rl.on('line', (line) => {
    console.log(line);
});

rl.once('close', () => {
    // end of input
    console.log("Goodbye");
});

// rl.question('Enter name:', (name) => {
//     console.log(typeof name);
// });

// object to hold the grocery list with all the items
const grocery_list = [{
    name: "milk",
    quantity: 1,
    price: 1.29,
    bought: false
}];

function mainMenu() {
    console.log("\nMenu Options: ");
    console.log("1. Display all items in grocery list")
    console.log("2. Add an item")
    console.log("3. Remove an item")
    console.log("4. Mark an item as bought")
    console.log("5. Exit")

    rl.question("Choice Selection: ", (ans) => {
        switch (Number(ans)) {
            case 1:
                displayList();
                break;
            case 2:
                addItem();
                break;
            case 3:
                removeItem();
                break;
            case 4:
                changeBought();
                break;
            case 5:
                rl.close();
                break;
            default:
                break;
        }
    })
}

function displayList() {
    console.log("");
    grocery_list.forEach((ele, index) => console.log(`Item: ${index + 1} \nName: ${ele.name} \nQuantity: ${ele.quantity} \nPrice: ${ele.price} \nBought: ${ele.bought}`));
    mainMenu();
}

function addItem() {
    rl.question("\nName: ", (name) => {
        rl.question("Quantity: ", (quantity) => {
            rl.question("Price: $", (price) => {
                let item = {
                    name: name,
                    quantity: Number(quantity),
                    price: Number(price),
                    bought: false
                }

                grocery_list.push(item);
                mainMenu();
            });
        });
    });
}


function removeItem() {
    // displayList();
    console.log("");
    grocery_list.forEach((ele, index) => console.log(`Item: ${index + 1} \nName: ${ele.name} \nQuantity: ${ele.quantity} \nPrice: ${ele.price} \nBought: ${ele.bought}`));
    console.log("\nSelect the item number you wish to delete");
    rl.question("Item Number: ", (ans) => {
        grocery_list.splice(ans - 1, 1);
        mainMenu();
    })

}

function changeBought() {
    console.log("");
    grocery_list.forEach((ele, index) => console.log(`Item: ${index + 1} \nName: ${ele.name} \nQuantity: ${ele.quantity} \nPrice: ${ele.price} \nBought: ${ele.bought}`));
    console.log("\nSelect the item whose bought status you wish to change");
    rl.question("Item Number: ", (ans) => {
        grocery_list[Number(ans) - 1].bought = !grocery_list[Number(ans) - 1].bought;
        mainMenu();
    })
}




// calling main menu option to run the program
mainMenu();