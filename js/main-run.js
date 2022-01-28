// ====================================================== Set data to object ======================================
newDatar = []

function setNewData() {
    let setDatas1 = localStorage.setItem('newQuiz', JSON.stringify(newDatar));
}

// ===================================================== Call elements =============================================
let mainContainerOFrun = document.querySelector('.mainContainer-run');
let submit = document.querySelector('#submit');
let points = document.querySelectorAll('.point');
let finishQ = document.querySelector(".finishQuizPart");
let button = document.querySelector('.button');
// --------------------------------------------- call old data from local storage----------------------------------------
let getOldData = JSON.parse(localStorage.getItem('quiz'));
console.log(getOldData)



// ======================================================= Variable==================================================
let total = 0;
let inputTypeClass = 0;
var storeIscorrectVal = [];
let indexOfCheck = 0;
let countChecked = 0;


//* ======================================================= function part ============================================*

// ------------------------------loop on question key to call question value & display points ------------------------
function displayQuiz(storeIscorrectVal) {
    for (let elements of getOldData) {
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
                storeCheckIndex.push(i);
            }
        }
    }

    // -------------------------- hide display quiz container annd show finish part container and validate on check -------------------------
    if (storeCheckIndex.length < 10) {
        alert('You must answer all the questions!')
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