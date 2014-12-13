/*bird.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Bird Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    // Bird Class
    export class Bird extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("bird", game);
            this.x = 80;

            stage.addChild(this);
        }

        update() {
            this.y = stage.mouseY;
        }
    }
}