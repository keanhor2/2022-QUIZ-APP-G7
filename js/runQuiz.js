

let newData = JSON.parse(localStorage.getItem('quiz'));

console.log(newData);

for (let jj of newData) {
    console.log(jj);
   for (let ob of jj.answer){
       console.log(ob);
       console.log(jj.answer.ob);
       for(let g of jj.answer){
           console.log(g);
       }
    }
   
        
    

}

// let btnNext= document.querySelector("#btnNext")
// btnNext.addEventListener("click",changeQuestion);