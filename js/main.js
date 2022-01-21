let containerHome = document.querySelector('.container-home');
// To make fake list of questions
let listOfQuestions = document.createElement('div');
listOfQuestions.className = "edit-quiz";
containerHome.appendChild(listOfQuestions);
// To create button add
let btnAdd = document.createElement('button');
btnAdd.className = "btnAdd";
btnAdd.textContent = "+Add";
listOfQuestions.appendChild(btnAdd);
// To show quiz title
let quizTitle = document.createElement('div');
quizTitle.className = "quizTitle";
quizTitle.textContent = "Edit your quiz";
listOfQuestions.appendChild(quizTitle);
// To show position of question
let positionOfQuestion = document.createElement('div');
positionOfQuestion.className = "positionOfQ";
        //    to create input
let inputQuestion = document.createElement('input');
inputQuestion.type = "text";
inputQuestion.className ="inputQuestion";
// --------------
// positionOfQuestion = inputQuestion;
positionOfQuestion.appendChild(inputQuestion);
listOfQuestions.appendChild(positionOfQuestion);
// To show possible answers 
let possibleAnswer = document.createElement('div');
possibleAnswer.className = "possibleAnswer";
listOfQuestions.appendChild(possibleAnswer);
// To show checkbox input
for (let i=0;i<4;i++){
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    possibleAnswer.appendChild(checkBox );
    
}
