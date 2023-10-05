let thankCard = document.querySelector(".thank-card");
let mainCard = document.querySelector(".main-card");
let button = document.querySelector("#btn");
let span = document.querySelector("#select");
let answer = document.querySelectorAll('.answer div')
let selected = null;

function showCard() {
    mainCard.style.display = "none";
    thankCard.style.display = "flex";
};

function changeColor(param) {
    if (selected) {
        selected.style.backgroundColor = '#252F39'
        selected.style.color = '#8f9296'
    }
    param.style.backgroundColor = '#8f9296';
    param.style.color = '#ffffff';
    selected = param;
}

answer.forEach(function (divAnswer) {
    divAnswer.addEventListener('click', function () {
        changeColor(divAnswer);
        span.textContent = divAnswer.textContent;
    })
})

button.addEventListener('click', showCard);