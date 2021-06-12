import Grid, { row } from "./grid.js";

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  render(ctx) {
    ctx.fillStyle = "white";

    const [x, y] = Grid.positionToGrid(this.x, this.y);
    ctx.fillRect(x, y, row, row);
  }
  shoot() {}
}
