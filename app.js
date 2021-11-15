console.log('[app.js] is working.');

const PLAYER_ONE = 0;
const PLAYER_TWO = 1;
const CARD_VALUE = 10;


// Card Object. 
const cardData = {

    "card-1": {
        cardId: "card-1",
        title: "Dragon",
        faClass: "fa-dragon",
        index: 1,
    },
    "card-2": {
        cardId: "card-2",
        title: "Cat",
        faClass: "fa-cat",
        index: 2,
    },
    "card-3": {
        cardId: "card-3",
        title: "Dog",
        faClass: "fa-dog",
        index: 3,
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
    "card-22": {
        cardId: "card-22",
        title: "Dog",
        faClass: "fa-dog",
        index: 22,
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
        faClass: "fa-frog",
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

    "card-28": {
        cardId: "card-28",
        title: "Dragon",
        faClass: "fa-dragon",
        index: 28,
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

const gameState = {
    turn: PLAYER_ONE,
    players: {

        [PLAYER_ONE]: {
            score: 0,
            playerName: '',
        },

        [PLAYER_TWO]: {
            score: 0,
            playerName: '',
        },
    },
    selectedCards: [],
    matchedCards: [],
}

// set variables
let mainScore = 'null';


let clickedCard = '';

const inputForm = document.getElementById('input-form');
const gameHeader = document.getElementById('game-header');

// Cards
const cardContainer = document.getElementById('card-table');
const cardList = document.querySelectorAll('.card');
const cardFront = document.querySelectorAll('.card-front');
const cardNumberList = document.querySelectorAll('.card-number');

let canClick = true;


// Player Info
const playerOneName = document.getElementById('player-one-name');
const playerOneScore = document.getElementById("player-one-score");
const playerTurnElement = document.getElementById("players-turn-message");
const playerTwoName = document.getElementById('player-two-name');
const playerTwoScore = document.getElementById("player-two-score");

const buttons = document.getElementById('game-buttons');
const quickLookButton = document.getElementById('quick-look-button');



// Start Game Button.
function startGame() {

    // Set player 1 name.
    gameState.players[PLAYER_ONE].name = document.getElementById('player-one-input').value;
    // Set player 2 name. 
    gameState.players[PLAYER_TWO].name = document.getElementById('player-two-input').value;
    // Set show hide on front of the card. 
    let showHideSelector = document.getElementById('show-hide-selector').value;

    // Define Player names and initial score. 
    playerOneName.innerText = ((gameState.players[PLAYER_ONE].name || "Player 1 ") + ": " + gameState.players[PLAYER_ONE].score);
    playerTwoName.innerText = ((gameState.players[PLAYER_TWO].name || "Player 2 ") + ": " + gameState.players[PLAYER_TWO].score);

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

    updatePlayerTurn();
};
// End Start Function

// Update Score

function updateScore() {
    playerOneName.innerText = ((gameState.players[PLAYER_ONE].name || "Player 1 ") + ": " + gameState.players[PLAYER_ONE].score);
    playerTwoName.innerText = ((gameState.players[PLAYER_TWO].name || "Player 2 ") + ": " + gameState.players[PLAYER_TWO].score);

}

function updatePlayerTurn() {
    if (gameState.turn === PLAYER_ONE) {
        playerTurnElement.innerText = "it's " + (gameState.players[PLAYER_ONE].name || "Player 1") + " turn";
    } else {
        playerTurnElement.innerText = "It's " + (gameState.players[PLAYER_TWO].name || "Player 2") + " turn";
    }
}


// Start Card Flip
function showHideCard() {
    for (let idx = 0; idx < cardList.length; idx++) {
        let card = cardList[idx];

        card.addEventListener('click', function () {
            //console.log('click', "click on card");
            let cardId = card.id;
            const hasCards = gameState.selectedCards.length;
            if (!canClick || (hasCards && gameState.selectedCards[0] === cardId)) {
                return;
            }
            gameState.selectedCards.push(cardId)

            if (gameState.selectedCards.length === 2) {
                const cardOne = cardData[gameState.selectedCards[0]]
                const cardTwo = cardData[gameState.selectedCards[1]]
                if (cardOne.faClass === cardTwo.faClass) {
                    gameState.players[gameState.turn].score += CARD_VALUE;
                    updateScore();
                    gameState.matchedCards = [...gameState.matchedCards, ...gameState.selectedCards]
                } else {
                    canClick = false;
                    setTimeout(function () {
                        canClick = true;
                        console.log(cardList);
                        console.log(cardOne)
                        const domCardOne = cardList[cardOne.index - 1]
                        const domCardTwo = cardList[cardTwo.index - 1]
                        // game state reset the what cards are selected. 
                        let domCardOneFirstChild = domCardOne.children[0];
                        let domCardOneSecondChild = domCardOne.children[1];
                        domCardOneFirstChild.classList.toggle('hidden');
                        domCardOneSecondChild.classList.toggle('hidden');

                        let domCardTwoFirstChild = domCardTwo.children[0];
                        let domCardTwoSecondChild = domCardTwo.children[1];
                        domCardTwoFirstChild.classList.toggle('hidden');
                        domCardTwoSecondChild.classList.toggle('hidden');

                        if (gameState.turn === PLAYER_ONE) {
                            gameState.turn = PLAYER_TWO;
                        } else {
                            gameState.turn = PLAYER_ONE;
                        }

                        updatePlayerTurn();
                    }, 1000)
                }

                gameState.selectedCards = [];
            }

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
