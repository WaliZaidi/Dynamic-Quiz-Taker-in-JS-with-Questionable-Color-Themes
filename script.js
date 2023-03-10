document.addEventListener("DOMContentLoaded",()=>{
    fetch('https://the-trivia-api.com/api/questions?limit=20&categories=science,history', {
  headers: {

    'Countent-type': 'application/json'
  },
}).then(res=>res.json())
.then(data=>   {

        startButton = document.createElement("button");
        startButton.id = "startButton";
        startButton.innerHTML = "Start Quiz";

        document.getElementById("main").appendChild(startButton);

        document.getElementById("startButton").addEventListener("click", (e)=> {
            e.preventDefault();
            document.getElementById("startButton").remove();
            StartQuiz();
            prompts = data;
            DriverCode(data, 0);
        })
    })

    //make the overall styling of the page

    function StartQuiz() {

        AnsweredQuestions = 0

        questionDiv = document.createElement("div")
        questionDiv.id = "questionDiv";

        document.getElementById("main").appendChild(questionDiv);

        quizHeading = document.createElement("h1");
        quizHeading.id = "quizHeading";

        document.getElementById("questionDiv").appendChild(quizHeading);

    }

    //driver code to get next questions

    function DriverCode(data, i) {
        prompts = data;
        promptNo = i;
        DisplayQuestion(prompts[promptNo], promptNo);
    }

    function DriverDriverCode(i) {
        promptNo = i;
        console.log("Meow");
        console.log(prompts[1].question);
        DisplayQuestion(prompts[promptNo], promptNo);
    }

    //render the questions and its options

    function DisplayQuestion(query, i) {
        
        console.log("bally");
        console.log(query);

        let form = document.getElementById("quiz");
        carddiv = document.createElement("div");
        carddiv.id = "card";
        console.log(carddiv);
        carddiv.classList.add("card");
        h3 = document.createElement("h3");
        h3.classList.add("h3");
        h3.innerText = "Question " + (i+1) + " :";
        p = document.createElement("p");
        p.classList.add("p");
        p.innerHTML = query.question;
        
        carddiv.appendChild(h3);
        carddiv.appendChild(p);
        form.appendChild(carddiv);
        questionDiv.appendChild(form);

        optiondiv = document.createElement("div");
        optiondiv.id = "optionDiv";
        optiondiv.classList.add("options");

        var answers = query.incorrectAnswers;
        answers.push(query.correctAnswer);

        answers.sort(()=>Math.random() - 0.5);

        for(var j=0;j<answers.length;j++) {
            div = document.createElement("div");
            label = document.createElement("label");
            label.innerHTML = answers[j] ;         
            label.for = "query" + i + "o" + j;      
            input = document.createElement("input"); 
            input.classList.add("answerButton");
            input.type = "button";
            input.value = answers[j];
            input.name = "query" + i;
            input.id = "answer" + j;

            div.appendChild(input);
            optiondiv.appendChild(div);
            carddiv.appendChild(optiondiv);
        }


        submission = document.createElement("input");
        submission.type = "button";
        submission.id = "nextQuestionButton";
        submission.value = "Next Question";
        carddiv.appendChild(submission);

        document.getElementById("nextQuestionButton").addEventListener("click", (e)=> {
            NextQuestion(i);
        })

        //after this is the checking 

        el = document.getElementById("answer" + 0);
        if(el){
            el.addEventListener("click", (e)=> {
                e.preventDefault();
                if (query.correctAnswer == el.value) {
                    el.style.backgroundColor = "lawngreen";
                } 
                else {
                    el.style.backgroundColor = "palevioletred";
                    for(var k = 0; k < 4; k++) {
                        ans = document.getElementById("answer" + k);
                        if (ans) {
                            if (query.correctAnswer == ans.value) {
                                bool = true;
                                AnsweredQuestions++;
                                break;
                            } 
                        }
                    }
                    if (bool) {
                        ans.style.backgroundColor = "lawngreen";
                    }
                }
            })
        }

        el2 = document.getElementById("answer" + 1);
        if(el2){
            el2.addEventListener("click", (e)=> {
                e.preventDefault();
                if (query.correctAnswer == el2.value) {
                    el2.style.backgroundColor = "lawngreen";
                } 
                else {
                    el2.style.backgroundColor = "palevioletred";
                    for(var k = 0; k < 4; k++) {
                        ans = document.getElementById("answer" + k);
                        if (ans) {
                            if (query.correctAnswer == ans.value) {
                                bool = true;
                                AnsweredQuestions++;
                                break;
                            } 
                        }
                    }
                    if (bool) {
                        ans.style.backgroundColor = "lawngreen";
                    }
                }
            })
        }
        
        el3 = document.getElementById("answer" + 2);
        if(el3){
            el3.addEventListener("click", (e)=> {
                e.preventDefault();
                if (query.correctAnswer == el3.value) {
                    el3.style.backgroundColor = "lawngreen";
                } 
                else {
                    el3.style.backgroundColor = "palevioletred";
                    for(var k = 0; k < 4; k++) {
                        ans = document.getElementById("answer" + k);
                        if (ans) {
                            if (query.correctAnswer == ans.value) {
                                bool = true;
                                AnsweredQuestions++;
                                break;
                            } 
                        }
                    }
                    if (bool) {
                        ans.style.backgroundColor = "lawngreen";
                    }
                }
            })
        }

        el4 = document.getElementById("answer" + 3);
        if(el4){
            el4.addEventListener("click", (e)=> {
                e.preventDefault();
                if (query.correctAnswer == el4.value) {
                    el4.style.backgroundColor = "lawngreen";
                } 
                else {
                    el4.style.backgroundColor = "palevioletred";
                    for(var k = 0; k < 4; k++) {
                        ans = document.getElementById("answer" + k);
                        if (ans) {
                            if (query.correctAnswer == ans.value) {
                                bool = true;
                                AnsweredQuestions++;
                                break;
                            } 
                        }
                    }
                    if (bool) {
                        ans.style.backgroundColor = "lawngreen";
                    }
                }
            })
        }
    }

    function NextQuestion(i) {

        document.getElementById("card").remove();

        if (i >= 19) {
            console.log();
            console.log();
            console.log();
            console.log();
            console.log();
            console.log(AnsweredQuestions);
            GenerateResultPage();
        }
        else {
            DriverDriverCode(i+1);
        }

    }

    function GenerateResultPage() {

        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log(AnsweredQuestions);

        answerHeader = document.createElement("h1");
        answerHeader.innerHTML = "You have gotten " + (20-AnsweredQuestions) + " correct answers out of 20.";
        scoreHeader = document.createElement("h2");
        scoreHeader.innerHTML = "Your percentage is " + ((20-AnsweredQuestions)/20)*100;

        questionDiv.appendChild(answerHeader);
        questionDiv.appendChild(scoreHeader);
    }
});