//  ===========    VARIABLES     ==============================================
const form = document.querySelector('form');
let removeBtn = document.querySelector('removeBtn');
let data = [];
let btnAdd = document.getElementById("btnAdd");
let inputQuestion = document.getElementById("question");
let inputAnswer1 = document.getElementById("answer1");
let inputAnswer2 = document.getElementById("answer2");
let inputAnswer3 = document.getElementById("answer3");
let inputAnswer4 = document.getElementById("answer4");
let setScore = document.querySelector('#setScore');
for (let i of setScore) {
    // let point = setScore.value;
    console.log(setScore.value)
}

//  ===========    FUNCTION     ==============================================
let addScoreToLoc = localStorage.setItem('score', JSON.stringify(setScore.value));
// let toRemoveQuestion = questions.titleOfQuesion;
function
removeQuestion(event) {
    let = event.target.parentNode;

    //  find the index of the question
    for (let questions of data) {
        let numberOfQuestion = data.indexOf(questions) + 1;
        // remove the question of the array of data
    }
    // save data
    saveData()

    // refresh dom
    displayQuiz()
}


function displayQuiz() {
    for (let questions of data) {

        // Find index of each questions    
        var numberOfQuestion = data.indexOf(questions) + 1 + " : ";
        let questionTitle = document.createElement('h3');
        questionTitle.className = "question";
        // Title of each questions   
        let pOfQuestion = document.createElement('p');
        pOfQuestion.className = "pOfQuestion";

        // Number in order of each questions   
        // pOfQuestion.textContent = numberOfQuestion + questions.titleOfQuestion;
        // questionTitle.appendChild(pOfQuestion);
        // form.appendChild(questionTitle);

        // Create image of pencil to edit questions & append into edit button
        // let editBtn = document.createElement('img');
        // editBtn.src = "../image/pencil.png";
        // editBtn.className = "editBtn";
        // questionTitle.appendChild(editBtn);

        // // Create image of trush to remove questions & append into remove button
        // let removeBtn = document.createElement('img');
        // removeBtn.src = "../image/trush.png";
        // removeBtn.className = "removeBtn";
        // questionTitle.appendChild(removeBtn);

        // removeBtn.addEventListener('click', removeQuestion);

        // Loop to create position of  each answers   
        for (let values of questions.listOfAnswer) {
            let ol = document.createElement('ol');
            ol.className = 'ol-edit';

            // To create type of radio button    
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = "answer";
            radio.className = "radio";
            let li = document.createElement('li');
            li.className = "li-edit";
            li.textContent = values['titleOfAnswer'];
            ol.appendChild(radio);
            ol.appendChild(li);
            questionTitle.appendChild(ol);
            //  To know which one is correct    
            if (values['isCorrect'] === "true") {
                var tickImg = document.createElement('img');
                tickImg.className = "tickImg";
                tickImg.src = "../image/tick.png";
                ol.appendChild(tickImg);
                ol.style.display = "image/tick.png";
            }
        }
    }
}
displayQuiz()

//
// Set data to local storage    
//
function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
}

//
// Get data from local storage    
//
function loadData() {
    let dataFromLocalStorage = localStorage.getItem('data');
    if (dataFromLocalStorage === null) {
        data = []
    } else {
        data = JSON.parse(dataFromLocalStorage);
    }
}
//
// Function add questions 
//
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

function add() {

    if (inputQuestion.value == "" || inputAnswer1.value == "" || inputAnswer2.value == "" || inputAnswer3.value == "" ||
        inputAnswer4.value === "") {
        window.alert("Please write input the feild!")
    } else {
        setTimeout(function() {
            location.reload(true);
        }, 8000);
        // window.location.reload()
        data.push({
            questionE: inputQuestion.value,
            listOfAnswersE: [
                { titleOfAnswer: inputAnswer1.value, isCorrect: option1.value },
                { titleOfAnswer: inputAnswer2.value, isCorrect: option2.value },
                { titleOfAnswer: inputAnswer3.value, isCorrect: option3.value },
                { titleOfAnswer: inputAnswer4.value, isCorrect: option4.value }
            ]
        });
    }
    saveData();
    alert('Your quiz is already added')
    play.style.display = 'block'
}
//  ===========    MAIN     =================================================
let play = document.querySelector('.createBtn');
play.style.display = 'none'

// 1 = Read from local storage
loadData();

// =================================main=====================================
btnAdd.addEventListener("click", add);

displayQuiz();