/*button.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Button Class
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    // Button Class
    export class Button extends objects.GameObject {
        constructor(x: number, y: number, buttonIDString: string) {
            super(buttonIDString, game);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 