/*gameobject.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Object Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    export class GameObject extends createjs.Sprite {
        width: number;
        height: number;
        game: createjs.Container;
        constructor(spriteString: string, game: createjs.Container) {
            super(managers.asset.atlas, spriteString);
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.regY = this.height * 0.5;
            this.regX = this.width * 0.5;
            
            this.game = game;
        }

    }
} 