/*explosion.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Explosion Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
// Explosion Class
module objects {
    export class Explosion extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("explosion", game);

            this.game.addChild(this);
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}  