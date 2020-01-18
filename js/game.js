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
        this.gameState = GAMESTATE.MENU;
        this.gameObjects = [];
        this.lives = 3;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
    }

    start() {
        if( this.gameState !== GAMESTATE.MENU ) return;
        let bricks = buildLvl(this, lvl1);
        // let brick = new Brick(this, { x: 0, y: 0 });

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        // this.gameObjects = [this.ball, this.paddle, brick];

        this.gameState = GAMESTATE.RUNNING;
    }

    update(deltaTime) {
        if (this.lives === 0) this.gameState  = GAMESTATE.GAMEOVER;

        if( this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.MENU || this.gameState === GAMESTATE.GAMEOVER) return;

        this.gameObjects.forEach( obj => obj.update(deltaTime));
        this.gameObjects = this.gameObjects.filter( obj => !obj.markForDeletion);
    }

    draw(ctx) {
        this.gameObjects.forEach( obj => obj.draw(ctx));

        if( this.gameState === GAMESTATE.MENU ) {
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

            ctx.font = "30px arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.fillText("Press Spacebar To Start", this.gameWidth / 2, this.gameHeight / 2);
        }

        if( this.gameState === GAMESTATE.PAUSED ) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

            ctx.font = "30px arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }

        if( this.gameState === GAMESTATE.GAMEOVER ) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

            ctx.font = "30px arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", this.gameWidth / 2, this.gameHeight / 2);
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