export default class InputHandler {
    
    constructor (paddle) {
        document.addEventListener('keydown', e => {
            // alert(e.keyCode);

            switch(e.keyCode) {
                case 37:
                    // console.log('move left',e.keyCode);
                    paddle.moveLeft();
                    break;
                case 39:
                    // console.log('move right',e.keyCode);
                    paddle.moveRight();
                    break;
            }
        })
    }

}