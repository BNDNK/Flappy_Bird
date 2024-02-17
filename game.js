const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bird = {
    x: 50,
    y: canvas.height / 2 - 15,
    width: 30,
    height: 30,
    color: "#FFD700",
    gravity: 1.5,
    velocity: 0,
    jump: -15
};

const pipes = [];
const pipeWidth = 50;
const pipeHeight = 200;
const pipeGap = 150;
let score = 0;

function drawBird() {
    ctx.fillStyle = bird.color;
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
    ctx.fillStyle = "#228B22"; // green color
    for (let pipe of pipes) {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
        ctx.fillRect(pipe.x, pipe.bottomY, pipeWidth, pipe.bottomHeight);
    }
}

function drawScore() {
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 20, 30);
}

function update() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y > canvas.height - bird.height) {
        bird.y = canvas.height - bird.height;
        bird.velocity = 0;
    }

    if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
    }

    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
        createPipe();
    }

    for (let pipe of pipes) {
        pipe.x -= 2; // Increase the speed here

        if (bird.x < pipe.x + pipeWidth &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.topHeight || bird.y + bird.height > pipe.bottomY)) {
            // Game over
            alert("Game Over! Your Score: " + score);
            resetGame();
        }

        if (pipe.x + pipeWidth < 0) {
            pipes.shift();
            score++;
        }
    }
}


function createPipe() {
    const topHeight = Math.random() * (canvas.height - pipeGap - 30);
    const bottomY = topHeight + pipeGap;
    pipes.push({
        x: canvas.width,
        topHeight: topHeight,
        bottomY: bottomY,
        bottomHeight: canvas.height - bottomY,
    });
}

function resetGame() {
    bird.y = canvas.height / 2 - 15;
    bird.velocity = 0;
    pipes.length = 0;
    score = 0;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawPipes();
    drawScore();
    update();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        bird.velocity = bird.jump;
    }
});

gameLoop();
