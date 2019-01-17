//BlackJack by JaredH

function generateDeck() {
    let deck = [];

    let values = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King","Ace"];
    let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.push((values[i]+" of "+suits[j]));
        }
    }
    return deck;
}

function getNextCard() {
    return deck.shift();
}

let deck = generateDeck();
let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log(" ",playerCards[0]);
console.log(" ",playerCards[1]);