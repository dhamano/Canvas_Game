import Brick from './brick.js';

export function buildLvl(game, lvl) {
    let bricks = [];

    lvl.forEach( (row, rowIndex) => {
        row.forEach( (brick, brickIndex) => {
            if(brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: 75 + 24 * rowIndex,
                };

                bricks.push(new Brick(game, position));
            }
        });
    });

    return bricks;
}

export const lvl1 = [
    [0,1,1,0,0,0,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];