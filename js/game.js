import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

export default class Game {

    constructor (gameWidth, gameHeight, paddleSpeed, ballSize, ballSpeed) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.paddleSpeed = paddleSpeed;
        this.ballSize = ballSize;
        this.ballSpeed = ballSpeed;
    }

    init() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.gameObjects = [this.ball, this.paddle];

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        this.gameObjects.forEach( obj => obj.update(deltaTime));
    }

    draw(ctx) {
        this.gameObjects.forEach( obj => obj.draw(ctx));
    }
}