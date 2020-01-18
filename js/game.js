import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

import { buildLvl, test, lvl0, lvl1 } from './levels.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAME_OVER: 3

} 

export default class Game {

    constructor (gameWidth, gameHeight, paddleSpeed, ballSize, ballSpeed) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.paddleSpeed = paddleSpeed;
        this.ballSize = ballSize;
        this.ballSpeed = ballSpeed;
    }

    init() {
        this.gameState = GAMESTATE.RUNNING;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLvl(this, lvl1);
        // let brick = new Brick(this, { x: 0, y: 0 });

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        // this.gameObjects = [this.ball, this.paddle, brick];

        new InputHandler(this.paddle, this);
    }

    update(deltaTime) {
        if( this.gameState === GAMESTATE.PAUSED ) return;
        this.gameObjects.forEach( obj => obj.update(deltaTime));
        this.gameObjects = this.gameObjects.filter( obj => !obj.markForDeletion);
    }

    draw(ctx) {
        this.gameObjects.forEach( obj => obj.draw(ctx));

        if( this.gameState === GAMESTATE.PAUSED ) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

            ctx.font = "30px arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        if( this.gameState === GAMESTATE.PAUSED ) {
            this.gameState = GAMESTATE.RUNNING;
        } else {
            this.gameState = GAMESTATE.PAUSED
        }
    }
}