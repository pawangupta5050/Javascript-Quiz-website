const data = [
    {
        question : "The Central Rice Research Station is situated in? ",
        ans1 :  "Chennai",
        ans2 : "Cuttack",
        ans3 : "Bangalore",
        ans4 : "Quilon",
        ans : "option2",
    },
    {
        question : "Which among the following headstreams meets the Ganges in last? ",
        ans1 :  "Alaknanda",
        ans2 : " Pindar",
        ans3 : "Mandakini",
        ans4 : "Bhagirathi",
        ans : "option4",
    },
    {
        question : "River Luni originates near Pushkar and drains into which one of the following?",
        ans1 :  "Rann of Kachchh",
        ans2 : "Arabian Sea",
        ans3 : "Gulf of Cambay",
        ans4 : "Lake Sambhar",
        ans :  "option1",
    },
    {
        question : "The hottest planet in the solar system? ",
        ans1 :  "Mercury",
        ans2 : "Venus",
        ans3 : "Mars",
        ans4 : "Jupiter",
        ans : "option2",
    },
    {
        question : " Which one of the following rivers originates in Brahmagiri range of Western Ghats? ",
        ans1 :  "Pennar",
        ans2 : "Cauvery",
        ans3 : "Krishna",
        ans4 : "Tapti",
        ans : "option2",
    }
]

const question = document.querySelector('.question');

const option1 = document.querySelector('#option-one');
const option2 = document.querySelector('#option-two');
const option3 = document.querySelector('#option-three');
const option4 = document.querySelector('#option-four');
const submit = document.querySelector('#submit');
const showScore = document.querySelector('#show-score')
const options = document.querySelectorAll('.options')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = data[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.ans1;
    option2.innerHTML = questionList.ans2;
    option3.innerHTML = questionList.ans3;
    option4.innerHTML = questionList.ans4;
}

loadQuestion();

const getCheckedAnswer = () => {
    let answer ;
    options.forEach( answerElement => {
        if(answerElement.checked){
            answer = answerElement.id;
        }
    });
    return answer;
}

const deselect = () => {
    options.forEach( answerElement => answerElement.checked = false)
}

submit.addEventListener('click', () => {
    const checkAnswer = getCheckedAnswer();
    if(checkAnswer === data[questionCount].ans){
        score++;
    }

    questionCount++;
    deselect();

    if(questionCount < data.length){
        loadQuestion();
    }else{
     showScore.innerHTML = `
     <h3> You Scored ${score} out of ${data.length} </h3>
     <button class="btn" onclick="location.reload()"> Play Again </button>
     `   

     showScore.classList.remove('score-area');

    }
});