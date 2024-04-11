const quizData = [
    {
        question: "Which language runs in a web browser",
        a: "C",
        b: "C++",
        c: "JavaScript",
        d: "Python",
        correct:"c",
    },
    {
        question: "What does HTML stand for?",
        a: "HypeText Mark Language",
        b: "HypeText Markup Language",
        c: "HighText Markup Language",
        d: "None of the above",
        correct:"b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Central Style Sheets",
        c: "Cascading Simple Sheets",
        d: "None of the above",
        correct:"a",
    },
    {
        question: "What are the three major languages for web design?",
        a: "Java,HTML,CSS",
        b: "JavaScript,C,HTML",
        c: "JavaScript,HTML,CSS",
        d: "None of the above",
        correct:"c",
    }
];
const quiz = document.getElementById("quiz");
const answersA1 = document.querySelectorAll(".answer");
const questionA1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0
let totalScore = 0

loadQuiz()

function loadQuiz(){
     
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionA1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answersA1.forEach(answersA => answersA.checked = false)
}
function getSelected(){
    let answer
    answersA1.forEach(answersA1 => {
        if(answersA1.checked){
            answer = answersA1.id
        }
    })
    return answer
}

submitbtn.addEventListener("click", ()=> {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            totalScore++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> You answered ${totalScore}/${quizData.length} questions correctly</h2>

            <button onclick = "location.reload()"> Reload </button>
            `
        }
    }
})