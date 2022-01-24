 // =============================== Create add btn =====================================
 let containerHome = document.querySelector('.container-home');
 let btnAdd = document.createElement('button');
 btnAdd.className = "btnAdd";
 btnAdd.textContent = "Create";
 containerHome.appendChild(btnAdd);
 
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Create answer function>>>>>>>>>>>>>>>>>>>>>>>>>>
function createQuiz(e) {
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
    // containerHome.appendChild(answerContainer);
    questionContainer.appendChild(answerContainer);
}

createAnswer()
 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Create answer function>>>>>>>>>>>>>>>>>>>>>>>>>
    let addAnswerBlank=document.querySelector('.pencilBtn');
    addAnswerBlank.addEventListener('click',createAnswer);
//  ================================== Add event to create btn========================
 let addQ = document.querySelector(".btnAdd");
 addQ.addEventListener('click', createQuiz);
