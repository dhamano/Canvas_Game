import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import { buildLvl, test, lvl0, lvl1 } from './levels.js';
import Brick from './brick.js';

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

        let bricks = buildLvl(this, lvl1);
        // let brick = new Brick(this, { x: 0, y: 0 });

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        // this.gameObjects = [this.ball, this.paddle, brick];

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        this.gameObjects.forEach( obj => obj.update(deltaTime));
        this.gameObjects = this.gameObjects.filter( obj => !obj.markForDeletion);
    }

    draw(ctx) {
        this.gameObjects.forEach( obj => obj.draw(ctx));
    }
}