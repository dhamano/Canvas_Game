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
        let paddle = new Paddle(this);
        let ball = new Ball(this);

        this.gameObjects = [ball, paddle];

        new InputHandler(paddle);
    }

    update(deltaTime) {
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);
        this.gameObjects.forEach( obj => obj.update(deltaTime));
    }

    draw(ctx) {
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        this.gameObjects.forEach( obj => obj.draw(ctx));
    }
}