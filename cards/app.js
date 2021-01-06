let cards = ['♥A', '♥2', '♥3', '♥4', '♥5', '♥6', '♥7', '♥8', '♥9', '♥10', '♥J', '♥Q', '♥K', '♦A', '♦2', '♦3', '♦4', '♦5', '♦6', '♦7', '♦8', '♦9', '♦10', '♦J', '♦Q', '♦K', '♠A', '♠2', '♠3', '♠4', '♠5', '♠6', '♠7', '♠8', '♠9', '♠10', '♠J', '♠Q', '♠K', '♣A', '♣2', '♣3', '♣4', '♣5', '♣6', '♣7', '♣8', '♣9', '♣10', '♣J', '♣Q', '♣K'];

let duplicate = []; // contains symbols
let history = []; // contains symbols
let historyName = []; // contains the history in name form
let c = 0; // for previous and next buttons
let x = 0;

// ************************** functions **************************

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
    document.querySelector('#dealt').textContent += ` ${history[x]}`;
    ++x;
}

// enable the button
function enableButtons() {
    if(history.length > 1) {
        document.querySelector('#prev').disabled = false;
        document.querySelector('#prev').style.opacity = 1;
    }
}

// ************************** logic part **************************

// shows the cards on DOM
showCards();

// deal button
document.querySelector('#deal').addEventListener('click', function() {
    c++;

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

    // enable to prev and next buttons once a deal is made
    enableButtons();
});

// previous deal
document.querySelector('#prev').addEventListener('click', function() {
    c = c - 1;
    // document.querySelector('#dealt').textContent = `pang ${c}`;    

    // disables the button if no more previous elements
    if(c < 2) {
        document.querySelector('#prev').disabled = true;
        document.querySelector('#prev').style.opacity = .4;
    }

    // shows the previous deal
    document.querySelector('#dealt').textContent = `${historyName[c - 1]} ${history[c - 1]}`;  

    // to enable the next button, the user must press 1 prev or more
    if(historyName.length - (c - 1) === 2) {
        document.querySelector('#next').disabled = false;
        document.querySelector('#next').style.opacity = 1;
    }
});

// next
document.querySelector('#next').addEventListener('click', function() {
    // enable the prev button
    document.querySelector('#prev').disabled = false;
    document.querySelector('#prev').style.opacity = 1;

    document.querySelector('#dealt').textContent = `${historyName[c]} ${history[c]}`;
    c++;    

    // disable the button once no more available next
    if(c == history.length) {
        document.querySelector('#next').disabled = true;
        document.querySelector('#next').style.opacity = .4;
    }
});

// reshuffle the deck, reset the session
document.querySelector('#reshuffle').addEventListener('click', function() {
    document.querySelector('#prev').disabled = true;
    document.querySelector('#next').disabled = true;
    location.reload();
});

// ************************** 4 card tasks **************************

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

    // stores the dealt card on its name form
    let word = printName(removed);
    historyName.push(word);

    // to print the name of the removed card
    return word;
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