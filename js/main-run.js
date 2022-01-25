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
        question: "Q-8: what is the laraest and capital city of Indonesia?",
        listOfAnswer: [{
                answer: "A:  Jakata",
                isCorrect: true,
            },
            {
                answer: "B:  Surabaya",
                isCorrect: false,
            },
            {
                answer: "C:  Makasar",
                isCorrect: false,
            },
            {
                answer: "D:  Banduna",
                isCorrect: false,
            }
        ]
    }, {
        question: "Q-9: What is the reliaion of Brunei?",
        listOfAnswer: [{
                answer: "A:  Buddhist",
                isCorrect: false,
            },
            {
                answer: "B:  Christain",
                isCorrect: false,
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
        question: "Q-10: How many island in Philippines?",
        listOfAnswer: [{
                answer: "A:  7100",
                isCorrect: false,
            },
            {
                answer: "B:  6900",
                isCorrect: false,
            },
            {
                answer: "C:  7000",
                isCorrect: true,
            },
            {
                answer: "D:  6800",
                isCorrect: false,
            }
        ]
    }
];
// ============================ Call the form to append new element =============================
let mainContainerOFrun = document.querySelector('.mainContainer-run');
// ============================ loop to create list to store data on DOM =========================

// ------------------------------loop on question key to call question value & display points ---------------------
function displayQuiz() {
    for (let el of listOfQuestion) {
        let questionLine = document.createElement('div');
        questionLine.className = 'questionLine';
        let h3 = document.createElement('h3');
        h3.textContent = el['question'];
        let point = document.createElement('span');
        point.textContent = '10 points';
        point.className = 'points'
        questionLine.appendChild(point)
        questionLine.appendChild(h3);
        mainContainerOFrun.appendChild(questionLine);
        // ------------------------------loop on listOfAnswer key to call listOfAnswer value ---------------------
        for (let values of el['listOfAnswer']) {
            let ol = document.createElement('ol');
            ol.className = 'ol';
            let radio = document.createElement('input')
            radio.type = 'radio'
            radio.name = 'listOfAnswer'
            let li = document.createElement('li');
            ol.appendChild(radio)
            li.textContent = values['answer'];
            ol.appendChild(li);
            questionLine.appendChild(ol);
            mainContainerOFrun.appendChild(questionLine);
        }

    }
}
displayQuiz()
    // ============================ create submit btn ================================================
let submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'SUBMIT'
submit.id = 'submit';
mainContainerOFrun.appendChild(submit)
    // ============================ store listOfQuestion to localStorage ================================================
function saveData() {
    localStorage.setItem('quiz', JSON.stringify(listOfQuestion));
}
let newData = JSON.parse(localStorage.getItem('quiz'));