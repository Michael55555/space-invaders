let gap = 2;
let row = 20;
let column = row;
let width = innerWidth;
let height = innerHeight;

export { gap };
export { row };
export { column };

export default class Grid {
  static positionToGrid(xPos, yPos) {
    let x = (gap * xPos) + (column * xPos) + gap;
    let y = (gap * yPos) + (column * yPos) + gap;

    return [x, y];
  }

  static render(ctx) {
    ctx.fillStyle = "#333";
    ctx.beginPath();

    for (let g = gap; g < width; g += gap + column) {
      ctx.fillRect(g + column, 0, gap, height);
    }

    for (let g = gap; g < height; g += gap + row) {
      ctx.fillRect(0, g + row, width, gap);
    }

    ctx.stroke();
  }
}
