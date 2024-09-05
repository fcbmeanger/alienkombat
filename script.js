// script.js
let score = 0;
const scoreElement = document.getElementById('score');
const tapButton = document.getElementById('tapButton');
const alienElement = document.getElementById('alien');

const maxLevel = 10;
let currentLevel = 1;

// Funksioni për të ndihmuar alienin të evoluojë
function evolveAlien() {
    if (currentLevel < maxLevel) {
        currentLevel++;
        alienElement.className = `alien-stage-${currentLevel}`;
        score++;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        alert("Alien ka arritur nivelin maksimal! Ju jeni një master!");
    }
}

// Ngjarja për klikimin e butonit
tapButton.addEventListener('click', () => {
    evolveAlien();
});
