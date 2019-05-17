// Enemies
var Enemy = function(x,y) {
    // Variables applied to each Enemy instance
    this.x = x;
    this.y = y;
    //object track rate ---I don't think I need this.
    //this.speed = '0';
    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
    //Make more bugs???maybe I don't need either of these
    //since my bug is still moving. 
    //I just need to make them random and moving in 
    //different directions. 
    //allEnemies.push(this);
    //return this;//is this neededd
}; 
//end Enemy()

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    /*  You should multiply any movement by the dt parameter
        which will ensure the game runs at the same speed for
        all computers.*/

        /*The bugs are going to move across the x axis, but, you
        need a loop, since you want the bugs to stop when the x 
        is greater than the width of the canvas---maybe watch video again???

        Then, you want to probably have something else that creates
        more bugs.*/
        //generating random numbers between 1 and 99
        ///something - Math.floor(Math.random() * 100);

        //https://www.geeksforgeeks.org/javascript-math-random-function/
        //https://www.geeksforgeeks.org/javascript-math-random-function/
        //https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

        // var min=4; 
        // var max=5; 
        // var random =Math.floor(Math.random() * (+max - +min)) + +min; 
        // document.write('some string or something else' + random ); 

        //makes one bug move x and y incremented.
        this.x++ * (dt); 
        this.y * (dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*  Now write your own player class
    This class requires an update(), render() and
    a handleInput() method.
*/

// The Player
var Player = function() {
    // Variables applied to the Player instance
    this.x = 10;
    this.y = 100;
    //object track rate---I don't think I need this.
    this.speed = '0';
    // The image/sprite for the Player
    this.sprite = 'images/char-princess-girl.png';
    };
    //update
    Player.prototype.update = function(dt){

    };
    //render
    Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    //handleInput method
    Player.prototype.handleInput = function(dt){

    };
//end Player()

// Now instantiate your objects. 

// Place all enemy objects in an array called allEnemies
var allEnemies = [
new Enemy(-10,100),
new Enemy(20,200),
new Enemy(-5,300),
];
//you only need line 92 if the array begins empty.
//currently you are manually storing the bugs in the array,
//which you already had a while back.
//
//reference - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
// siteTimeout(
//     function(){
//         allEnemies.push(new Enemy())
//     }, 2000);


// Place the player object in a variable called player
//the "Object" constructor creates an object wrapper for a specific value, or where no value is passed, it will create an empty object and return it.
//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});