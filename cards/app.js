let cards = ['♥A', '♥2', '♥3', '♥4', '♥5', '♥6', '♥7', '♥8', '♥9', '♥10', '♥J', '♥Q', '♥K', '♦A', '♦2', '♦3', '♦4', '♦5', '♦6', '♦7', '♦8', '♦9', '♦10', '♦J', '♦Q', '♦K', '♠A', '♠2', '♠3', '♠4', '♠5', '♠6', '♠7', '♠8', '♠9', '♠10', '♠J', '♠Q', '♠K', '♣A', '♣2', '♣3', '♣4', '♣5', '♣6', '♣7', '♣8', '♣9', '♣10', '♣J', '♣Q', '♣K'];

let duplicate = [];
let history = [];
let x = 0;

// connecting to DOM

// showing all remaining cards
function showCards() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('#remaining').textContent += cards[i] + ' ';
    }
}

// shows the draw history
function showHistory() {
    for(let i = 0; i < history.length; i++) {
        document.querySelector('#drawHistory').textContent += history[i] + ' ';
    }
}

// get 1 card and display the dealt card
function getDealtCard(deck) {    
    document.querySelector('#dealt').textContent = deal(shuffleCards(deck));
    document.querySelector('#dealt').textContent += `: ${history[x]}`;
    ++x;    
}

// shows the cards on DOM
showCards();

// reshuffle the deck, reset the session
document.querySelector('#reshuffle').addEventListener('click', function() {
    location.reload();
});

// deal button
document.querySelector('#deal').addEventListener('click', function() {
    // get 1 card and display the dealt card
    getDealtCard(cards);

    // shows the cards minus the dealt card
    document.querySelector('#remaining').textContent = null;
    showCards();

    // shows the deal history
    document.querySelector('#drawHistory').textContent = null;
    showHistory();


    // disables the deal button if the deck is already empty
    if(cards.length === 0) {
        document.querySelector('#deal').disabled = true;
    }
});

// task 1
function shuffleCards(array) {
    if(duplicate.length === 0) {
        for(let i = 0; i < array.length; i++) {
            duplicate.splice(i, 1, array[i]);
        }
    }

    let s = array.sort(() => Math.random() - 0.5);
    return s;
}

// task 2
function bySuit(array) {
    let s = array.sort();
    return s;
}

// task 3
function asc(array) {
    // transfers the duplicate to the card array
    for(let i = 0; i < duplicate.length; i++) {
        array.splice(i, 1, duplicate[i]);
    }    

    return array;
}

function desc(array) {
    let n = asc(array);
    return n.reverse();
}

// task 4
function deal(array) {
    let removed = array.shift();
    let i = duplicate.indexOf(removed);

    // to push the dealt card in an history array to use to display the draw history
    history.push(removed);

    // to remove the dealt card inside the duplicate array
    duplicate.splice(i, 1);

    // to print the name of the removed card
    return printName(removed);
}

function printName(card) {
    switch(card) {
        case '♥A':
            return 'Ace of Hearts';
            break;
        case '♥2':
            return 'Two of Hearts';
            break;
        case '♥3':
            return 'Three of Hearts';
            break;
        case '♥4':
            return 'Four of Hearts';
            break;
        case '♥5':
            return 'Five of Hearts';
            break;
        case '♥6':
            return 'Six of Hearts';
            break;
        case '♥7':
            return 'Seven of Hearts';
            break;
        case '♥8':
            return 'Eight of Hearts';
            break;
        case '♥9':
            return 'Nine of Hearts';
            break;
        case '♥10':
            return 'Ten of Hearts';
            break;
        case '♥J':
            return 'Jack of Hearts';
            break;
        case '♥Q':
            return 'Queen of Hearts';
            break;
        case '♥K':
            return 'King of Hearts';
            break;
        case '♦A':
            return 'Ace of Diamonds';
            break;
        case '♦2':
            return 'Two of Diamonds';
            break;
        case '♦3':
            return 'Three of Diamonds';
            break;
        case '♦4':
            return 'Four of Diamonds';
            break;
        case '♦5':
            return 'Five of Diamonds';
            break;
        case '♦6':
            return 'Six of Diamonds';
            break;
        case '♦7':
            return 'Seven of Diamonds';
            break;
        case '♦8':
            return 'Eight of Diamonds';
            break;
        case '♦9':
            return 'Nine of Diamonds';
            break;
        case '♦10':
            return 'Ten of Diamonds';
            break;
        case '♦J':
            return 'Jack of Diamonds';
            break;
        case '♦Q':
            return 'Queen of Diamonds';
            break;
        case '♦K':
            return 'King of Diamonds';
            break;
        case '♠A':
            return 'Ace of Spades';
            break;
        case '♠2':
            return 'Two of Spades';
            break;
        case '♠3':
            return 'Three of Spades';
            break;
        case '♠4':
            return 'Four of Spades';
            break;
        case '♠5':
            return 'Five of Spades';
            break;
        case '♠6':
            return 'Six of Spades';
            break;
        case '♠7':
            return 'Seven of Spades';
            break;
        case '♠8':
            return 'Eight of Spades';
            break;
        case '♠9':
            return 'Nine of Spades';
            break;
        case '♠10':
            return 'Ten of Spades';
            break;
        case '♠J':
            return 'Jack of Spades';
            break;
        case '♠Q':
            return 'Queen of Spades';
            break;
        case '♠K':
            return 'King of Spades';
            break;
        case '♣A':
            return 'Ace of Clubs';
            break;
        case '♣2':
            return 'Two of Clubs';
            break;
        case '♣3':
            return 'Three of Clubs';
            break;
        case '♣4':
            return 'Four of Clubs';
            break;
        case '♣5':
            return 'Five of Clubs';
            break;
        case '♣6':
            return 'Six of Clubs';
            break;
        case '♣7':
            return 'Seven of Clubs';
            break;
        case '♣8':
            return 'Eight of Clubs';
            break;
        case '♣9':
            return 'Nine of Clubs';
            break;
        case '♣10':
            return 'Ten of Clubs';
            break;
        case '♣J':
            return 'Jack of Clubs';
            break;
        case '♣Q':
            return 'Queen of Clubs';
            break;
        case '♣K':
            return 'King of Clubs';
            break;
    }
}