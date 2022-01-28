// ====================================================== Set data to object ======================================
let listOfQuestion = [{
        question: "Q-1: How many provinces in Cambodia? Capital city?",
        listOfAnswer: [{
                titleOfAnswer: "A:  24 Phnom Penh",
                isCorrect: true,
            },
            {
                titleOfAnswer: "B:  25 Kampona Thum",
                isCorrect: false,
            },
            {
                titleOfAnswer: "C:  24 Kandal",
                isCorrect: false,
            },
            {
                titleOfAnswer: "D:  25 Siem Reap",
                isCorrect: false,
            }
        ]
    },
    {
        question: "Q-2: what is the most famous temple in Thailand?",
        listOfAnswer: [{
                titleOfAnswer: "A:  Wat Pho",
                isCorrect: false,
            },
            {
                titleOfAnswer: "B:  Wat Arun",
                isCorrect: false,
            },
            {
                titleOfAnswer: "C:  White temple",
                isCorrect: true,
            },
            {
                titleOfAnswer: "D:  Blue temple",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-3: what is the independence's day of Vietnam?",
        listOfAnswer: [{
                titleOfAnswer: "A:  1940",
                isCorrect: false,
            },
            {
                titleOfAnswer: "B:  1845",
                isCorrect: false,
            },
            {
                titleOfAnswer: "C:  1945",
                isCorrect: true,
            },
            {
                titleOfAnswer: "D:  1955",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-4: How much arable land of Lao?",
        listOfAnswer: [{
                titleOfAnswer: "A:  236800",
                isCorrect: true,
            },
            {
                titleOfAnswer: "B:  330179",
                isCorrect: false,
            },
            {
                titleOfAnswer: "C:  235800",
                isCorrect: false,
            },
            {
                titleOfAnswer: "D:  210000",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-5: when did Myanmar joined ASEAN?",
        listOfAnswer: [{
                titleOfAnswer: "A:   23/6/1997",
                isCorrect: false,
            },
            {
                titleOfAnswer: "B:  23/7/1997",
                isCorrect: true,
            },
            {
                titleOfAnswer: "C:  22/7/1997",
                isCorrect: false,
            },
            {
                titleOfAnswer: "D:  23/8/1997",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-6: How many seasons in Sinaapore?",
        listOfAnswer: [{
                titleOfAnswer: "A:  2",
                isCorrect: true,
            },
            {
                titleOfAnswer: "B:  4",
                isCorrect: false,
            },
            {
                titleOfAnswer: "C:  3",
                isCorrect: false,
            },
            {
                titleOfAnswer: "D:  1",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-7: What country did Malaysia aet independence from?",
        listOfAnswer: [{
                titleOfAnswer: "A:  France",
                isCorrect: false,
            },
            {
                titleOfAnswer: "B:  USA",
                isCorrect: false,
            },
            {
                titleOfAnswer: "C:   Span",
                isCorrect: false,
            },
            {
                titleOfAnswer: "D:  Enalish",
                isCorrect: true,
            }
        ]
    }, {
        question: "Q-8: Where did USA poeple come from?",
        listOfAnswer: [{
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
    }, {
        question: "Q-9: What does Cambodian religion?",
        listOfAnswer: [{
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
    }, {
        question: "Q-10: There are many subjects in PNC training, what are they?",
        listOfAnswer: [{
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

// ===================================================== Call elements =============================================
let mainContainerOFrun = document.querySelector('.mainContainer-run');
let submit = document.querySelector('#submit');
let points = document.querySelectorAll('.point');
let finishQ = document.querySelector(".finishQuizPart");
let button = document.querySelector('.button');



// ======================================================= Variable==================================================
let total = 0;
let inputTypeClass = 0;
var storeIscorrectVal = [];
let indexOfCheck = 0;
let countChecked = 0;


//* ======================================================= function part ============================================*

// ------------------------------loop on question key to call question value & display points ------------------------
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
            // ------------------------------loop on listOfAnswer key to call listOfAnswer value ----
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

            let li = document.createElement('li');

            storeIscorrectVal.push(values['isCorrect'])

            ol.appendChild(inputType)
            li.textContent = values['titleOfAnswer'];
            ol.appendChild(li);
            if (values['isCorrect'] === true) {
                let trueLi = document.createElement('li');
                trueLi.className = 'trueLi'
                let tickImg = document.createElement('img');
                tickImg.src = "../image/tick.png";
                trueLi.append(tickImg)
                ol.appendChild(trueLi);
            }
            questionLine.appendChild(ol);
            mainContainerOFrun.appendChild(questionLine);
        }

    }
    // -- -- -- -- -- -- -- -- -- -- -- call hideFinish part function------- ----------------------
    hideFinishPart()
}
displayQuiz(storeIscorrectVal);

// ================================================ function to check user click =====================================
function checkResult() {
    let storeCheckIndex = [];
    let checktypeOfInputs = document.getElementsByTagName('input');
    for (let i = 0; i < checktypeOfInputs.length; i++) {
        if (checktypeOfInputs[i].checked && storeIscorrectVal[i] === true) {
            total += 10;
            for (scores of points) {
                scores.textContent = total;
            }
        };
        if (checktypeOfInputs[i].checked) {
            if (storeCheckIndex.indexOf(i) <= -1) {
                countChecked += 1;
                storeCheckIndex.push(i);
            }
            // for (let totalOfClick of storeCheckIndex) {

            // }
            console.log(storeCheckIndex)
        }
    }

    // -------------------------- hide display quiz container annd show finish part container-------------------------
    if (countChecked < 10) {
        alert('You must titleOfAnswer all question')
    } else {
        finishQ.style.display = 'block';
        submit.style.display = 'none'
        mainContainerOFrun.style.display = 'none'
    }

}

// ============================================= function to check all box had  all checked ==========================

// ================================================= function to hide finish part container===========================
function hideFinishPart() {
    finishQ.style.display = 'none';
}


// ============================ ===================== call data from localStorage=============================

// let newData = JSON.parse(localStorage.getItem('quizz'));
// console.log(newData);


// ====================================================== Add event listener ===========================================
submit.addEventListener('click', checkResult);

// ------------------------------------------------- recall displayQuiz(storeIscorrectVal) function---------------------
button.addEventListener('click', function(e) {
    if (e.target.className === 'button') {
        hideFinishPart()
        submit.style.display = 'none'
        mainContainerOFrun.style.display = 'block'
        showCorrectAnswer()
    }
});
let checkedSign = document.querySelectorAll('.trueLi');

function showCorrectAnswer() {
    for (let ch of checkedSign) {
        ch.style.display = 'block'
    }
}