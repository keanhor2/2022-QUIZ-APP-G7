
//  ===========    VARIABLES     ==============================================
let data = [];
const form = document.querySelector('form');
const removeBtn = document.querySelector('removeBtn');


//  ===========    FUNCTION     ==============================================
function displayQuiz() {

    for (let questions of data) {

        // Find index of each questions    
        let numberOfQuestion = data.indexOf(questions) + 1;
        let titleOfQuestion = document.createElement('h3');
        titleOfQuestion.className = "question";

        // Title of each questions   
        let pOfQuestion = document.createElement('p');
        pOfQuestion.className = "pOfQuestion";

        // Number in order of each questions   
        pOfQuestion.textContent = numberOfQuestion + questions.titleOfQuestion;
        titleOfQuestion.appendChild(pOfQuestion);
        form.appendChild(titleOfQuestion);

        // Create image of pencil to edit questions & append into edit button
        let editBtn = document.createElement('img');
        editBtn.src = "../image/pencil.png";
        editBtn.className = "editBtn";
        titleOfQuestion.appendChild(editBtn);

        // Create image of trush to remove questions & append into remove button
        let removeBtn = document.createElement('img');
        removeBtn.src = "../image/trush.png";
        removeBtn.className = "removeBtn";
        titleOfQuestion.appendChild(removeBtn);

        // Loop to create position of  each answers   
        for (let values of questions.listOfAnswers) {
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
            titleOfQuestion.appendChild(ol);

            //  To know which one is correct    
            if (values['isCorrect'] === true) {
                var tickImg = document.createElement('img');
                tickImg.className = "tickImg";
                tickImg.src = "../image/tick.png";
                ol.appendChild(tickImg);
                ol.style.display = "image/tick.png";
            }
            // console.log(form);

        }
    }
}

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
    }
    else {
        data = JSON.parse(dataFromLocalStorage);
    }
}


function removeQuestion() {
    //  find the index of the question
    console.log(numberOfQuestion);
    // remove the question of the array of data

    // save data
    saveData()

    // refresh dom
    displayQuiz()
}

//  ===========    MAIN     =================================================


// 1 = Read from local storage
loadData();


displayQuiz();

// removeBtn.addEventListener('click', removeQuestion);
