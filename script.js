// script.js
let score = 0;
const scoreElement = document.getElementById('score');
const tapButton = document.getElementById('tapButton');
const alienElement = document.getElementById('alien');

// Funksioni për të ndryshuar pozitat e alienit
function moveAlien() {
    const maxX = window.innerWidth - alienElement.clientWidth;
    const maxY = window.innerHeight - alienElement.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    alienElement.style.left = `${randomX}px`;
    alienElement.style.top = `${randomY}px`;
}

// Ngjarja për klikimin e butonit
tapButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    moveAlien();
});

// Fillimi i lojës
moveAlien();
