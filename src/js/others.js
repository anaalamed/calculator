const values = document.querySelector(".values");


// AC button
const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    values.innerText = 0;
})