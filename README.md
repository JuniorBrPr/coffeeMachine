# Coffee Machine
This is a JavaScript app that simulates a coffee machine using the sync-input library. The app allows the user to buy 
coffee, refill the machine's inventory, take the cash from the machine, and check the current inventory status.

## Running the app
To run the app, require the sync-input library and then run the app code. The app will prompt the user to enter an
action (buy, fill, take, remaining, exit). The user can enter one of these options to perform the corresponding action:
* `buy`: prompts the user to enter the number of the coffee they want to buy (1 for espresso, 2 for latte,
  3 for cappuccino). The app checks if the machine has enough resources to make the coffee, and if so, it makes the coffee
  and updates the inventory accordingly.
* `fill`: prompts the user to enter the amount of resources they want to add to the machine's inventory (water in
  milliliters, milk in milliliters, coffee beans in grams, disposable cups, muffins). The app updates the inventory with
  the added resources.
* `take`: removes the cash from the machine and displays the amount taken to the user.
* `remaining`: displays the current inventory status to the user.
* `exit`: exits the app.

## Properties
* `waterMl`: an integer that stores the current amount of water in milliliters in the machine. It is initialized to 400.
* `milkMl`: an integer that stores the current amount of milk in milliliters in the machine. It is initialized to 540.
* `beansGr`: an integer that stores the current amount of coffee beans in grams in the machine. It is initialized to 120.
* `disposableCups`: an integer that stores the current number of disposable cups in the machine. It is initialized to 9.
* `muffins`: an integer that stores the current number of muffins in the machine. It is initialized to 10.
* `cash`: an integer that stores the current amount of cash in the machine. It is initialized to 550.
* `COFFEES`: an array of objects that stores information about the different types of coffee that the machine can make. 
Each object contains the following properties:

  * `name`: a string that stores the name of the coffee.
  * `water`: an integer that stores the amount of water in milliliters required to make the coffee.
  * `milk`: an integer that stores the amount of milk in milliliters required to make the coffee.
  * `beans`: an integer that stores the amount of coffee beans in grams required to make the coffee.
  * `cost`: an integer that stores the cost of the coffee.
  * `exit`: a boolean that determines if the app should exit. It is initialized to false.


