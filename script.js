const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function drawBackground() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawBackground();
