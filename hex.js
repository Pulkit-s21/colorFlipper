const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexClr = "#";
    for (let i = 0; i < 6; i++) {
        hexClr += hex[getRandomNumber()];
    }
    color.textContent = hexClr;
    document.body.style.backgroundColor = hexClr;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length); 
}