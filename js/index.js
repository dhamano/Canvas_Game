import Game from './game.js';

let canvas = document.querySelector("#game-screen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PADDLE_SPEED = 7;
const BALL_SIZE = 16;
const BALL_SPEED = 2;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, PADDLE_SPEED, BALL_SIZE, BALL_SPEED);

game.init();

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);