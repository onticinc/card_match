console.log('[app.js] is working.');

// set variables
let mainScore = 'null';
let cardValue = 10;
const inputForm = document.getElementById('input-form');
const gameHeader = document.getElementById('game-header');
const cardContainer = document.getElementById('card-table');
const cardList = document.querySelectorAll('.card');
const cardFront = document.querySelectorAll('.card-front');
const cardNumberList = document.querySelectorAll('.card-number');
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

    // Define Player names and initial score. 
    playerOneName.innerText = (playerOneInput + ": " + playerOneScore);
    playerTwoName.innerText = (playerTwoInput + ": " + playerTwoScore);

    // // If null print player 1 and player 2. 
    // if (playerOneName === null) {
    //     playerOneName.innerText = ("Player 1:" + playerOneScore);
    //     console.log(playerOneName);
    // }

    // if (playerTwoName === null) {
    //     playerTwoName.innterText = ("Player 2:" + playerTwoScore);
    // }

// check for value in name input. 
//     if (inputtx.value.length == 0)
//     { 
//        alert("message");  	
//        return false; 
//     }  	
//     return true; 
//   } 

    // show header.
    gameHeader.classList.toggle("hidden");
    cardContainer.classList.toggle("hidden");
    console.log(playerOneName, playerTwoName, showHideSelector);

    // hide card numbers. 
    if (showHideSelector === '2') {
        for (let idx = 0; idx < cardNumberList.length; idx++) {
            let cardNumber = cardNumberList[idx];
            cardNumber.classList.toggle('hidden');
        };
    }

    // Hide form. 
    inputForm.classList.toggle('hidden');
};
// End Start Function

// Start Card Flip
function showHideCard() {
    for (let idx = 0; idx < cardList.length; idx++) {
        let card = cardList[idx];
        card.addEventListener('click', function () {
            console.log('click', "click on card");
            let firstChild = card.children[0];
            let secondChild = card.children[1];
            firstChild.classList.toggle('hidden');
            secondChild.classList.toggle('hidden');
        });
    }
}

showHideCard();

function compareCards(){

}



// card i just clicked
function getId(){
    
}

// last card I clicked

// compare values match?

// add points to player. 

// // hide cards. 
// if (showHideSelector === '2') {
//     
// };

// Figure out how to flip and turn one 


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

