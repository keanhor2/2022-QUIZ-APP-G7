let listOfQuestions = [{
    titleOfQuestion: " How many provinces in Cambodia?Capital city?",
    listOfAnswers: [{
            titleOfAnswer: " A: 24 & Phnom Penh",
            isCorrect: true,
        },
        {
            titleOfAnswer: " B: 25 & Kampong Thum",
            isCorrect: false,
        },
        {
            titleOfAnswer: " C: 24 & Kandal",
            isCorrect: false,
        },
        {
            titleOfAnswer: " D: 25 & Siem Reap",
            isCorrect: false,
        }
    ]
},
{
    titleOfQuestion: " what is the most famous temple in Thailand?",
    listOfAnswers: [{
        titleOfAnswer: " A: Wat Pho",
            isCorrect: false,
        },
        {
            titleOfAnswer: " B: Wat Arun",
            isCorrect: false,
        },
        {
            titleOfAnswer: " C: White temple",
            isCorrect: true,
        },
        {
            titleOfAnswer: " D: Blue temple",
            isCorrect: false,
        }
    ]
},
{
    titleOfQuestion: " what is the independence's day of Vietnam?",
    listOfAnswers: [{
        titleOfAnswer: " A: 1940",
            isCorrect: false,
        },
        {
            titleOfAnswer: " B: 1845",
            isCorrect: false,
        },
        {
            titleOfAnswer: " C: 1945",
            isCorrect: true,
        },
        {
            titleOfAnswer: " D: 1955",
            isCorrect: false,
        }
    ]
},
{
    titleOfQuestion: " How much arable land of Lao? (square kilometer)",
    listOfAnswers: [{
        titleOfAnswer: " A: 236800",
            isCorrect: true,
        },
        {
            titleOfAnswer: " B: 330179",
            isCorrect: false,
        },
        {
            titleOfAnswer: " C: 235800",
            isCorrect: false,
        },
        {
            titleOfAnswer: " D: 210000",
            isCorrect: false,
        }
    ]
},
{
    titleOfQuestion: " when did Myanmar joined ASEAN?",
    listOfAnswers: [{
        titleOfAnswer: " A: 23/6/1997",
            isCorrect: false,
        },
        {
            titleOfAnswer: " B: 23/7/1997",
            isCorrect: true,
        },
        {
            titleOfAnswer: " C: 22/7/1997",
            isCorrect: false,
        },
        {
            titleOfAnswer: " D: 23/8/1997",
            isCorrect: false,
        }
    ]
},
{
    titleOfQuestion: " How many seasons in Singapore?",
    listOfAnswers: [{
        titleOfAnswer: " A: 2",
            isCorrect: true,
        },
        {
            titleOfAnswer: " B: 4",
            isCorrect: false,
        },
        {
            titleOfAnswer: " C: 3",
            isCorrect: false,
        },
        {
            titleOfAnswer: " D: 1",
            isCorrect: false,
        }
    ]
},
{
    titleOfQuestion: " What country did Malaysia get independence from?",
    listOfAnswers: [{
        titleOfAnswer: " A: France",
            isCorrect: false,
        },
        {
            titleOfAnswer: " B: USA",
            isCorrect: false,
        },
        {
            titleOfAnswer: " C: Span",
            isCorrect: false,
        },
        {
            titleOfAnswer: " D: English",
            isCorrect: true,
        }
    ]
},
{
    titleOfQuestion: " Where did USA poeple come from?",
    listOfAnswers: [{
        titleOfAnswer: "A:  Cambodia",
            isCorrect: true,
        },
        {
            titleOfAnswer: "B:  Korea",
            isCorrect: true,
        },
        {
            titleOfAnswer: "C:  China",
            isCorrect: true,
        },
        {
            titleOfAnswer: "D:  Erupe countries",
            isCorrect: true,
        }
    ]
},
{
    titleOfQuestion: " What does Cambodian religion?",
    listOfAnswers: [{
        titleOfAnswer: "A:  Buddhist",
            isCorrect: true,
        },
        {
            titleOfAnswer: "B:  Christain",
            isCorrect: true,
        },
        {
            titleOfAnswer: "C:  Chatolic",
            isCorrect: false,
        },
        {
            titleOfAnswer: "D:  Sunni Islam",
            isCorrect: true,
        }
    ]
}, 
{
    titleOfQuestion: " There are many subjects in PNC training, what are they?",
    listOfAnswers: [{
        titleOfAnswer: "A:  Python",
            isCorrect: true,
        },
        {
            titleOfAnswer: "B:  JavaScript",
            isCorrect: true,
        },
        {
            titleOfAnswer: "C:  Singing",
            isCorrect: false,
        },
        {
            titleOfAnswer: "D: songs writing",
            isCorrect: false,
        }
    ]
}
];
    
//===========     All variables      ==============================================
let form = document.querySelector('form');
// =====function to display quiz===================================================
function displayQuiz(){
    
// ===== loop to create list to store data o DOM ==================================
    for (var questions of listOfQuestions) {

        let numberOfQuestion =listOfQuestions.indexOf(questions)+1;
        var titleOfQuestion = document.createElement('h3');
        titleOfQuestion.className = "question";
        //=========================================================================
        var pOfQuestion = document.createElement('p');
        pOfQuestion.className = "pOfQuestion";
        pOfQuestion.textContent =numberOfQuestion+ questions['titleOfQuestion'];
        titleOfQuestion.appendChild(pOfQuestion);
        form.appendChild(titleOfQuestion);
        let editBtn = document.createElement('img');
        editBtn.src = "../image/pencil.png";
        editBtn.className = "editBtn";
        titleOfQuestion.appendChild(editBtn);       
        var removeBtn = document.createElement('img');
        removeBtn.src = "../image/trush.png";
        removeBtn.className = "removeBtn";
        titleOfQuestion.appendChild(removeBtn); 
        
        for (let values of questions['listOfAnswers']) {
            let ol = document.createElement('ol');
            ol.className = 'ol-edit';
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
            
                
    // ======================== To know which one is correct ======================
                if(values['isCorrect']===true){
                    let tickImg = document.createElement('img');
                    tickImg.className = "tickImg";
                    tickImg.src = "../image/tick.png";
                    ol.appendChild(tickImg);
                    ol.style.display = "image/tick.png";
                 }
        }
    }
}
// displayQuis();
// =================================Variable=====================================
let btnAdd= document.getElementById("btnAdd");
let inputQuestion=document.getElementById("question")
let inputAnswer1= document.getElementById("answer1");
let inputAnswer2= document.getElementById("answer2");
let inputAnswer3= document.getElementById("answer3");
let inputAnswer4= document.getElementById("answer4");
let data=[];
let listDataOfAnswer=[];
let titleQuestion={};
let titleAnswer1={};
let titleAnswer2={};
let titleAnswer3={};
let titleAnswer4={};
//
// Function =================================
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
    listDataOfAnswer.push(titleAnswer1);
    listDataOfAnswer.push(titleAnswer4);
    listDataOfAnswer.push(titleAnswer3);
    listDataOfAnswer.push(titleAnswer2);
    console.log(data);
    // localStorage.setItem('quiz', JSON.stringify(listDataOfQuestion));
}
btnAdd.addEventListener("click",add);
displayQuiz();
