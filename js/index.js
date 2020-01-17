import Paddle from './paddle.js';
import InputHandler from './input.js';

// paddle.default()
let canvas = document.querySelector("#game-screen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// ctx.clearRect(0, 0, 600, 800);
/*
// how to draw on the canvas
ctx.fillStyle = '#f00';
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#ff0";
ctx.fillRect(140, 20, 100, 100);
//*/

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);

    paddle.update(deltaTime);

    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();