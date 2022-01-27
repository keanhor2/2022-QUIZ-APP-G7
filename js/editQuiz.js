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
//===========     All variables      ===============================================
let form = document.querySelector('form');
//=====function to remove each of Question==========================================
function removeQuestion(event) {
    event.preventDefault();
    if(event.target.className === 'removeBtn'){
        event.target.parentElement.remove();
    }
}
// =====function to display quiz====================================================
function displayQuis(){
    
// ===== loop to create list to store data o DOM ===============================
    for (var questions of listOfQuestions) {
        let numberOfQuestion =listOfQuestions.indexOf(questions)+1;
        console.log(numberOfQuestion);
        let titleOfQuestion = document.createElement('h3');
        titleOfQuestion.className = "question";
        //==============================================================================
        var pOfQuestion = document.createElement('p');
        pOfQuestion.className = "pOfQuestion";
        pOfQuestion.textContent =numberOfQuestion+ questions['titleOfQuestion'];
        titleOfQuestion.appendChild(pOfQuestion);
        form.appendChild(titleOfQuestion);
        let editBtn = document.createElement('img');
        editBtn.src = "../image/pencil.png";
        editBtn.className = "editBtn";
        titleOfQuestion.appendChild(editBtn);       
        let removeBtn = document.createElement('img');
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
    // ======================== To know which one is correct ==================================
                if(values['isCorrect']===true){
                    let tickImg = document.createElement('img');
                    tickImg.className = "tickImg";
                    tickImg.src = "../image/tick.png";
                    ol.appendChild(tickImg);
                    ol.style.display = "image/tick.png";
                    }
                    removeBtn.addEventListener('click',removeQuestion);
                }
            }
}
displayQuis();
// =================================add question=====================================
let btnAdd= document.getElementById("btnAdd");
let inputQuestion=document.getElementById("question")
let inputAnswer= document.getElementById("answer");
let image=document.getElementById("img");
let listQuestion={};
let listAnswer={};
// let idOfAnswer=1;
function add(event){
    if (event.target.id==="btnAdd"){
        listQuestion["titleOfQuesion"]=inputQuestion.value;
        listAnswer["titleOfAnswer"]=inputAnswer.value;
        // idOfAnswer+=1
        console.log(listAnswer);
        console.log(listQuestion);
    }
}
btnAdd.addEventListener("click",add);
