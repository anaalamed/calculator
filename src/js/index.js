import './operators.js';

const numBtns = document.querySelectorAll(".numBtn");
const values = document.querySelector(".values");
const operators = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equal");


const clearBtn = document.querySelector("#clear");

console.log(numBtns);

// AC button
clearBtn.addEventListener("click", () => {
    values.innerText = null;
})


// numbers butons 
const onClickNum = (e) => {
    if (a !== null) {
        values.innerText = null;
    }

    if (values.innerText.length <9) {
        values.innerText += e.target.innerText;
    }
}

for (let btn of numBtns ) {
    btn.addEventListener("click", onClickNum);
}



// operators
let a = null;
let b = null;

for (let operator of operators ) {
    operator.addEventListener("click", () => {
        console.log("operator");
        a = values.innerText;
        console.log(a);
        // values.innerText = null;
    });
}

equalBtn.addEventListener("click", () => {
    b = values.innerText;
    console.log(b);

    values.innerText = Number(a)+ Number(b);
})

