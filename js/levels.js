import Brick from './brick.js';

export function buildLvl(game, lvl) {
    let bricks = [];

    lvl.forEach( (row, rowIndex) => {
        row.forEach( (brick, brickIndex) => {
            if(brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: 80 + 24 * rowIndex,
                };

                bricks.push(new Brick(game, position));
            }
        });
    });

    return bricks;
}

export const test = [[0,0,0,0,0,0,0,0,0]];

export const lvl0 = [[0,0,0,0,0,0,0,0,1,0]];

export const lvl1 = [
    [0,1,1,0,0,0,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];

export const lvl2 = [
    [0,1,1,0,1,1,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,1,0,1,1,0,1,1,0]
];