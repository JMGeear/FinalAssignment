/*skytwo.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: sky Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    // skyTwo Class
    export class SkyTwo extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dx: number;
        constructor(game: createjs.Container) {

            super(managers.asset.loader.getResult("sky2"));
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.game = game;
            this.dx = 5;
            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width * 3 - this.width;

        }

        update() {
            this.x -= this.dx;
            if (this.x <= -1600) {
                this.reset();
            }

        }
    }
} 