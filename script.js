const quizData = [
    {
        question: 'What is the most popular programming language in 2021',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US ? ',
        a: 'Hillary Clinton',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Barack Obama',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for ?',
        a: 'Hypertext Markup Language',
        b: 'Helicopters Terminals Motorbeats Lamborghinis',
        c: 'High Technology Modern Language',
        d: 'Hide The Missing Library',
        correct: 'a'
    },
    {
        question: 'What is the main function of CSS ?',
        a: 'color the text',
        b: 'apply consistent styling of elements across all pages of the site',
        c: 'change background',
        d: 'move elements',
        correct: 'b'
    },
    {
        question: 'What year was javascript launched',
        a: '2006',
        b: '2003',
        c: '1995',
        d: '1999',
        correct: 'c'
    }
];
const answerEls = document.querySelectorAll('.answer');
const quizz = document.getElementById('quizz');
const questionText = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuizz = 0;
let score = 0;

loadQuizz();

function loadQuizz() {
    deselectAnswer();

    const currentQuizzData = quizData[currentQuizz];
    questionText.innerText = currentQuizzData.question;
    
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    }) 

    return answer;
}

function deselectAnswer(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;   
    })
}

submitBtn.addEventListener('click', () => {

    let answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuizz].correct){
            score++;
        }
        currentQuizz++;
        if(currentQuizz < quizData.length) {
            loadQuizz();
        } else {
            quizz.innerHTML = `
                <h3>You answered correctly at ${score}/${quizData.length} questions </h3> 
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } 
})