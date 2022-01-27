let listOfQuestions = [{
    question: "Q-1: How many provinces in Cambodia?Capital city?",
    listOfAnswers: [{
            answer: " A: 24 & Phnom Penh",
            isCorrect: true,
        },
        {
            answer: " B: 25 & Kampong Thum",
            isCorrect: false,
        },
        {
            answer: " C: 24 & Kandal",
            isCorrect: false,
        },
        {
            answer: " D: 25 & Siem Reap",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-2: what is the most famous temple in Thailand?",
    listOfAnswers: [{
        answer: " A: Wat Pho",
            isCorrect: false,
        },
        {
            answer: " B: Wat Arun",
            isCorrect: false,
        },
        {
            answer: " C: White temple",
            isCorrect: true,
        },
        {
            answer: " D: Blue temple",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-3: what is the independence's day of Vietnam?",
    listOfAnswers: [{
        answer: " A: 1940",
            isCorrect: false,
        },
        {
            answer: " B: 1845",
            isCorrect: false,
        },
        {
            answer: " C: 1945",
            isCorrect: true,
        },
        {
            answer: " D: 1955",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-4: How much arable land of Lao? (square kilometer)",
    listOfAnswers: [{
        answer: " A: 236800",
            isCorrect: true,
        },
        {
            answer: " B: 330179",
            isCorrect: false,
        },
        {
            answer: " C: 235800",
            isCorrect: false,
        },
        {
            answer: " D: 210000",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-5: when did Myanmar joined ASEAN?",
    listOfAnswers: [{
        answer: " A: 23/6/1997",
            isCorrect: false,
        },
        {
            answer: " B: 23/7/1997",
            isCorrect: true,
        },
        {
            answer: " C: 22/7/1997",
            isCorrect: false,
        },
        {
            answer: " D: 23/8/1997",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-6: How many seasons in Singapore?",
    listOfAnswers: [{
        answer: " A: 2",
            isCorrect: true,
        },
        {
            answer: " B: 4",
            isCorrect: false,
        },
        {
            answer: " C: 3",
            isCorrect: false,
        },
        {
            answer: " D: 1",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-7: What country did Malaysia get independence from?",
    listOfAnswers: [{
        answer: " A: France",
            isCorrect: false,
        },
        {
            answer: " B: USA",
            isCorrect: false,
        },
        {
            answer: " C: Span",
            isCorrect: false,
        },
        {
            answer: " D: English",
            isCorrect: true,
        }
    ]
},
{
    question: "Q-8: what is the largest and capital city of Indonesia?",
    listOfAnswers: [{
        answer: " A: Jakata",
            isCorrect: true,
        },
        {
            answer: " B: Surabaya",
            isCorrect: false,
        },
        {
            answer: " C: Makasar",
            isCorrect: false,
        },
        {
            answer: " D: Banduna",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-9: What is the religion of Brunei?",
    listOfAnswers: [{
        answer: " A: Buddhist",
            isCorrect: false,
        },
        {
            answer: " B: Christain",
            isCorrect: false,
        },
        {
            answer: " C: Chatolic",
            isCorrect: false,
        },
        {
            answer: " D: Sunni Islam",
            isCorrect: true,
        }
    ]
},
{
    question: "Q-10: How many islands in Philippines?",
    listOfAnswers: [{
        answer: " A: 7100",
            isCorrect: false,
        },
        {
            answer: " B: 6900",
            isCorrect: false,
        },
        {
            answer: " C: 7000",
            isCorrect: true,
        },
        {
            answer: " D: 6800",
            isCorrect: false,
        }
    ]
}
];
// >>>>>>>>>>>> All functions in here<<<<<<<<<<<<<<<<<<<<<<<

     //=====function to remove question=====
        function removeQuestion(event) {
            event.preventDefault();
            if(event.target.className === 'removeBtn'){
            event.target.parentElement.remove();
        }
        }
        

        

//>>>>>>>> To get datas from local storages <<<<<<<
localStorage.setItem('quiz', JSON.stringify(listOfQuestions));
let newData = JSON.parse(localStorage.getItem('quiz'));
let body = document.querySelector('body');
//>>>>>>>>>>>To create edit container <<<<<<<<<<<<
let editCon = document.createElement('div');
editCon.className = "edit-con";
body.appendChild(editCon);
//>>>>> to create form and append into edit container <<<<<<
const form = document.createElement('form');
form.id = "idForm";
editCon.appendChild(form);

let createBtn = document.createElement('button');
createBtn.className = "createBtn";
createBtn.textContent = "Create";
editCon.appendChild(createBtn);



 // ===== loop to create list to store data o DOM =====
for (let questions of listOfQuestions) {
    let question = document.createElement('h3');
    question.className = "question";
    let pOfQuestion = document.createElement('p');
    pOfQuestion.className = "pOfQuestion";
    pOfQuestion.textContent = questions['question'];
    question.appendChild(pOfQuestion);
    form.appendChild(question);

    let editBtn = document.createElement('img');
    editBtn.src = "/image/pencil.png";
    editBtn.className = "editBtn";
    question.appendChild(editBtn);       
    let removeBtn = document.createElement('img');
    removeBtn.src = "/image/trush.png";
    removeBtn.className = "removeBtn";
    question.appendChild(removeBtn);        
    
    for (let values of questions['listOfAnswers']) {
        let ol = document.createElement('ol');
        ol.className = 'ol-edit';
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = "answer";
        radio.className = "radio";
        let li = document.createElement('li');
        li.className = "li-edit";
        li.textContent = values['answer'];
        ol.appendChild(radio);
        ol.appendChild(li);
        question.appendChild(ol);    
// >>>>>>>> To know which one is correct<<<<<<
        if(values['isCorrect']===true){
            let tickImg = document.createElement('img');
            tickImg.className = "tickImg";
            tickImg.src = "/image/tick.png";
            ol.appendChild(tickImg);
            ol.style.display = "/image/tick.png";
        }
        removeBtn.addEventListener('click',removeQuestion);
        console.log(form);

    }
    
}
