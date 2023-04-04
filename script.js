// constants
const questionsBank = [
    {
        question: 'What is the name of the first president of the United State?',
        choices: {
            a: 'Bill Clinton',
            b: 'Thomas Edison',
            c: 'George Washington',
            d: 'Christopher Columbus'
        },
        answer: 'c'
    },
    {
        question: 'What is the square root of 81?',
        choices: {
            a: '7',
            b: '9',
            c: '8',
            d: '5'
        },
        answer: 'b'
    },
    {
        question: 'How many inches are in 6 feet?',
        choices: {
            a: '72 inches',
            b: '6 inches',
            c: '60 inches',
            d: '50 inches'
        },
        answer: 'a'
    },
    {
        question: 'How many states are in the USA?',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },

];

// state variables
let playerName;
let numOfQuestions;
let currentQuestions;
let score;


// cached elements
const nameInputEl = document.getElementById('name-input');
const numInputEl = document.getElementById('num-input');
const playBtn = document.querySelector('button');

// event listeners
playBtn.addEventListener('click', initialize);

// functions
initialize ();

function initialize() {
    playerName = nameInputEl.value;
    numOfQuestions = numInputEl.value;
    currentQuestions = [];
    score = 0;
   
}

function randomize(questions) {
    let index = questionsBank.length;
    let randomIndex;
    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index);
        console.log(randomIndex);
        index--;
        [questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
    }
    return questions;
}

