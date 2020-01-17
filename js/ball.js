export default class Ball {

    constructor (game) {
        this.image = document.querySelector("#img_ball");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.position = {
            x: 10,
            y: 10,
        }
        this.speed = {
            x: game.ballSpeed,
            y: game.ballSpeed,
        }
        this.radius = game.ballSize/2;
    }

    draw(ctx) {
        // ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);  // render an image: x pos, y pos, width, height
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#0fc";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#0a9";
        ctx.stroke();
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x > this.gameWidth - this.radius || this.position.x < 0 + this.radius) {
            this.speed.x = -this.speed.x;
        }

        if(this.position.y > this.gameHeight - this.radius || this.position.y < 0 + this.radius) {
            this.speed.y = -this.speed.y;
        }
    }

}