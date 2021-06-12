import Grid, { row } from "./grid.js";

class Invader {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    ctx.fillStyle = "white";

    const [x, y] = Grid.positionToGrid(this.x, this.y);
    ctx.fillRect(x, y, row, row);
  }
}

export default Invader;
