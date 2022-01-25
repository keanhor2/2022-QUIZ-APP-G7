let datas = [{
    question: "Q-1: How many provinces in Cambodia?Capital city?",
    answer: [{
            a: " A: 24 Phnom Penh",
            isCorrect: true,
        },
        {
            a: " B: 25 Kampong Thum",
            isCorrect: false,
        },
        {
            a: " C: 24 Kandal",
            isCorrect: false,
        },
        {
            a: " D: 25 Siem Reap",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-2: what is the most famous temple in Thailand?",
    answer: [{
            a: " A: Wat Pho",
            isCorrect: false,
        },
        {
            a: " B: Wat Arun",
            isCorrect: false,
        },
        {
            a: " C: White temple",
            isCorrect: true,
        },
        {
            a: " D: Blue temple",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-3: what is the independence's day of Vietnam?",
    answer: [{
            a: " A: 1940",
            isCorrect: false,
        },
        {
            a: " B: 1845",
            isCorrect: false,
        },
        {
            a: " C: 1945",
            isCorrect: true,
        },
        {
            a: " D: 1955",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-4: How much arable land of Lao?",
    answer: [{
            a: " A: 236800",
            isCorrect: true,
        },
        {
            a: " B: 330179",
            isCorrect: false,
        },
        {
            a: " C: 235800",
            isCorrect: false,
        },
        {
            a: " D: 210000",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-5: when did Myanmar joined ASEAN?",
    answer: [{
            a: " A: 23/6/1997",
            isCorrect: false,
        },
        {
            a: " B: 23/7/1997",
            isCorrect: true,
        },
        {
            a: " C: 22/7/1997",
            isCorrect: false,
        },
        {
            a: " D: 23/8/1997",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-6: How many seasons in Sinaapore?",
    answer: [{
            a: " A: 2",
            isCorrect: true,
        },
        {
            a: " B: 4",
            isCorrect: false,
        },
        {
            a: " C: 3",
            isCorrect: false,
        },
        {
            a: " D: 1",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-7: What country did Malaysia aet independence from?",
    answer: [{
            a: " A: France",
            isCorrect: false,
        },
        {
            a: " B: USA",
            isCorrect: false,
        },
        {
            a: " C: Span",
            isCorrect: false,
        },
        {
            a: " D: Enalish",
            isCorrect: true,
        }
    ]
},
{
    question: "Q-8: what is the laraest and capital city of Indonesia?",
    answer: [{
            a: " A: Jakata",
            isCorrect: true,
        },
        {
            a: " B: Surabaya",
            isCorrect: false,
        },
        {
            a: " C: Makasar",
            isCorrect: false,
        },
        {
            a: " D: Banduna",
            isCorrect: false,
        }
    ]
},
{
    question: "Q-9: What is the reliaion of Brunei?",
    answer: [{
            a: " A: Buddhist",
            isCorrect: false,
        },
        {
            a: " B: Christain",
            isCorrect: false,
        },
        {
            a: " C: Chatolic",
            isCorrect: false,
        },
        {
            a: " D: Sunni Islam",
            isCorrect: true,
        }
    ]
},
{
    question: "Q-10: How many island in Philippines?",
    answer: [{
            a: " A: 7100",
            isCorrect: false,
        },
        {
            a: " B: 6900",
            isCorrect: false,
        },
        {
            a: " C: 7000",
            isCorrect: true,
        },
        {
            a: " D: 6800",
            isCorrect: false,
        }
    ]
}
];


//   To get datas from local storages
localStorage.setItem('quiz', JSON.stringify(datas));
let newData = JSON.parse(localStorage.getItem('quiz'));

let body = document.querySelector('body');
//    To create edit container 
let editCon = document.createElement('div');
editCon.className = "edit-con";
body.appendChild(editCon);

let form = document.createElement('form');
form.className = "form";
editCon.appendChild(form);
console.log(form);
// ============================ loop to create list to store data o DOM =======================
for (let el of datas) {
    let quest = document.createElement('h3');
    quest.className = "question";
    quest.textContent = el['question'];
    form.appendChild(quest);
    for (let values of el['answer']) {
        let ol = document.createElement('ol');
        ol.className = 'ol';
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.className = "radio";
        let li = document.createElement('li');
        li.textContent = values['a'];
        ol.appendChild(radio);
        ol.appendChild(li);
        form.appendChild(ol);
        // To know which one is correct
        if(values['isCorrect']==true){
            li.textContent +=" ==> True";
            ol.style.backgroundColor = "yellowgreen";
        }

    }
}