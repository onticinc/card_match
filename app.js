console.log('[app.js] is working.');

// set variables
let player1 = 'null';
let player2 = 'null';
let mainScore = 'null';
let player1Score = 'null';
let player2Score = 'null';
let cardValue = 10;
const gameHeader = document.getElementById('game-header');
const card = document.querySelectorAll('card');
const playerOneName = document.getElementById('player-one-name');
const playerTwoName = document.getElementById('player-two-name');
const playerOneScore = document.getElementById("player-one-score");
const playerTwoScore = document.getElementById("player-two-score");
const buttons = document.getElementById('game-buttons');

// Start Game Button.
function startGame() {
    // Set player 1 name.
    let playerOneInput = document.getElementById('player-one-input').value;
    // Set player 2 name. 
    let playerTwoInput = document.getElementById('player-two-input').value;
    // Set show hide on front of the card. 
    let showHideSelector = document.getElementById('show-hide-selector').value;

    playerOneName.innerText = playerOneInput;
    playerTwoName.innerText = playerTwoInput;

    gameHeader.classList.toggle("hidden");
    console.log(playerOneName, playerTwoName);

   

}

function showHide() {
    buttons.classList.toggle("hidden");
    onePlayerScore.classList.toggle("hidden");
    console.log(buttons);
}

console.log(playerOneName, playerTwoName);

    // If player two is empty and show card number is selected, Toggle: show-front of card, one player score, game buttons, and cards. 


    //}

    // if {
    // // 
    // } else if (player2 = null && (showHide = 2)) {
    //     document.querySelector("").classList.toggle("hidden");
    //     document.querySelector("game-buttons").classList.toggle("hidden");

    // } else {
    // // If player two is not null, show game buttons, two player score, 
    // }

// DO LATER. use js to populate flex and grid area. Create object with FA icon values and card numbers. Randomize the board.  

// flip card
// function flipCard() {
//     document.querySelectorAll("card-back").classList.toggle("hidden");
//     document.querySelectorAll("card-front").classList.toggle("hidden");
// }

// check to see if cards match

// if cards match leave right side up  and add to score. 




// alert card match




// alert winner

