import Grid, { row } from "./grid.js";
import Missile from "./missle.js";

class Player {
  constructor(x = 11, y = 25) {
    this.x = x;
    this.y = y;
    this.missiles = [];
  }

  render(ctx) {
    ctx.fillStyle = "#55A";

    const [x, y] = Grid.positionToGrid(this.x, this.y);
    ctx.fillRect(x, y, row, row);
    this.missiles.forEach(missile => missile.render(ctx))
  }

  shoot() {
    this.missiles.push(new Missile(this.x, this.y - 1));
  }
}

export default Player;
