console.log('[app.js] is working.');


// set variables

let player1 = 'null';
let player2 = 'null';

let score = 'null';
let cardValue = 10;
let card = document.querySelectorAll('card');


// Start Game Button initialize board with all of the cards set upside down.


function startGame(){

    let oneOrTwoPlayer = prompt()

    let player1 = prompt("Enter Player 1 Name:", "Player 1");
    
    let player2 = prompt("Enter Player 2 Name:", "Player 2");
    let text;
    text = "Hello " + player1 + player2 + "Are you ready to play?";
    
    console.log(player1, player2);
}




     
    // DO LATER. use js to populate flex and grid area. Create object with FA icon values and card numbers.  

// flip card
function flipCard() {
    document.querySelectorAll("card-back").classList.toggle("hidden");
    document.querySelectorAll("card-front").classList.toggle("hidden");
}

// check to see if cards match



// if cards match leave right side up and add to score. 




// alert card match




// alert winner

