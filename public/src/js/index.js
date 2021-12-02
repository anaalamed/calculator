import './others.js';

const numBtns = document.querySelectorAll(".numBtn");
const values = document.querySelector(".values");
const operators = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equal");


let a = null;
let b = null;
let operator;

// numbers butons 
const onClickNum = (e) => {
    if (a !== null || values.innerText == 0) {
        values.innerText = null;
    }

    if (values.innerText.length <9) {
        values.innerText += e.target.innerText;
    }
}

for (let btn of numBtns ) {
    btn.addEventListener("click", onClickNum);
}


for (let op of operators ) {
    op.addEventListener("click", (e) => {
        console.log("operator");
        a = values.innerText;
        operator = e.target.innerText;
        
        console.log('a', a);
        console.log(operator);
        // values.innerText = null;
    });
}

equalBtn.addEventListener("click", () => {
    b = values.innerText;
    console.log("b", b);

    let res = null;
    console.log(operator);

    if (a && b) {
        switch(operator) {
            case "+": res = Number(a) + Number(b); break;
            case "-": res = Number(a) - Number(b); break;
            case "x": res = Number(a) * Number(b); break;
            case "÷": res = Number(a) / Number(b); break;
        }
        console.log(res)
        console.log(typeof(res))

    
        values.innerText = res;
        a = res;
    }
})





