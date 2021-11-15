console.log('[app.js] is working.');

// Card Object. 
const cardData = {

    card1: {
        cardId: "card-1",
        title: "Dragon",
        faClass: "fa-dragon",
        clickCount: "0",
    },
    card2: {
        cardId: "card-2",
        title: "Cat",
        faClass: "fa-cat",
        clickCount: "0",
    },
    card3: {
        cardId: "card-3",
        title: "Android",
        faClass: "fa-android",
        clickCount: "0",
    },
    card4: {
        cardId: "card-4",
        title: "Frog",
        faClass: "fa-frog",
        clickCount: "0",
    },
    card5: {
        cardId: "card-5",
        title: "Fish",
        faClass: "fa-fish",
        clickCount: "0",
    },
    card6: {
        cardId: "card-6",
        title: "Bird",
        faClass: "fa-crow",
        clickCount: "0",
    },
    card7: {
        cardId: "card-7",
        title: "Hippo",
        faClass: "fa-hippo",
        clickCount: "0",
    },
    card8: {
        cardId: "card-8",
        title: "Horse",
        faClass: "fa-horse",
        clickCount: "0",
    },
    card9: {
        cardId: "card-9",
        title: "Spider",
        faClass: "fa-spider",
        clickCount: "0",
    },
    card10: {
        cardId: "card-10",
        title: "Apple",
        faClass: "fa-apple-alt",
        clickCount: "0",
    },
    card11: {
        cardId: "card-11",
        title: "Tractor",
        faClass: "fa-tractor",
        clickCount: "0",
    },
    card12: {
        cardId: "card-12",
        title: "Tree",
        faClass: "fa-tree",
        clickCount: "0",
    },
    card13: {
        cardId: "card-13",
        title: "Music",
        faClass: "fa-itunes-note",
        clickCount: "0",
    },
    card14: {
        cardId: "card-14",
        title: "Monkey",
        faClass: "fa-mailchimp",
        clickCount: "0",
    },
    card15: {
        cardId: "card-15",
        title: "Penguin",
        faClass: "fa-linux",
        clickCount: "0",
    },
    card16: {
        cardId: "card-16",
        Title: "Alien",
        faClass: "fa-reddit-alien",
        clickCount: "0",
    },
    card17: {
        cardId: "card-17",
        title: "Horse",
        faClass: "fa-horse",
        clickCount: "0",
    },
    card18: {
        cardId: "card-18",
        title: "Cat",
        faClass: "fa-cat",
        clickCount: "0",
    },
    card19: {
        cardId: "card-19",
        title: "Apple",
        faClass: "fa-apple-alt",
        clickCount: "0",
    },
    card20: {
        cardId: "card-20",
        title: "Tractor",
        faClass: "fa-tractor",
        clickCount: "0",
    },
    card21: {
        cardId: "card-21",
        title: "Spider",
        faClass: "fa-spider",
        clickCount: "0",
    },
    card22: {
        cardId: "card-22",
        title: "Dog",
        faClass: "fa-dog",
        clickCount: "0",
    },
    card23: {
        cardId: "card-23",
        title: "Alien",
        faClass: "fa-reddit-alien",
        clickCount: "0",
    },
    card24: {
        cardId: "card-24",
        title: "Hippo",
        faClass: "fa-hippo",
        clickCount: "0",
    },
    card25: {
        cardId: "card-25",
        title: "Frog",
        faClass: "fa-dragon",
        clickCount: "0",
    },
    card26: {
        cardId: "card-26",
        title: "Tree",
        faClass: "fa-tree",
        clickCount: "0",
    },
    card27: {
        cardId: "card-27",
        title: "Penguin",
        faClass: "fa-linux",
        clickCount: "0",
    },
    card28: {
        cardId: "card-28",
        title: "Dragon",
        faClass: "fa-dragon",
        clickCount: "0",
    },
    card29: {
        cardId: "card-29",
        title: "Monkey",
        faClass: "fa-mailchimp",
        clickCount: "0",
    },
    card30: {
        cardId: "card-30",
        title: "Fish",
        faClass: "fa-fish",
        clickCount: "0",
    },
    card31: {
        cardId: "card-31",
        title: "Apple",
        faClass: "fa-apple-alt",
        clickCount: "0",
    },
    card32: {
        cardId: "card-32",
        title: "Music",
        faClass: "fa-itunes-note",
        clickCount: "0",
    },

};

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


// display players turn 

function displayPlayerTurn() {
    let display = document.querySelector("players-turn");
    if (playerTurn % 2 == 0) {
        console.log(playerTurn);
        display.innerHTML = (playerTwoInput + "'s turn");
    }
    else {
        display.innerHTML = (playerOneInput + "'s turn");
    }

    playerTurn++;
}

// function displayOutput() {
//     if (playerTurn % 2 == 1)

//     else

// }

// compare cards = define a match between the divs.

// function compareCards() {

//     // run show hide function. 

//     showHideCard(){
//         const onClick = (event) => {
//             console.log(event.srcElement.id);
//         }
//     }
// }



// card i just clicked

// last card I clicked

// compare values match?

// add points to player. 

// alert card match

// alert winner


// DO LATER. use js to populate flex and grid area. Create object with FA icon values and card numbers. Randomize the board.  
