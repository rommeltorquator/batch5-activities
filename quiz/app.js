// variables
let questions = ['What does HTML stand for?', 'How many tags are in a regular element? ', 'What is the difference in an opening tag and a closing tag?', '< br  / > What type of tag is this?', '< body > Is this an opening tag or a closing tag?', '< / body > Is this an opening tag or a closing tag?', 'How many states are there in America 2020?', 'How old was Jose Rizal when he died?', 'Who is the 45th president of the United States?', 'What is the capital of Tokyo?'];

// generates the random question
let rand;

// choices
let c1 = ['Hyper Text Markup Language', 'Hot Mail', 'How To Make Lasagna'];
let c2 = [1, 2, 3];
let c3 = ['Opening tag has a / in front', 'Closing tag has a / in front', 'There is no difference' ];
let c4 = ['An opening tag ', 'A broken one', 'Break tag'];
let c5 = ['Opening', 'Closing'];
let c6 = ['Opening', 'Closing'];
let c7 = [45, 30, 50];
let c8 = [29, 22, 35];
let c9 = ['Barack Obama', 'Dennis Rodman', 'Donald Trump'];
let c10 = ['Ankara', 'Tokyo', 'Dagestan'];

let n = 0;
let ask = false;

let cont = true;
let score = 0;

// displaying the questions
function showQuestion() {
    // generates random question
    rand = Math.floor(Math.random() * questions.length + 1);

    console.log(questions[rand - 1]);
    ask = true;    
}

// displaying the choices, num is the question
function showChoices(num) {
    switch(num - 1) {
        case 0:
            c1.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 1:
            c2.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 2:
            c3.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 3:
            c4.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 4:
            c5.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 5:
            c6.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 6:
            c7.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 7:
            c8.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 8:
            c9.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
        case 9:
            c10.forEach((name) => console.log(`${++n}.) ${name}`));
            break;
    }
}

// asking the user for the answer
function askAnswer(r) {
    // stores the answer
    let ans = prompt("Answer: ");
    ansString = ans;
    ans = parseInt(ans);
    
    // selects the question
    switch(r - 1) {
        case 0:
            // evaluates the answer for question 1
            if(ans === 1) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 1:
            // evaluates the answer for question 2
            if(ans === 2) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 2:
            // evaluates the answer for question 3
            if(ans === 2) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 3:
            // evaluates the answer for question 4
            if(ans === 3) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 4:
            // evaluates the answer for question 5
            if(ans === 1) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 5:
            // evaluates the answer for question 6
            if(ans === 2) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 6:
            // evaluates the answer for question 7
            if(ans === 3) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 7:
            // evaluates the answer for question 8
            if(ans === 3) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 8:
            // evaluates the answer for question 9
            if(ans === 3) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
        case 9:
            // evaluates the answer for question 10
            if(ans === 2) {
                rightAnswer();
            } else if(ansString === 'exit') {
                exitGame();
            } else if(ansString === 'Exit') {
                exitGame();
            } else {
                wrongAnswer();
            }
            break;
    }

    // to stop displaying score if the game is over
    if(cont) {
        displayScore();
    }
}

const rightAnswer = () => {
    console.log("Correct!");
    score++;
    n = 0;
}

const wrongAnswer = () => {
    console.log("Wrong!");
    n = 0;
}

const exitGame = () => {
    cont = false;
    console.log(`Thank you for playing! Your score is ${score}`);
}

const displayScore = () => {
    // shows the score
    console.log(`Score: ${score}`);
}

const startGame = () => {
    showQuestion();
    showChoices(rand);
    askAnswer(rand);
}

// runs the game continuously until cont has been set to false
while(cont) {
    startGame();
}