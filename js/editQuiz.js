let data = [
    {
        question: "How many provinces in Cambodia?Capital city?",
        answer: [
            {
                a: "24 Phnom Penh", isCorrect: true
            },
            {
                b: "25 Kampong Thum", isCorrect: false
            },
            {
                c: "24 Kandal", isCorrect: false
            },
            {
                d: "25 Siem Reap", isCorrect: false
            }
        ]
    },
    {
        question: "what is the most famous temple in Thailand?",
        answer: [
            {
                a: "Wat Pho", isCorrect: false,
            },
            {
                b: "Wat Arun", isCorrect: false,
            },
            {
                c: "White temple", isCorrect: true,
            },
            {
                d: "Blue temple", isCorrect: false,
            }
        ]
    },
    {
        question: "what is the independence's day of Vietnam?",
        answer: [
            {
                a: "1940", isCorrect: false,
            },
            {
                b: "1845", isCorrect: false,
            },
            {
                c: "1945", isCorrect: true,
            },
            {
                d: "1955", isCorrect: false,
            }
        ]
    },
    {
        question: "How much arable land of Lao?",
        answer: [
            {
                a: "236800", isCorrect: true,
            },
            {
                b: "330179", isCorrect:false,
            },
            {
                c: "235800", isCorrect: false,
            },
            {
                d: "210000", isCorrect: false,
            }
        ]
    },
    {
        question: "when did Myanmar joined ASEAN?",
        answer: [
            {
                a: "23/6/1997", isCorrect: false,
            },
            {
                b: "23/7/1997", isCorrect: true,
            },
            {
                c: "22/7/1997", isCorrect:false,
            },
            {
                d: "23/8/1997", isCorrect: false,
            }
        ]
    },
    {
        question: "How many seasons in Singapore?",
        answer: [
            {
                a: "2", isCorrect: true,
            },
            {
                b: "4", isCorrect: false,
            },
            {
                c: "3", isCorrect: false,
            },
            {
                d: "1", isCorrect: false,
            }
        ]
    },
    {
        question: "What country did Malaysia get independence from?",
        answer: [
            {
                a: "France", isCorrect: false,
            },
            {
                b: "USA", isCorrect: false,
            },
            {
                c: "Span", isCorrect: false,
            },
            {
                d: "English", isCorrect: true,
            }
        ]
    },
    {
        question: "what is the largest and capital city of Indonesia?",
        answer: [
            {
                a: "Jakata", isCorrect: true,
            },
            {
                b: "Surabaya", isCorrect: false,
            },
            {
                c: "Makasar", isCorrect: false,
            },
            {
                d: "Bandung", isCorrect: false,
            }
        ]
    },
    {
        question: "What is the religion of Brunei?",
        answer: [
            {
                a: "Buddhist", isCorrect: false,
            },
            {
                b: "Christain", isCorrect:false,
            },
            {
                c: "Chatolic", isCorrect: false,
            },
            {
                d: "Sunni Islam", isCorrect: true,
            }
        ]
    },
    {
        question: "How many island in Philippines?",
        answer: [
            {
                a: "7100", isCorrect: false,
            },
            {
                b: "6900", isCorrect: false,
            },
            {
                c: "7000", isCorrect: true,
            },
            {
                d: "6800", isCorrect: false,zzzzzzzzzzz
            }
        ]
    }
];

localStorage.setItem('quiz', JSON.stringify(data));
let newData = JSON.parse(localStorage.getItem('quiz'));
console.log(newData);
