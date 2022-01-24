 // =============================== Create add btn =====================================
 let containerHome = document.querySelector('.container-home');
 let btnAdd = document.createElement('button');
 btnAdd.className = "btnAdd";
 btnAdd.textContent = "Create";
 containerHome.appendChild(btnAdd);
// <<<<<<< HEAD
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Create answer function>>>>>>>>>>>>>>>>>>>>>>>>>>
 function createQuiz() {
// =======
 let questionContainer = document.createElement('div');


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Create answer function>>>>>>>>>>>>>>>>>>>>>>>>>>
function createQuiz(e) {

// >>>>>>> 6d072eeb03601c5d6cfcf7253b5d56c021d4f0ef
     // ============================== Hold quiz container ============================
    //  let mainCon = document.createElement('div');
    //  mainCon.className = "mainCon";
     // ============================== Quiz tilt ======================================
     let quizTitle = document.createElement('div');
     quizTitle.className = "quizTitle";
     quizTitle.textContent = "Edit your quiz";
     // ============================== Question container ==============================
     let questionContainer = document.createElement('div');
     questionContainer.className = "questionContainer";
     // ----------------------------- create question input- ---------------------------
     var addQuestion = document.createElement('input');
     addQuestion.type = "text";
     addQuestion.placeholder = "Add your question here";
     addQuestion.className = "addQuestion";
       //  -----------------------------add pencil Btn-----------------------------
       let pencilBtn=document.createElement('button');
       pencilBtn.className='pencilBtn'
      //  -----------------------------add pencil images------------------------------
      let pencilImg = document.createElement('IMG');
      pencilImg.src = '../image/pencil.png';
      pencilImg.className = 'pencil';
       //  -----------------------------add trush Btn-----------------------------
       let trushBtn=document.createElement('button');
       trushBtn.className='trushBtn'
          //  -----------------------------add trush images---------------------------
      let trushImg = document.createElement('IMG');
      trushImg.src = '../image/trush.png';
      trushImg.className = 'trush';

     // ============================== Append place;=====================================
     questionContainer.appendChild(quizTitle);
     containerHome.appendChild(questionContainer);
     questionContainer.appendChild(addQuestion);
     trushBtn.appendChild(trushImg)
     pencilBtn.appendChild(pencilImg)
     questionContainer.appendChild(trushBtn);
     questionContainer.appendChild(pencilBtn);
     
        //  ================================= Add event to create new answer blank===========
    
}
createQuiz()
 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Create answer function>>>>>>>>>>>>>>>>>>>>>>>>>
 function createAnswer(){
    // ============================== Answer container ==============================
    let answerContainer = document.createElement('div');
    answerContainer.className = "answerContainer";
    //  -----------------------------create answer input----------------------------
    let addRadio = document.createElement('input');
    addRadio.type='radio'
    addRadio.className='radioBox'
    let addAnswer = document.createElement('input');
    addAnswer.type = "text";
    addAnswer.placeholder = "Add your answer here";
    addAnswer.className = "addAnswer";
    // ============================== Append place;=================================
    answerContainer.appendChild(addRadio)
    answerContainer.appendChild(addAnswer);
    containerHome.appendChild(answerContainer);
}
createAnswer()
let addAnswerBlank=document.querySelector('.pencilBtn');
addAnswerBlank.addEventListener('click',createAnswer);
//  ================================== Add event to create btn========================
 let addQ = document.querySelector(".btnAdd");
 addQ.addEventListener('click', createQuiz);







//  =============================kea=================================================
// display list of question 

// select function 
let displayForm= document.querySelector(".displayForm");
// change color button ===================================
function changeColorBtn(event) {
    let next = document.querySelector(".next");
    if(event.target.className==="radio"){
        next.style.background="blue";
        next.style.color="#fff"
    }
    
}


// date of object===========================
let data_Objects =[
    {question: "2.What is the most famous temple in thailand?",
    value1:"kea",
    value2: "cham",
    value3:"kea",
    value4: "cham",
    checked: "kea"
    },
    {question: "3.what your name?",
    value1:"kea1",
    value2: "cham1",
    value3:"kea1",
    value4: "cham1",
    checked: "kea1"
    },
    {question: "4.what your name?",
    value1:"kea2",
    value2: "cham2",
    value3:"kea2",
    value4: "cham2",
    checked: "kea2"

    },
    {question: "5.what your name?",
    value1:"kea3",
    value2: "cham",
    value3:"kea",
    value4: "cham",
        checked: "kea3"
    },
    {question: "6.what your name?",
    value1:"ke4",
    value2: "cham",
    value3:"kea",
    value4: "cham",
    checked: "kea4"
    },
    {question: "7.what your name?",
    value1:"ke4",
    value2: "cham",
    value3:"kea",
    value4: "cham",
    checked: "kea4"
    },
    {question: "8.what your name?",
    value1:"ke4",
    value2: "cham",
    value3:"kea",
    value4: "cham",
    checked: "kea4"
    },
    {question: "9.what your name?",
    value1:"ke4",
    value2: "cham",
    value3:"kea",
    value4: "cham",
    checked: "kea4"
    },
    {question: "10.what your name?",
    value1:"ke4",
    value2: "cham",
    value3:"kea",
    value4: "cham",
    checked: "kea4"
    }
]

let index = 0;
function changeValue(){
    let data = data_Objects[index];
    let questions = document.getElementById("question");
    let value1 = document.getElementById("first")
    let value2 = document.getElementById("second")
    let value3 = document.getElementById("third")
    let value4 = document.getElementById("fourth")
    questions.textContent = theavy.question;
    value1.textContent = data.value1;
    value2.textContent = data.value2;
    value3.textContent = data.value3;
    value4.textContent = data.value4;
    index++;
}

let btn = document.querySelector(".next");
btn.addEventListener("click",changeValue);
document.addEventListener("click",changeColorBtn);
console.log(changeColorBtn)