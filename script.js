const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const snake = [{ x: 10, y: 10 }];
let dx = 0;
let dy = 0;

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

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    dx = 0; dy = -1;
  } else if (e.key === "ArrowDown") {
    dx = 0; dy = 1;
  } else if (e.key === "ArrowLeft") {
    dx = -1; dy = 0;
  } else if (e.key === "ArrowRight") {
    dx = 1; dy = 0;
  }
});

function gameLoop() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  snake.pop();

  drawBackground();
  drawSnake();
}

setInterval(gameLoop, 150);
