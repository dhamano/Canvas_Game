export default class Brick {

    constructor(game, position) {
        this.game = game;
        this.position = position;
        this.width = 80;
        this.height = 24;
    }

    update() {}

    draw(ctx) {
        ctx.fillStyle = "#f93";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#a30";
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }

}