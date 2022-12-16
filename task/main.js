const input = require('sync-input')

let waterMl = 400;
let milkMl = 540;
let beansGr = 120;
let disposableCups = 9;
let muffins = 10;
let cash = 550;

const COFFEES = [{
    name: 'espresso',
    water: 250,
    milk: 0,
    beans: 16,
    cost: 4
}, {
    name: 'latte',
    water: 350,
    milk: 75,
    beans: 20,
    cost: 7
}, {
    name: 'cappuccino',
    water: 200,
    milk: 100,
    beans: 12,
    cost: 6
}];

let exit = false;

do {

    const option = input("Write action (buy, fill, take, remaining, exit):\n");

    switch (option) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            console.log();
            displayInventory();
            break;
        case "exit":
            exit = true;
            break;
        default :
            console.log("Invalid option\n");
            break;
    }

} while (!exit);


function take() {
    console.log(`
    I gave you $${cash}
    `);
    cash = 0;
}

function fill() {
    let userInput = "";
    do {
        userInput = input("Write how many ml of water you want to add:\n");
        waterMl += parseInt(userInput);
        userInput = input("Write how many ml of milk you want to add:\n");
        milkMl += parseInt(userInput);
        userInput = input("Write how many grams of coffee beans you want to add:\n");
        beansGr += parseInt(userInput);
        userInput = input("Write how many disposable cups you want to add:\n");
        disposableCups += parseInt(userInput);
        userInput = input("Write how many muffins you want to add:\n");
        muffins += parseInt(userInput);

        console.log();
        userInput = "back";
    } while (userInput !== "back");
}


function buy() {
    let validOption = false;

    do {
        const option = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:, 4 - muffins: \n");

        switch (option) {
            case "1":
                sell(0);
                validOption = true;
                break;
            case "2":
                sell(1);
                validOption = true;
                break;
            case "3":
                sell(2);
                validOption = true;
                break;
            case "4":
                sell(3);
                break;
            case "back":
                validOption = true;
                break;
            default :
                console.log("Invalid option\n");
                break;
        }
    } while (!validOption);
}

function sell(coffee) {
    if(coffee !== 3){
        if (waterMl < COFFEES[coffee].water) {
            console.log("Sorry, not enough water!");
        } else if (milkMl < COFFEES[coffee].milk) {
            console.log("Sorry, not enough milk!");
        } else if (beansGr < COFFEES[coffee].beans) {
            console.log("Sorry, not enough coffee beans!");
        } else if (disposableCups < 1) {
            console.log("Sorry, not enough disposable cups!");
        } else {
            console.log("I have enough resources, making you a coffee!\n")

            waterMl -= COFFEES[coffee].water;
            milkMl -= COFFEES[coffee].milk;
            beansGr -= COFFEES[coffee].beans;
            --disposableCups;
            cash += COFFEES[coffee].cost;
        }
    } else {
        if (muffins > 0){
            console.log("Enjoy your muffin!\n")
        } else {
            console.log("Sorry, there are none left!");
        }
    }
}

function displayInventory() {
    console.log(`The coffee machine has:
${waterMl} ml of water
${milkMl} ml of milk
${beansGr} g of coffee beans
${disposableCups} disposable cups
$${cash} of money
`);
}
