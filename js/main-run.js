// ===================================================== Call elements ==============================================
// 
let mainContainerOFrun = document.querySelector('.mainContainer-run');
let submit = document.querySelector('#submit');
let points = document.querySelectorAll('.point');
let finishQ = document.querySelector(".finishQuizPart");
let button = document.querySelector('.button');
let newData = document.querySelector('.newData');
// --------------------------------------------- call old data from local storage--------------------------------------
let getOldData = JSON.parse(localStorage.getItem('oldDatas'));


// ======================================================= Variable====================================================
let totalOfOldData = 0;
// let totalOfnweData = 0;
let inputTypeClass = 0;
var storeIscorrectVal = [];
var storeCountH3 = [];
let countChecked = 0;
let countH3 = 0;
let isRadioOrCheckBox = 0;


//* ======================================================= function part ==============================================*

// ------------------------------loop on question key to call question value & display points ---------------------------
function displayQuiz(storeIscorrectVal, storeCountH3) {
    for (let elements of getOldData) {
        inputTypeClass += 1
        let questionLine = document.createElement('div');
        questionLine.className = 'questionLine';
        let h3 = document.createElement('h3');
        h3.textContent = inputTypeClass + elements['question'];
        let point = document.createElement('span');
        point.textContent = '6.4 points';
        point.className = 'points'
        questionLine.appendChild(point)
        questionLine.appendChild(h3);
        mainContainerOFrun.appendChild(questionLine);
        // ------------------------------loop on listOfAnswers key to call listOfAnswers value ----
        for (let values of elements['listOfAnswers']) {

            let ol = document.createElement('ol');
            ol.className = 'ol';
            let inputType = document.createElement('input')
            if (inputTypeClass < 8) {
                inputType.type = 'radio'
            } else {
                inputType.type = 'checkbox'
            }
            inputType.className = 'inputTypes'
            inputType.name = 'listOfAnswers' + inputTypeClass

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
            } else {
                let trueLi = document.createElement('li');
                trueLi.className = 'trueLi'
                let tickImg = document.createElement('img');
                tickImg.src = "../image/false.png";
                trueLi.append(tickImg)
                ol.appendChild(trueLi);
            }
            questionLine.appendChild(ol);
            mainContainerOFrun.appendChild(questionLine);
        }
        countH3 += 1


    }
    storeCountH3.push(countH3)
        // -- -- -- -- -- -- -- -- -- -- -- call hideFinish part function------- ----------------------
    hideFinishPart()

    newData.style.display = 'none'
}

// ================================================ Call new data =======================================================
let newDatas = JSON.parse(localStorage.getItem('data'));

// ================================================ New function to display new quiz  ====================================
function displayNewQuiz(storeIscorrectVal, storeCountH3) {
    for (let elements of newDatas) {
        let questionLine = document.createElement('div');
        questionLine.className = 'questionLine';
        let h3 = document.createElement('h3');
        h3.className = 'newH3'
        h3.textContent = elements['questionE'];
        let point = document.createElement('span');
        point.textContent = '6.25 points';
        point.className = 'points'
        questionLine.appendChild(point)
        questionLine.appendChild(h3);
        mainContainerOFrun.appendChild(questionLine);
        inputTypeClass += 1
            // ------------------------------loop on listOfAnswers key to call listOfAnswers value -------------------
        for (let values of elements['listOfAnswersE']) {

            let ol = document.createElement('ol');
            ol.className = 'ol';
            let inputType = document.createElement('input')
            inputType.type = 'checkbox'
            inputType.className = 'inputTypes'
            inputType.name = 'listOfAnswers' + inputTypeClass

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
            newData.appendChild(questionLine);
        }
        countH3 += 1

    }
    storeCountH3.push(countH3)
        // -- -- -- -- -- -- -- -- -- -- -- call hideFinish part function------- ----------------------
    hideFinishPart()
    mainContainerOFrun.style.display = 'none'
}
// ============function to auto switch defualt quiz and new quiz(if new quiz===null display defualt quiz)  ==============
function switchPage() {

    if (newDatas === null) {
        displayQuiz(storeIscorrectVal, storeCountH3);
    } else {
        displayNewQuiz(storeIscorrectVal, storeCountH3)
    }

}
switchPage()
    // ================================================ function to validation on checked ======================================
function checkResult() {
    let storeCheckIndex = [];
    let checktypeOfInputs = document.getElementsByTagName('input');
    for (let i = 0; i < checktypeOfInputs.length; i++) {
        if (checktypeOfInputs[i].checked && storeIscorrectVal[i] === true) {
            totalOfOldData += 6.25;
            for (scores of points) {
                scores.textContent = totalOfOldData;
            }
        };
        if (checktypeOfInputs[i].checked) {
            if (storeCheckIndex.indexOf(i) <= -1) {
                storeCheckIndex.push(i);
            }
        }
    }

    // -------------------------- hide and show some contaier(before and after click btn submit) --------------------------
    if (storeCheckIndex.length < JSON.parse(storeCountH3)) {
        alert('You must answer all the questions!')
    } else {
        finishQ.style.display = 'block';
        submit.style.display = 'none'
        newData.style.display = 'none'
        mainContainerOFrun.style.display = 'none'
    }

}

// ================================================= function to hide finish part container=================================
function hideFinishPart() {
    finishQ.style.display = 'none';
}

// ====================================================== Add event listener to submit btn  ================================
submit.addEventListener('click', checkResult);

// ------------------------------------------------- Show good or bad answer -----------------------------------------------
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