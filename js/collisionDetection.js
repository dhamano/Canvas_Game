export function detectCollision(ball, gameObj) {

    let btmOfBall = ball.position.y + ball.radius;
    let topOfBall = ball.position.y - ball.radius;
    let rightOfBall = ball.position.x + ball.radius;
    let leftOfBall = ball.position.x - ball.radius;

    let topOfObj = gameObj.position.y;
    let btmOfObj = gameObj.position.y + gameObj.height;
    let leftSideOfObj = gameObj.position.x;
    let rightSideOfObj = gameObj.position.x + gameObj.width;

    if(btmOfBall >= topOfObj
        && topOfBall <= btmOfObj
        && rightOfBall >= leftSideOfObj
        && leftOfBall <= rightSideOfObj
        ) {
        return true;
    } else {
        return false;
    }

}