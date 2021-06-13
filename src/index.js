import "./style.css";
import Invader from "./invader.js";
import Player from "./player.js";
import Grid from "./grid.js";
import Controller from "./controller.js";

let ctx = null;
let width = innerWidth;
let height = innerHeight;
let frame = 0;
let invaders = new Array(30)
  .fill()
  .map((_, i) => new Invader(9 + (i % 15) * 2, 2 + Math.floor(i / 15) * 2));
let player = new Player();
let grid = new Grid();
let controller = new Controller(player);
controller.initEventListeners();

function init() {
  const canvas = document.querySelector("canvas");

  canvas.width = width;
  canvas.height = height;

  ctx = canvas.getContext("2d");

  setInterval(() => move(), 1000 / 4);
  animate();
}

function render() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, width, height);

  Grid.render(ctx);

  player.render(ctx);
  invaders.forEach((invader) => invader.render(ctx));
}

function move() {
  invaders.forEach((invader) => invader.move());
  player.missiles.forEach((missile) => missile.move());

  invaders = invaders.filter((invader) => {
    return !player.missiles.some(
      (missile) => missile.x == invader.x && missile.y == invader.y
    );
  });

  let tempInvaders = [...invaders];

  invaders = invaders.filter((invader) => {
    return !player.missiles.some(
      (missile) => missile.x == invader.x && missile.y == invader.y
    );
  });

    console.log('b')
  player.missiles = player.missiles.filter((missile) => {
    console.log('i')
    if(missile.y < 0) return false;
    return !tempInvaders.some(
      (invader) => missile.x == invader.x && missile.y == invader.y || console.log('d')
    );
  });
}

function animate() {
  setTimeout(() => requestAnimationFrame(animate), 1000 / 60);
  render();

  frame++;
}

onload = init;
