import './others.js';

const numBtns = document.querySelectorAll(".numBtn");
const values = document.querySelector(".values");
const operators = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equal");


let a = null;
let b = null;
let sign = '+';
let operator;
let reset;


// click on numbers butons 
for (let btn of numBtns ) {
    btn.addEventListener("click", (e) => {
    
        // reset values after A and creating B
        if (a !== null && reset === true || values.innerText == 0) {
        // if (a !== null && reset === true ) {
            // if(values.innerText != -0 ) {
                console.log('ipus');
                values.innerText = null;
                reset = false;
            // } 
        }
    
        if (values.innerText.length <9) {
            values.innerText += e.target.innerText;
        }
    
        if (sign === '-') {
            // values.innerText = "-" + e.target.innerText;
            values.innerText = "-" + values.innerText;
            sign = "+";
        }
        // values.innerText = new Intl.NumberFormat().format((values.innerText))

    });
}

// click on operator   (a, op)
for (let op of operators ) {
    op.addEventListener("click", (e) => {
        a = values.innerText;
        operator = e.target.innerText;
        
        console.log('a =',a);
        console.log("operator", operator);
        reset = true;
        sign = "+";
        // values.innerText = null;
    });
}

// click on =     (b)
equalBtn.addEventListener("click", () => {
    b = values.innerText;
    console.log("b =",b);

    let res = null;
    console.log(operator);

    if (a && b) {
        switch(operator) {
            case "+": res = Number(a) + Number(b); break;
            case "-": res = Number(a) - Number(b); break;
            case "x": res = Number(a) * Number(b); break;
            // case "÷": res = (Number(a) / Number(b)); break;
            case "÷": res = (Number(a) / Number(b)).toString().substring(0,9); break;
        }
        
        
        if(res.toString().length > 9 ) {
            res = new Intl.NumberFormat('en-US', { notation: "scientific" }).format(res);
        }

        console.log(typeof(res))
        // let resFormatted = new Intl.NumberFormat().format(res);
        // console.log(typeof(resFormatted))
        // values.innerText = resFormatted;
        values.innerText = res;
        a = res;
        b = null;
        sign = "+";
    }
})




// ------------------------------------ OTHERS --------------------------

// AC button
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    values.innerText = 0;
    a = null;
    b = null;
    sign = '+';
})

// +/- button
const signBtn = document.querySelector("#changeSign");
signBtn.addEventListener("click", () => {

    if (values.innerText.toString().includes("-")) {
        sign = "-";
    }

    if (sign === "+") {
        sign = "-"
        values.innerText = "-"+(values.innerText);
    }
    else if (sign === '-') {
        sign = '+';
        values.innerText = (values.innerText).substring(1);
    } 

    // if creating b
    if (a !== null && reset === true ) {
        // console.log('sign');
        values.innerText = "-0";
        sign = "-";
        reset = false;
    }

    reset = false;
})

// % button
const percentageBtn = document.querySelector("#percentage");
percentageBtn.addEventListener("click", () => {
    console.log('percentage');
    let res = null;

    if (!a)  res = values.innerText / 100;
    else if (a) {
        let perc = values.innerText;
        console.log("perc = ", perc);
        res = a / 100 * perc;        
    }
    values.innerText = res;
})