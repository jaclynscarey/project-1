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
    {
        question: '4',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '5',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '6',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '7',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '8',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '9',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '10',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '11',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '12',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '13',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '14',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '15',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '16',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '17',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '18',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '19',
        choices: {
            a: '13',
            b: '50',
            c: '27',
            d: '36'
        },
        answer: 'b'
    },
    {
        question: '20',
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
let randomQuestions;
let position;
let newQuestionEl;
let newChoice1El;
let newChoice2El;
let newChoice3El;
let newChoice4El;
let nextBtn;



// cached elements
const nameInputEl = document.getElementById('name-input');
const numInputEl = document.getElementById('num-input');
const playBtn = document.getElementById('play-button');
const mainContainerEl = document.getElementById('main-container');


// event listeners
playBtn.addEventListener('click', play);

// functions
initialize();

// resets all to initial values
function initialize() {
    playerName = '';
    numOfQuestions = 0;
    currentQuestions = [];
    score = 0;
    randomQuestions = [];
    position = 0;
}
// takes player input and starts game
function play() {
    playerName = nameInputEl.value;
    numOfQuestions = numInputEl.value;
    nameInputEl.value = '';
    numInputEl.value = '';
    document.getElementById('home-div').style.visibility = "hidden";
    document.getElementById('home-div').style.height = '0px';
    randomQuestions = randomize(questionsBank);
    currentQuestions = questionsPicker(randomQuestions);
    position++;
    createNewLayout();
}

function nextQuestion() {
    position++;
    createNewLayout();

}

function createNewLayout() {
    newQuestionEl = document.createElement('h2');
    newQuestionEl.classList = `question-${position}`;
    newQuestionEl.innerText = currentQuestions[position-1].question;
    mainContainerEl.appendChild(newQuestionEl);

    newChoice1El = document.createElement('h3');
    newChoice1El.innerText = currentQuestions[position-1].choices.a;
    mainContainerEl.appendChild(newChoice1El);

    newChoice2El = document.createElement('h3');
    newChoice2El.innerText = currentQuestions[position-1].choices.b;
    mainContainerEl.appendChild(newChoice2El);

    newChoice3El = document.createElement('h3');
    newChoice3El.innerText = currentQuestions[position-1].choices.c;
    mainContainerEl.appendChild(newChoice3El);

    newChoice4El = document.createElement('h3');
    newChoice4El.innerText = currentQuestions[position-1].choices.d;
    mainContainerEl.appendChild(newChoice4El);

    nextBtn = document.createElement('button');
    nextBtn.innerText = 'Next';
    mainContainerEl.appendChild(nextBtn);
    nextBtn.addEventListener('click', nextQuestion);
}

// randomize() shuffles all questions in questionsBank array
function randomize(randomQuestions) {
    let index = questionsBank.length;
    let randomIndex;
    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        [randomQuestions[index], randomQuestions[randomIndex]] = [randomQuestions[randomIndex], randomQuestions[index]];
    }
    return randomQuestions;
}

// questionsPicker() chooses user's requested # of questions from randomize()
function questionsPicker() {
    for (let i = 0; i < numOfQuestions; i++) {
        currentQuestions.push(randomQuestions[i]);
    }
    return currentQuestions;
}

