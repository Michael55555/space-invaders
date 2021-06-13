import Grid, { row } from "./grid.js";

class Missile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  render(ctx) {
    ctx.fillStyle = "red";
    const [x, y] = Grid.positionToGrid(this.x, this.y);
    ctx.fillRect(x, y, row, row);
  }
  move() {
    this.y--;
  }
}

export default Missile;
