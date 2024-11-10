const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Hello world this is a test sentence",
    "JavaScript is a versatile programming language",
    "Artificial intelligence is the future",
    "Coding is both an art and a science",
    "Learning new things keeps the mind sharp"
]; // add more sentences here

let currentSentence = "";
let jumbledWords = [];
let currentSentenceIndex = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    if (currentSentenceIndex >= sentences.length) {
        currentSentenceIndex = 0;
    }
    currentSentence = sentences[currentSentenceIndex];
    jumbledWords = shuffle(currentSentence.split(" "));
    displayWords();
}

function displayWords() {
    const container = document.getElementById("sentence-container");
    container.innerHTML = "";
    jumbledWords.forEach(word => {
        const wordElement = document.createElement("span");
        wordElement.className = "word";
        wordElement.textContent = word;
        wordElement.onclick = () => selectWord(wordElement);
        container.appendChild(wordElement);
    });
}

function selectWord(wordElement) {
    const container = document.getElementById("sentence-container");
    container.appendChild(wordElement);
}

function checkSentence() {
    const container = document.getElementById("sentence-container");
    const selectedWords = Array.from(container.children).map(child => child.textContent);
    const result = document.getElementById("result");
    if (selectedWords.join(" ") === currentSentence) {
        result.textContent = "Correct!";
        result.style.color = "green";
        currentSentenceIndex++;
        setTimeout(() => {
            result.textContent = "";
            startGame();
        }, 1000);
    } else {
        result.textContent = "Try again!";
        result.style.color = "red";
    }
}

document.getElementById("check-button").onclick = checkSentence;

startGame();

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});