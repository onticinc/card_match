console.log('[app.js] is working.');

// set variables
let player1 = 'null';
let player2 = 'null';
let mainScore = 'null';
let player1Score = 'null'
let player2Score = 'null'
let cardValue = 10;
let card = document.querySelectorAll('card');
let buttons = document.querySelector('game-buttons');

// Start Game Button.
function startGame() {

    // Set player 1 name.
    let player1 = document.getElementById('player-one-input').value;
    // Set player 2 name. 
    let player2 = document.getElementById('player-two-input').value;
    // Set show hide on front of the card. 
    let showHide = document.getElementById('show-hide').value;


    // if (player2 = null && (showHide = 1 )) {
    //     document.querySelector("one-player-score").classList.toggle("hidden");
    //     document.querySelector("game-buttons").classList.toggle("hidden");
    // } else {
    //     document.querySelector("two-player-score").classList.toggle("hidden");
    //     document.querySelector("game-buttons").classList.toggle("hidden");
    // }

    // let gameText;
    //gameText = "Hello " + player1 + player2 + "Are you ready to play?";

    console.log(player1, player2, showHide);
}
// DO LATER. use js to populate flex and grid area. Create object with FA icon values and card numbers. Randomize the board.  

// flip card
function flipCard() {
    document.querySelectorAll("card-back").classList.toggle("hidden");
    document.querySelectorAll("card-front").classList.toggle("hidden");
}

// check to see if cards match



// if cards match leave right side up  and add to score. 




// alert card match




// alert winner

