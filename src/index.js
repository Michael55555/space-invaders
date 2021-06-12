import "./style.css";
import Invader from "./invader.js";
import Player from "./player.js";
import Grid from "./grid.js";

let ctx = null;
let width = innerWidth;
let height = innerHeight;
let frame = 0;
let invaders = new Array(30)
  .fill()
  .map((_, i) => new Invader( 9 + (i % 15) * 2, 2 + Math.floor(i / 15) * 2));
let player = new Player()
let grid = new Grid();

function init() {
  const canvas = document.querySelector("canvas");

  canvas.width = width;
  canvas.height = height;

  ctx = canvas.getContext("2d");

  animate();
}

function render() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, width, height);

  Grid.render(ctx);

  invaders.forEach((invader) => invader.render(ctx));
}

function animate() {
  setTimeout(() => requestAnimationFrame(animate), 1000 / 1000);
  render();

  frame++;
}

onload = init;
