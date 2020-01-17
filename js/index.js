import Game from './game.js';

// paddle.default()
let canvas = document.querySelector("#game-screen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PADDLE_SPEED = 7;
const BALL_SIZE = 16;
const BALL_SPEED = 2;

// ctx.clearRect(0, 0, 600, 800);
/*
// how to draw on the canvas
ctx.fillStyle = '#f00';
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#ff0";
ctx.fillRect(140, 20, 100, 100);
//*/
let game = new Game(GAME_WIDTH, GAME_HEIGHT, PADDLE_SPEED, BALL_SIZE, BALL_SPEED);

game.init();

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);

    // paddle.update(deltaTime);
    // ball.update(deltaTime);

    // paddle.draw(ctx);
    // ball.draw(ctx);

    // ball.draw(ctx);
    // ctx.drawImage(imgBall, 10, 10, 16, 16);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);