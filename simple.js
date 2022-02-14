const colors = ["green", "red", "rgba(135,220,143,0.7)", "pink", "orange","yellow"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");
const bodyBcg = document.querySelector('body');

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    bodyBcg.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    bodyBcg.style.transition = `all 0.45s ease-in-out`;
});

function getRandomNumber() {
    // * get random num btw 0-1..multiply by length..round to the nearest integer value
    return Math.floor(Math.random() * colors.length);
}