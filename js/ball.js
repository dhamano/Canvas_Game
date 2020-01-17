export default class Ball {

    constructor (gameWidth, gameHeight, ballSize, ballSpeed) {
        this.image = document.querySelector("#img_ball");
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: 10,
            y: 10,
        }
        this.speed = {
            x: ballSpeed,
            y: ballSpeed,
        }
        this.size = ballSize;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);  // x pos, y pos, width, height
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x > this.gameWidth - this.size || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if(this.position.y > this.gameHeight - this.size || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
    }

    /*
    constructor() {
        this.radius = 10;
        this.center = {
            x : 0 + this.radius,
            y : 0 + this.radius,
        }
        this.position = {
            x: this.radius,
            y: this.radius,
        }
        this.speed = {
            x: 2,
            y: 2,
        }
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#0fc";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#0a9";
        ctx.stroke();
    }
    //*/

}