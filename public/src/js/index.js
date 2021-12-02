import './others.js';

const numBtns = document.querySelectorAll(".numBtn");
const values = document.querySelector(".values");
const operators = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equal");


let a = null;
let b = null;
let operator;

let reset;

// click on numbers butons 
const onClickNum = (e) => {
    console.log("click on numbers butons ");
    // reset values after A and creating B
    console.log(reset)
    if (a !== null && reset === true || values.innerText == 0) {
        console.log('ipus');
        values.innerText = null;
        reset = false;
    }

    
    if (values.innerText.length <9) {
        console.log('boom');
        console.log(values.innerText)
        values.innerText += e.target.innerText;
    }
}

for (let btn of numBtns ) {
    btn.addEventListener("click", onClickNum);
}

// click on operator - a, op
for (let op of operators ) {
    op.addEventListener("click", (e) => {
        console.log("operator");
        a = values.innerText;
        operator = e.target.innerText;
        
        console.log('a', a);
        console.log(operator);
        reset = true;
        // values.innerText = null;
    });
}

// click on =   -  b
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




// ------------------------------------ OTHERS --------------------------

// AC button
const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    values.innerText = 0;
    a = null;
    b = null;
})



