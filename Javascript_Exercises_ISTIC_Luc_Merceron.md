# JavaScript Exercises

Created by [Luc Merceron](https://github.com/lucmerceron/)

## Information

### Setup

- You should have **NodeJS** > 6 installed on your machine
- Create a file named **index.js** in a folder named **NAME_LASTNAME_CLASS** then run `npm init` (ENTER to all defaults)
- Add a **"start"** script in your _package.json_ that just run `node index.js` so you can run your application by simply typing `npm start`

### At the end

- Compress your folder and send it to **luc.merceron.dev@gmail.com** with the object: **JS_Exercices_NAME_LASTNAME_CLASS**

## Let's play a game

We will create a small game to explore concepts seen in the JavaScript Class.

### Lexical Scope

1. Create and fill 4 variables: `name` (string), `attack` (number, [10-30]), `defense` (number, [1-10]), `hp` (number, 100).
2. Create a function named `displayMyPlayerInfo` that, when called, logs your player info to the screen like: "My name is W, I have X attack, Y defense and Z health points." from its lexical scope.

### Scope Closure

3. Create a new function named `playerGenerator` that takes as parameters the variables created above - except for the number of hp that should remain the same across players - move `displayMyPlayerInfo` in its inner scope. `playerGenerator` should return an object containing every variables plus the `displayMyPlayerInfo` function (as a classic API could do).
4. Generate and store in two variables two players objects (`player1` and `player2`) thanks to the generator.
5. Call `displayMyPlayerInfo` from these two newly created variables to display the information of both players.
6. Create a new function named `getMyPlayerRatio` that takes as parameters a player and a number and returns the attack of this player minus this number.

### Module Management

7. Now separate your program into three files, one named `playerGenerator.js`, one named `playerUtils.js` and keep the main file named `index.js`. Put the generator logic into the _playerGenerator_, put `getMyPlayerRatio` into the _playerUtils_ and keep the rest in `index.js`. Import, instantiate & call everything in _index.js_ with CommonJS require / export.
8. We should have a way to make our players fight; create a new function named `fight` in `playerUtils.js` that takes as parameters two players and logs the winner's name (ex: `fight(player1, player2) // "John"`) while decreasing players' hp with those rules:

- Store in two variables the result of `getMyPlayerRatio` for each player with the defense of the opponent
- The winner is the one with the biggest subtract (tweak the variables if they are equals)
- Decrease the looser HP to 0 and the winner HP to: ( enemy subtract \* ( winner HP / winner subtract ) )
- Log the winner's name

9. Replace the logging of the winner's name by simply calling its `displayMyPlayerInfo` function.

Notice that the HP has not been decreased. This is because `displayMyPlayerInfo` is using the HP variable from its lexical scope and not the generator's returned object.

### This Binding

10. Change the `playerGenerator` function to return the fight function in addition to the rest.
11. Modify the `fight` function, so we can call it this way: `player1.fight(player2)`.
12. Notice that `displayMyPlayerInfo` still doesn't log the winner's remaining HP, change the function to make it work with Default Binding.

### Object Prototypes & Delegation

13. Leverage the power of **Prototypes**, create a new file named `Player.js` exporting a `Player` function that takes the same parameters as `playerGenerator` but sets its values with its arguments in a constructor.
14. Add to its prototype functions `fight` and `displayMyPlayerInfo`.
15. Change the `player1` and `player2` instantiation in `index.js` to initiate with two instances of `Player`.
16. Create a new constructor function named `PayToWinPlayer` that has its prototype **[[Prototype]]**-linked to **Player.prototype** and can be called like `Player` do.
17. A new `PayToWinPlayer` should automatically increase its attack by 40 % (because he richer than us).
18. Try your newly all-powerful type of player with some fights but be sure to change your `PayToWinPlayer` _constructor_ so it reflects correctly what he really is.

### ES6 classes

19. Comment your _Prototypes_ system (so I can see it) and create the same system with ES6 Classes

### Asynchronous

Because fighting often has a "luck factor", we want to reflect that in our application.

#### Setup

To do so, run `npm install --save request` if you want to work with Callbacks, or `npm install --save request-promise` if you think Promises are more appropriate to the situation. Then require the package where you want to use it.

20. We want to use [random.org](https://www.random.org/) API to retrieve asynchronously 10 numbers between. The first request should retrieve a number between 1 and 100, the second between 1 and "the last retrieved number multiplied by 1.2", etc. until we have 10 numbers (ex: first retrieve[1-100] => 50, second retrieve[1-60] => ...). Those numbers should be stored in an Array for each player before fighting and treated as such **once retrieved** (and in this order):

- Filter numbers inferior to 10
- Multiply by 2 numbers when its ones ("unité" in french) is equal to its index
- Sum each values divided by 100

22. Then multiply `getMyPlayerRatio`'s call with the result in the `fight` function.

23. [Optional] Wrap the function retrieving random numbers with a Higher Order Function that transforms the async results (as described in 20.) so we can just sum them.
