// console.log('[app.js] is working.');

const PLAYER_ONE = 0;
const PLAYER_TWO = 1;
const CARD_VALUE = 10;


// Card Object. 
const cardData = {

    "card-0": {
        cardId: "card-0",
        title: "Dragon",
        faClass: "fa-dragon",
        index: 0,
    }, // matching card is 27
    "card-1": {
        cardId: "card-1",
        title: "Cat",
        faClass: "fa-cat",
        index: 1,
    }, // matching card is 17
    "card-2": {
        cardId: "card-2",
        title: "Dog",
        faClass: "fa-dog",
        index: 2,
    }, // matching card is 21
    "card-3": {
        cardId: "card-3",
        title: "Frog",
        faClass: "fa-frog",
        index: 3,
    }, // matching card is 24
    "card-4": {
        cardId: "card-4",
        title: "Fish",
        faClass: "fa-fish",
        index: 4,
    }, // matching card is 29
    "card-5": {
        cardId: "card-5",
        title: "Bird",
        faClass: "fa-crow",
        index: 5,
    }, // matching card is 31
    "card-6": {
        cardId: "card-6",
        title: "Hippo",
        faClass: "fa-hippo",
        index: 6,
    }, // matching card is 23
    "card-7": {
        cardId: "card-7",
        title: "Horse",
        faClass: "fa-horse",
        index: 7,
    }, // matching card is 16
    "card-8": {
        cardId: "card-8",
        title: "Spider",
        faClass: "fa-spider",
        index: 8,
    }, // matching card is 20
    "card-9": {
        cardId: "card-9",
        title: "Apple",
        faClass: "fa-apple-alt",
        index: 9,
    }, // matching card is 18
    "card-10": {
        cardId: "card-10",
        title: "Tractor",
        faClass: "fa-tractor",
        index: 10,
    }, // matching card is 19
    "card-11": {
        cardId: "card-11",
        title: "Tree",
        faClass: "fa-tree",
        index: 11,
    }, // matching card is 25
    "card-12": {
        cardId: "card-12",
        title: "Music",
        faClass: "fa-itunes-note",
        index: 12,
    }, // matching card is 31
    "card-13": {
        cardId: "card-13",
        title: "Monkey",
        faClass: "fa-mailchimp",
        index: 13,
    }, // matching card is 28
    "card-14": {
        cardId: "card-14",
        title: "Penguin",
        faClass: "fa-linux",
        index: 14,
    }, // matching card is 26 
    "card-15": {
        cardId: "card-15",
        Title: "Alien",
        faClass: "fa-reddit-alien",
        index: 15,
    }, // matching card is 22
    "card-16": {
        cardId: "card-16",
        title: "Horse",
        faClass: "fa-horse",
        index: 16,
    }, // matching card is 7
    "card-17": {
        cardId: "card-17",
        title: "Cat",
        faClass: "fa-cat",
        index: 17,
    }, // matching card is 1
    "card-18": {
        cardId: "card-18",
        title: "Apple",
        faClass: "fa-apple-alt",
        index: 18,
    }, // matching card is 9
    "card-19": {
        cardId: "card-19",
        title: "Tractor",
        faClass: "fa-tractor",
        index: 19,
    }, // matching card is 10
    "card-20": {
        cardId: "card-20",
        title: "Spider",
        faClass: "fa-spider",
        index: 20,
    }, // matching card is 8
    "card-21": {
        cardId: "card-21",
        title: "Dog",
        faClass: "fa-dog",
        index: 21,
    }, // matching card is 2
    "card-22": {
        cardId: "card-22",
        title: "Alien",
        faClass: "fa-reddit-alien",
        index: 22,
    }, // matching card is 15
    "card-23": {
        cardId: "card-23",
        title: "Hippo",
        faClass: "fa-hippo",
        index: 23,
    }, // matching card is 6
    "card-24": {
        cardId: "card-24",
        title: "Frog",
        faClass: "fa-frog",
        index: 24,
    }, // matching card is 3
    "card-25": {
        cardId: "card-25",
        title: "Tree",
        faClass: "fa-tree",
        index: 25,
    }, // matching card is 11
    "card-26": {
        cardId: "card-26",
        title: "Penguin",
        faClass: "fa-linux",
        index: 26,
    }, // matching card is 14
    "card-27": {
        cardId: "card-27",
        title: "Dragon",
        faClass: "fa-dragon",
        index: 27,
    }, // matching card is 0
    "card-28": {
        cardId: "card-28",
        title: "Monkey",
        faClass: "fa-mailchimp",
        index: 28,
    }, // matching card is 13
    "card-29": {
        cardId: "card-29",
        title: "Fish",
        faClass: "fa-fish",
        index: 29,
    }, // matching card is 4
    "card-30": {
        cardId: "card-31",
        title: "Music",
        faClass: "fa-itunes-note",
        index: 30,
    }, // matching card is 12
    "card-31": {
        cardId: "card-32",
        title: "Bird",
        faClass: "fa-crow",
        index: 31,
    }, // matching card is 5



};

// create game state.
const gameState = {
    turn: PLAYER_ONE, // start with player one. 
    players: {

        [PLAYER_ONE]: { // set initial value for player one.
            score: 0,
            playerName: '',
        },

        [PLAYER_TWO]: { // set initial value for player two. 
            score: 0,
            playerName: '',
        },
    },
    selectedCards: [], // empty array for selected cards. 
    matchedCards: [], // empte array for matched cards. 
}

// set variables

const inputForm = document.getElementById('input-form');
const gameHeader = document.getElementById('game-header');

// Cards
const cardContainer = document.getElementById('card-table');
const cardList = document.querySelectorAll('.card');
const cardFront = document.querySelectorAll('.card-front');
const cardNumberList = document.querySelectorAll('.card-number');


let canClick = true; // used to disable clicking the same card twice to create a match. 


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

} // Initializes score and inserts player 1 and player 2 into the board if left null. 

function updatePlayerTurn() {
    if (gameState.turn === PLAYER_ONE) {
        playerTurnElement.innerText = "it is " + (gameState.players[PLAYER_ONE].name || "Player 1's") + " turn";
    } else {
        playerTurnElement.innerText = "It is " + (gameState.players[PLAYER_TWO].name || "Player 2's") + " turn";
    }
} // Sets player turn. 


// Start Card Flip
function showHideCard() {
    for (let idx = 0; idx < cardList.length; idx++) {
        let card = cardList[idx];

        card.addEventListener('click', function () {
            //console.log('click', "click on card");
            let cardId = card.id;
            const hasCards = gameState.selectedCards.length;
            if (!canClick || (hasCards && gameState.selectedCards[0] === cardId)) { // checks can click status.
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
                        const domCardOne = cardList[cardOne.index]
                        const domCardTwo = cardList[cardTwo.index]
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
