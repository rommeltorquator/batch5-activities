function Question(ans) {
    // questions
    let questions = ['What is the color of Orange?', 'How old is Jose Rizal when he died?', 'How many sides does the triange have?'];
    
    // generates the random question
    let rand = Math.floor(Math.random() * questions.length + 1);
    
    // choices
    let c1 = ['Orange', 'Green', 'Blue']; // 1
    let c2 = [41, 35, 29]; // 2
    let c3 = [3, 2, 1]; // 1
    let n = 0;
    let ask = false;
    
    // displaying the questions
    function showQuestion() {
        console.log(questions[rand - 1]);
        ask = true;
    }
    
    // displaying the choices
    function showChoices(num) {
        switch(num - 1) {
            case 0:
                c1.forEach((name) => console.log(`${++n}) ${name}`));
                break;
            case 1:
                c2.forEach((name) => console.log(`${++n}) ${name}`));
                break;
            case 2:
                c3.forEach((name) => console.log(`${++n}) ${name}`));
                break;
        }
    }
    
    // asking the user for the answer
    function askAnswer(r) {
        // stores the answer
        let ans = prompt("Answer: ");
        ans = parseInt(ans);
        
        // selects the question
        switch(r - 1) {
            case 0:
                // evaluates the answer for question 1
                if(ans === 1) {
                    console.log("Correct");
                } else {
                    console.log("Wrong!");
                }
                break;
            case 1:
                // evaluates the answer for question 1
                if(ans === 2) {
                    console.log("Correct");
                } else {
                    console.log("Wrong!");
                }
                break;
            case 2:
                // evaluates the answer for question 1
                if(ans === 1) {
                    console.log("Correct");
                } else {
                    console.log("Wrong!");
                }
                break;
        }
    }
    
    showQuestion();
    showChoices(rand);
    
    if(ask) {
    	askAnswer(rand);
    }
}

Question();