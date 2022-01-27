// ============================ Set data to object ==============================================
let listOfQuestion = [{
        question: "Q-1: How many provinces in Cambodia? Capital city?",
        listOfAnswer: [{
                answer: "A:  24 Phnom Penh",
                isCorrect: true,
            },
            {
                answer: "B:  25 Kampona Thum",
                isCorrect: false,
            },
            {
                answer: "C:  24 Kandal",
                isCorrect: false,
            },
            {
                answer: "D:  25 Siem Reap",
                isCorrect: false,
            }
        ]
    },
    {
        question: "Q-2: what is the most famous temple in Thailand?",
        listOfAnswer: [{
                answer: "A:  Wat Pho",
                isCorrect: false,
            },
            {
                answer: "B:  Wat Arun",
                isCorrect: false,
            },
            {
                answer: "C:  White temple",
                isCorrect: true,
            },
            {
                answer: "D:  Blue temple",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-3: what is the independence's day of Vietnam?",
        listOfAnswer: [{
                answer: "A:  1940",
                isCorrect: false,
            },
            {
                answer: "B:  1845",
                isCorrect: false,
            },
            {
                answer: "C:  1945",
                isCorrect: true,
            },
            {
                answer: "D:  1955",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-4: How much arable land of Lao?",
        listOfAnswer: [{
                answer: "A:  236800",
                isCorrect: true,
            },
            {
                answer: "B:  330179",
                isCorrect: false,
            },
            {
                answer: "C:  235800",
                isCorrect: false,
            },
            {
                answer: "D:  210000",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-5: when did Myanmar joined ASEAN?",
        listOfAnswer: [{
                answer: "A:   23/6/1997",
                isCorrect: false,
            },
            {
                answer: "B:  23/7/1997",
                isCorrect: true,
            },
            {
                answer: "C:  22/7/1997",
                isCorrect: false,
            },
            {
                answer: "D:  23/8/1997",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-6: How many seasons in Sinaapore?",
        listOfAnswer: [{
                answer: "A:  2",
                isCorrect: true,
            },
            {
                answer: "B:  4",
                isCorrect: false,
            },
            {
                answer: "C:  3",
                isCorrect: false,
            },
            {
                answer: "D:  1",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-7: What country did Malaysia aet independence from?",
        listOfAnswer: [{
                answer: "A:  France",
                isCorrect: false,
            },
            {
                answer: "B:  USA",
                isCorrect: false,
            },
            {
                answer: "C:   Span",
                isCorrect: false,
            },
            {
                answer: "D:  Enalish",
                isCorrect: true,
            }
        ]
    }, {
        question: "Q-8: Where did USA poeple come from?",
        listOfAnswer: [{
                answer: "A:  Cambodia",
                isCorrect: true,
            },
            {
                answer: "B:  Korea",
                isCorrect: true,
            },
            {
                answer: "C:  China",
                isCorrect: true,
            },
            {
                answer: "D:  Erupe countries",
                isCorrect: true,
            }
        ]
    }, {
        question: "Q-9: What does Cambodian religion?",
        listOfAnswer: [{
                answer: "A:  Buddhist",
                isCorrect: true,
            },
            {
                answer: "B:  Christain",
                isCorrect: true,
            },
            {
                answer: "C:  Chatolic",
                isCorrect: false,
            },
            {
                answer: "D:  Sunni Islam",
                isCorrect: true,
            }
        ]
    }, {
        question: "Q-10: There are many subjects in PNC training, what are they?",
        listOfAnswer: [{
                answer: "A:  Python",
                isCorrect: true,
            },
            {
                answer: "B:  JavaScript",
                isCorrect: true,
            },
            {
                answer: "C:  Singing",
                isCorrect: false,
            },
            {
                answer: "D: songs writing",
                isCorrect: false,
            }
        ]
    }
];
// ============================ Call the form to append new element =============================
let mainContainerOFrun = document.querySelector('.mainContainer-run');
// ============================ loop to create list to store data on DOM =========================
let total = 0;
let inputTypeClass = 0;
var storeIscorrectVal = [];
// ------------------------------loop on question key to call question value & display points ---------------------
function displayQuiz(storeIscorrectVal) {
    for (let elements of listOfQuestion) {
        let questionLine = document.createElement('div');
        questionLine.className = 'questionLine';
        let h3 = document.createElement('h3');
        h3.textContent = elements['question'];
        let point = document.createElement('span');
        point.textContent = '10 points';
        point.className = 'points'
        questionLine.appendChild(point)
        questionLine.appendChild(h3);
        mainContainerOFrun.appendChild(questionLine);
        inputTypeClass += 1
            // ------------------------------loop on listOfAnswer key to call listOfAnswer value ---------------------
        for (let values of elements['listOfAnswer']) {

            let ol = document.createElement('ol');
            ol.className = 'ol';
            let inputType = document.createElement('input')
            if (inputTypeClass < 8) {
                inputType.type = 'radio'
            } else {
                inputType.type = 'checkbox'
            }
            inputType.className = 'inputTypes'
            inputType.name = 'listOfAnswer' + inputTypeClass
            storeIscorrectVal.push(values['isCorrect'])

            let li = document.createElement('li');
            ol.appendChild(inputType)
            li.textContent = values['answer'];
            ol.appendChild(li);
            questionLine.appendChild(ol);
            mainContainerOFrun.appendChild(questionLine);
            // -- -- -- -- -- -- -- -- -- -- -- inputType have check or not ----------------------
        }

    }
}
displayQuiz(storeIscorrectVal);
// ============================ function to check user click =====================================
function checkResult() {
    let checktypeOfInputs = document.getElementsByTagName('input');
    let eachPoint = document.getElementById('points');
    for (let i = 0; i < checktypeOfInputs.length; i++) {
        if (checktypeOfInputs[i].checked && storeIscorrectVal[i] === true) {
            total += 10;
            poits.textContent = total;
            poits.style.color = 'rgb(0, 153, 255)'
        }
    }
}
let poits = document.getElementById('score');
// ============================ create submit btn ================================================
let submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'SUBMIT'
submit.id = 'submit';
submit.addEventListener('click', checkResult)
mainContainerOFrun.appendChild(submit)
    // ============================ store listOfQuestion to localStorage =========================
function saveData() {
    localStorage.setItem('quiz', JSON.stringify(listOfQuestion));
}
let newData = JSON.parse(localStorage.getItem('quiz'));

// ================================= Variale  ====================================================
// let total = 0;