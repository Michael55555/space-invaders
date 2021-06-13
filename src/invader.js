import Grid, { row } from "./grid.js";

class Invader {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.i = 0;
  }

  render(ctx) {
    ctx.fillStyle = "white";

    const [x, y] = Grid.positionToGrid(this.x, this.y);
    ctx.fillRect(x, y, row, row);
  }

  move() {
    if((this.i % 22) < 10) this.x++; 
    else if((this.i % 22) == 11) this.y++; 
    else if((this.i % 22) < 21) this.x--; 
    
    this.i++;
  }
}

export default Invader;
