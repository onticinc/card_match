console.log('[app.js] is working.');

// set variables
let mainScore = 'null';
let cardValue = 10;
let clickedCard = '';



const inputForm = document.getElementById('input-form');
const gameHeader = document.getElementById('game-header');

// Cards
const cardContainer = document.getElementById('card-table');
const cardList = document.querySelectorAll('.card');
const cardFront = document.querySelectorAll('.card-front');
const cardNumberList = document.querySelectorAll('.card-number');


// Player Info
const playerOneName = document.getElementById('player-one-name');
const playerOneScore = document.getElementById("player-one-score");
const playerTwoName = document.getElementById('player-two-name');
const playerTwoScore = document.getElementById("player-two-score");
const playerTurn = '0';
const playerChoice = '';


const buttons = document.getElementById('game-buttons');
const quickLookButton = document.getElementById('quick-look-button');

const cardData = {

    card1: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card2: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card3: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card4: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card5: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card6: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card7: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card8: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card9: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card10: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card11: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card12: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card13: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card14: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card15: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card16: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card17: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card18: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card19: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card20: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card21: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card22: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card23: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card24: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card25: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card26: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card27: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card28: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card29: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card30: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card31: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card25: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card25: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },
    card25: {
        cardId: "card-1",
        faClass: "fa-dragon",
    },


};

console.log(menu); // look for line 26





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
            //console.log('click', "click on card");
            let firstChild = card.children[0];
            let secondChild = card.children[1];
            firstChild.classList.toggle('hidden');
            secondChild.classList.toggle('hidden');
        });
    }
}

showHideCard();



// Quick Look Button - show front of cards for short period of time. limit to two times. 
function quickLook() {

    for (let idx = 0; idx < cardList.length; idx++) {
        let card = cardList[idx];

        let firstChild = card.children[0];
        let secondChild = card.children[1];

        firstChild.classList.toggle('hidden');
        secondChild.classList.toggle('hidden');
    }

    setTimeout(function () {

        for (let idx = 0; idx < cardList.length; idx++) {
            let card = cardList[idx];

            let firstChild = card.children[0];
            let secondChild = card.children[1];

            firstChild.classList.toggle('hidden');
            secondChild.classList.toggle('hidden');
        }

    }, 3000)

};



// // display players turn 
// function displayPlayerTurn() {
//                 let display = document.querySelector("players-turn");
//                 if (playerTurn % 2 == 0) {
//                     console.log(playerTurn);
//                     display.innerHTML = (playerTwoInput + "'s turn");
//                 }
//                 else {
//                     display.innerHTML = (playerOneInput + "'s turn");
//                 }
//             }
// function incPlayerTurn() {
//                 playerTurn++;
//             }


// function displayOutput() {
//                 if (playerTurn % 2 == 1)
//                     this.innerHTML = playerOneChoice;
//                 else
//                     this.innerHTML = playerTwoChoice;
//             }


// compare cards = define a match between the divs.

// function compareCards() {

//     // run show hide function. 

//     showHideCard(){
//         const onClick = (event) => {
//             console.log(event.srcElement.id);
//         }
//         window.addEventListener('click', onClick);
//     }
// }



// // get card type.
// let cardOne =
//     // get card two. 
//     let cardTwo = 

// }




// card i just clicked

// last card I clicked

// compare values match?

// add points to player. 

// alert card match

// alert winner


// DO LATER. use js to populate flex and grid area. Create object with FA icon values and card numbers. Randomize the board.  
