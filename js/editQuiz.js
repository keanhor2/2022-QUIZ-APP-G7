
//  ===========    VARIABLES     ==============================================
let data = [];
const form = document.querySelector('form');
let removeBtn = document.querySelector('removeBtn');


//  ===========    FUNCTION     ==============================================
function displayQuiz() {

    for (let questions of data) {

        // Find index of each questions    
        let numberOfQuestion = data.indexOf(questions) + 1;
        let questionTitle = document.createElement('h3');
        questionTitle.className = "question";
        // Title of each questions   
        let pOfQuestion = document.createElement('p');
        pOfQuestion.className = "pOfQuestion";
        
        // Number in order of each questions   
        pOfQuestion.textContent = numberOfQuestion + questions.titleOfQuesion;
        questionTitle.appendChild(pOfQuestion);
        form.appendChild(questionTitle);

        // Create image of pencil to edit questions & append into edit button
        let editBtn = document.createElement('img');
        editBtn.src = "../image/pencil.png";
        editBtn.className = "editBtn";
        questionTitle.appendChild(editBtn);

        // Create image of trush to remove questions & append into remove button
        let removeBtn = document.createElement('img');
        removeBtn.src = "../image/trush.png";
        removeBtn.className = "removeBtn";
        questionTitle.appendChild(removeBtn);


        function removeQuestion() {
            //  find the index of the question
            // numberOfQuestion.remove();
            pOfQuestion.textContent = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
            // remove the question of the array of data
        
            // save data
            saveData()
        
            // refresh dom
            // displayQuiz()
        }
        removeBtn.addEventListener('click', removeQuestion);

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
            questionTitle.appendChild(ol);

            //  To know which one is correct    
            if (values['isCorrect'] === true) {
                var tickImg = document.createElement('img');
                tickImg.className = "tickImg";
                tickImg.src = "../image/tick.png";
                ol.appendChild(tickImg);
                ol.style.display = "image/tick.png";
            }
            // console.log(questionTitle);

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


// function removeQuestion() {
//     //  find the index of the question
    
//     // remove the question of the array of data

//     // save data
//     saveData()

//     // refresh dom
//     displayQuiz()
// }
//
// Function add questions 
//
function add(event){
    if (event.target.id==="btnAdd"){
        titleQuestion.titleOfQuesion=inputQuestion.value;
        titleAnswer1.titleOfAnswer=inputAnswer1.value;
        titleAnswer1.isCorrect=true
        titleAnswer2.titleOfAnswer=inputAnswer2.value;
        titleAnswer2.isCorrect=false
        titleAnswer3.titleOfAnswer=inputAnswer3.value;
        titleAnswer3.isCorrect=false
        titleAnswer4.titleOfAnswer=inputAnswer4.value;
        titleAnswer4.isCorrect=false
        titleQuestion.listOfAnswers=listDataOfAnswer;
    }
    data.push(titleQuestion);
    console.log(data);
    // localStorage.setItem('quiz', JSON.stringify(listDataOfQuestion));
    saveData();
}
//  ===========    MAIN     =================================================


// 1 = Read from local storage
loadData();

// =================================Variable=====================================
let btnAdd= document.getElementById("btnAdd");
let inputQuestion=document.getElementById("question")
let inputAnswer1= document.getElementById("answer1");
let inputAnswer2= document.getElementById("answer2");
let inputAnswer3= document.getElementById("answer3");
let inputAnswer4= document.getElementById("answer4");
let listDataOfAnswer=[];
let titleQuestion={};
let titleAnswer1={};
let titleAnswer2={};
let titleAnswer3={};
let titleAnswer4={};
//
listDataOfAnswer.push(titleAnswer1);
listDataOfAnswer.push(titleAnswer4);
listDataOfAnswer.push(titleAnswer3);
listDataOfAnswer.push(titleAnswer2);

btnAdd.addEventListener("click",add);

displayQuiz();

