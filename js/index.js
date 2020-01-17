import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

// paddle.default()
let canvas = document.querySelector("#game-screen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const BALL_SIZE = 16;
const BALL_SPEED = 3;

// ctx.clearRect(0, 0, 600, 800);
/*
// how to draw on the canvas
ctx.fillStyle = '#f00';
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#ff0";
ctx.fillRect(140, 20, 100, 100);
//*/

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, BALL_SIZE, BALL_SPEED);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    paddle.update(deltaTime);
    ball.update(deltaTime);

    paddle.draw(ctx);
    ball.draw(ctx);

    // ball.draw(ctx);
    // ctx.drawImage(imgBall, 10, 10, 16, 16);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);