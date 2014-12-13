/*egg.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Egg Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    // Egg Class
    export class Egg extends objects.GameObject {
        dx: number;
        turnRate: number;
        constructor(game: createjs.Container) {
            super("egg", game);
            this.dx = 7;
            this.turnRate = 0.5;
            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        }

        update() {
            this.x -= this.dx;
            this.rotation -= this.turnRate;
            if (this.x < -(this.width)) {
                this.reset();
                
            }

        }
    }
}