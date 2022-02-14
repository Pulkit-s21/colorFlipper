const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bodyBcg = document.querySelector('body');

btn.addEventListener("click", function () {
    let hexClr = "#";
    for (let i = 0; i < 6; i++) {
        hexClr += hex[getRandomNumber()];
    }
    color.textContent = hexClr;
    bodyBcg.style.backgroundColor = hexClr;
    bodyBcg.style.transition = `all 0.45s ease-in-out`;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length); 
}