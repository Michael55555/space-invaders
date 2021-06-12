function positionToGrid(xPos, yPos) {
  let x = xPos * 50;
  let y = yPos * 50;

  return [x, y]
}

function drawGrid() {
  ctx.fillStyle = "#333"
  ctx.beginPath();

  for (let g = gap; g < width; g += gap + column) {
    ctx.fillRect(g + column, 0, gap, height);
  }

  for (let g = gap; g < height; g += gap + row) {
    ctx.fillRect(0, g + row, width, gap);
  }

  ctx.stroke();
}
