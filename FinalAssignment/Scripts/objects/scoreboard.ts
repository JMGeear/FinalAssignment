/*scoreboard.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: displays scoreboard
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module objects {
    // Scoreboard Class
    export class Scoreboard {
        label: createjs.Text;
        labelString: string = "";
        game: createjs.Container;
        lives: number = constants.PLAYER_LIVES;
        level: number = currentState;
        score: number = 0;
        highScore: number;
        width: number;
        height: number;
        constructor(game: createjs.Container) {
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.FONT_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.game = game;



            stage.addChild(this.label);
        }

        update() {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString() + " Level: " + this.level.toString();
            this.label.text = this.labelString;
            
        }
    }
}