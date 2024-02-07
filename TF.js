const questions = [
    {
        question: "3+5=8",
        answers: [
            {text: "TRUE", correct: true},
            {text: "False", correct: false},
        ]
    },

    {
        question: "6-2=4",
        answers: [
            {text: "TRUE", correct: true},
            {text: "False", correct: false},
        ]
    },
    {
    question: "4 x 2 =8",
        answers: [
            {text: "TRUE", correct: true},
            {text: "False", correct: false},
        ]
    },
    {
        question: "9 / 3 = 2",
            answers: [
                {text: "TRUE", correct: false},
                {text: "False", correct: true},
            ]
        },
        {
            question: "2 + 2 = 5",
                answers: [
                    {text: "TRUE", correct: false},
                    {text: "False", correct: true},
                ]
            },

            {
                question: "7 - 4 = 3",
                    answers: [
                        {text: "TRUE", correct: true},
                        {text: "False", correct: false},
                    ]
                },
                {
                    question: "3 x 3 = 6",
                        answers: [
                            {text: "TRUE", correct: false},
                            {text: "False", correct: true},
                        ]
                    },

                    {
                        question: "4 x 2 =8",
                            answers: [
                                {text: "TRUE", correct: true},
                                {text: "False", correct: false},
                            ]
                        },

                        {
                            question: "8 / 2 = 4",
                                answers: [
                                    {text: "TRUE", correct: true},
                                    {text: "False", correct: false},
                                ]
                            }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score  = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ===  "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


startQuiz();