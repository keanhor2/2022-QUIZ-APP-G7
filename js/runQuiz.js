
// seclect || call element in HTML
let newDatas = JSON.parse(localStorage.getItem('quiz'));
let questions = document.getElementById("question");
let answer1=document.getElementById("AS1");
let answer2=document.getElementById("AS2");
let answer3=document.getElementById("AS3");
let answer4=document.getElementById("AS4");
let index = 0
function getQuestionAndAnswer(event) {
    event.preventDefault();
    questions.textContent = (newDatas[index].question);
    index += 1;
}
for (let newData of newDatas){

}


let btnNext = document.querySelector("#btnNext")
btnNext.addEventListener("click", getQuestionAndAnswer);
