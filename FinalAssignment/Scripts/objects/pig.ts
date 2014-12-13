/*pig.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Pig Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    // Pig Class
    export class Pig extends objects.GameObject {
        dy: number;
        dx: number;
        turnRate: number;
        constructor(game: createjs.Container) {
            super("pig",game);
            this.turnRate = 2;

            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * 2 - 1);
            this.turnRate *= -1;

        }

        update() {
            this.x -= this.dx;
            this.y -= this.dy;
            this.rotation += this.turnRate;

            if (this.x < -(this.width)) {
                this.reset();
                

            }

        }
    }
}