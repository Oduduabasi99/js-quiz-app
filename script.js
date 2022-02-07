const quizQuestions = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },{
        question: "Which of the following is a server-side language",
        a: "Vue.js",
        b: "React",
        c: "PHP",
        d: "Bootstrap",
        correct: "c"
    },{
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },{
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },{
        question: "What does OOP stand for?",
        a: "Object Oriented Programming",
        b: "Object Opperating Program",
        c: "Opperations Of Program",
        d: "None Of The Above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questions = document.getElementById('question');
const optA = document.getElementById('opt-a');
const optB = document.getElementById('opt-b');
const optC = document.getElementById('opt-c');
const optD = document.getElementById('opt-d');
const optE = document.getElementById('opt-e');
const optF = document.getElementById('opt-f');
const btn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizQuestions[currentQuiz]
    questions.innerText = currentQuizData.question
    optA.innerText = currentQuizData.a
    optB.innerText = currentQuizData.b
    optC.innerText = currentQuizData.c
    optD.innerText = currentQuizData.d
}

function deselectAnswers() {
    answers.forEach(answer => answer.checked = false)
}

function getSelected() {
    let answer
    answers.forEach(answers => {
        if(answers.checked) {
            answer = answers.id
        }
    })
    return answer
}

btn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizQuestions[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizQuestions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} out of ${quizQuestions.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})