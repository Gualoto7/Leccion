const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let dx = 0;
let dy = 0;
let score = 0;

let food = {
  x: Math.floor(Math.random() * tileCount),
  y: Math.floor(Math.random() * tileCount),
};

function drawBackground() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "#0f0";
  for (let part of snake) {
    ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
  }
}

function drawFood() {
  ctx.fillStyle = "#f00";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateGame() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  // Comer comida
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    };
  } else {
    snake.pop();
  }

  // Colisión con paredes
  if (
    head.x < 0 || head.x >= tileCount ||
    head.y < 0 || head.y >= tileCount
  ) {
    resetGame();
  }

  // Colisión con sí mismo
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  alert("¡Game Over! Tu puntaje fue: " + score);
  snake = [{ x: 10, y: 10 }];
  dx = dy = 0;
  score = 0;
}

function gameLoop() {
  updateGame();
  drawBackground();
  drawSnake();
  drawFood();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && dy === 0) {
    dx = 0; dy = -1;
  } else if (e.key === "ArrowDown" && dy === 0) {
    dx = 0; dy = 1;
  } else if (e.key === "ArrowLeft" && dx === 0) {
    dx = -1; dy = 0;
  } else if (e.key === "ArrowRight" && dx === 0) {
    dx = 1; dy = 0;
  }
});

setInterval(gameLoop, 150);
