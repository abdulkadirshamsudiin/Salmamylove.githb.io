// JavaScript code for "Our Love Story" website

// Countdown Timer
const countdown = document.getElementById("timer");
const targetDate = new Date("2024-12-31T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdown.textContent = "The special day has arrived!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Proposal Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
    response.textContent = "No take backs 😊";
    triggerAnimations();
});

noBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
    response.textContent = "NO Try again 😢";
});

// Love Poem Generator
const generatePoemBtn = document.getElementById("poemBtn");
const poemDisplay = document.getElementById("poemDisplay");

const poems = [
    "Roses are red, violets are blue, my heart beats only for you.",
    "From sunrise to sunset, you're the one I can't forget.",
    "In your eyes, I see my world, in your smile, my life unfurled.",
    "Every day with you feels like a dream come true."
];

generatePoemBtn.addEventListener("click", () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    poemDisplay.textContent = randomPoem;
});

// Falling Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function triggerAnimations() {
    setInterval(createHeart, 300);
    triggerLanterns();
    triggerFireworks();
}

// Floating Lanterns
function createLantern() {
    const lantern = document.createElement("div");
    lantern.classList.add("lantern");
    lantern.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(lantern);

    setTimeout(() => {
        lantern.remove();
    }, 10000);
}

function triggerLanterns() {
    setInterval(createLantern, 500);
}

// Fireworks Animation
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFirework(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 3 + 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function triggerFireworks() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const colors = ["red", "yellow", "blue", "green", "purple"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 50; i++) {
            drawFirework(x + Math.random() * 20 - 10, y + Math.random() * 20 - 10, color);
        }

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 500);
    }, 1000);
}
