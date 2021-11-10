console.log('[app.js] is working.');

// set variables
let player1 = 'null';
let player2 = 'null';
let mainScore = 'null';
let player1Score = 'null'
let player2Score = 'null'
let cardValue = 10;
let card = document.querySelectorAll('card');

function getSelectedTextValue() {
    let  = document.getElementById("");
    var selectedText = ddlFruits.options[ddlFruits.selectedIndex].innerHTML;
    var selectedValue = ddlFruits.value;
    alert("Selected Text: " + selectedText + " Value: " + selectedValue);
}

// Start Game Button.
function startGame(){

    // Set player 1 name.
    let player1 = document.getElementById('player-one-input').value;

    // Set player 2 name. 
    let player2 = document.getElementById('player-two-input').value; 

    // Set Show Hide Card Number
   let showHide = document.getElementById('show-hide').value;

    if (player2 = null) {
        document.querySelector('');
    } else {
        document.querySelector('');
    }

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



// if cards match leave right side up and add to score. 




// alert card match




// alert winner

