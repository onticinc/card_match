console.log('[app.js] is working.');

// set variables
let mainScore = 'null';
let cardValue = 10;
let clickedCard = '';
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



    // If null print player 1 and player 2. 
    if (playerOneInput === '') {
        playerOneName.innerText = ("Player 1: " + playerOneScore);
    }

    if (playerTwoInput === '') {
        playerTwoName.innerText = ("Player 2: " + playerTwoScore);
    }



    // show header.
    gameHeader.classList.toggle("hidden");
    cardContainer.classList.toggle("hidden");

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
            // console.log('click', "click on card");
            let firstChild = card.children[0];
            let secondChild = card.children[1];
            firstChild.classList.toggle('hidden');
            secondChild.classList.toggle('hidden');
        });
    }
}



// //Tic Tac Toe
// //Global Variables
// //Get input from user about which sign should be for playerOne.
// //Set signs for both players.
// //When user click on button it triggers play function()
// //Play function detects who is playing this turn.
// //Display Sign on that button accordingly.
// var playerOneChoice;
// var playerTwoChoice;
// var playerTurn=1;
// var matrix = [[], [], []];
// var buttons = [[], [], []];
// var row1;
// var X = "X";
// var O = "O";
// var x;
// var y;
// var i;

// //Input the matrix
// for (i = 0; i <= 8; i++) {
// 	switch (i) {
// 	case 0: x=0; y=0; break;
// 	case 1: x=0; y=1; break;
// 	case 2: x=0; y=2; break;
// 	case 3: x=1; y=0; break;
// 	case 4: x=1; y=1; break;
// 	case 5: x=1; y=2; break;
// 	case 6: x=2; y=0; break;
// 	case 7: x=2; y=1; break;
// 	case 8: x=2; y=2; break;
// 	}

// 	matrix[x][y] = document.querySelector(".cell"+i);
// 	buttons[x][y] = document.querySelector("#b"+i);
// 	//matrix[x][y].innerHTML = i + " " + x + " " + y;
// }

// function play() {
// displayOutput();
// incPlayerTurn();
// }

// function displayTurn() {
//     var display = document.querySelector("#playerTurn");
//     if (playerTurn%2==0)
//         display.innerHTML ="Its player two turn";
// 	else
// 		display.innerHTML ="Its player one turn";
// }    
// function incPlayerTurn(){
//     playerTurn++;
// }

// function displayOutput(){
// 	if (playerTurn%2 == 1)
// 		this.innerHTML = playerOneChoice;
// 	else
// 		this.innerHTML = playerTwoChoice;
// }


// function setO(){
// 	playerOneChoice="O";
// 	playerTwoChoice="X"
// }
// function setX(){
// 	playerOneChoice="X";
// 	playerTwoChoice="O"
// }

// function displayO(){
// var butt = document.getElementsByTagName("button");
// var buttonsCount = buttons.length;
// for (var i = 0; i <= buttonsCount; i += 1) {
//  butt[i].onclick = function(e) {
//  this.innerHTML ="O";
//     };
// }
// }

// function displayX(){
// var butt = document.getElementsByTagName("button");
// var buttonsCount = buttons.length;
// for (var i = 0; i <= buttonsCount; i += 1) {
//     butt[i].onclick = function(e) {
//  this.innerHTML ="X";
//     };
// }
// }

// playerchoice.addEventListener("change", function(event) {
//     if (event.target.value === "O")
//         players.reverse();

//     this.disabled = true;
//     playarea.style.display = "block";

//     displayTurn();
// }, false);



// function compareCards(){
    
    
//     let currentPlayer =
//     let cardOneId = 'j';
//     let cartTwoId = 'j';
//     showHideCard();
// }



// card i just clicked

// last card I clicked

// compare values match?

// add points to player. 




// DO LATER. use js to populate flex and grid area. Create object with FA icon values and card numbers. Randomize the board.  





// alert card match




// alert winner

