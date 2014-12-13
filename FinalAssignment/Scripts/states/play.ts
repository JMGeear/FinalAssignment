/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/skytwo.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/king.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*play.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: Level one 
 * Version #2
 * Instructor Tom Tsiliopoulos
 */

module states {
    export function playState() {
        sky.update();
        egg.update();
        bird.update();

        for (var count = 0; count < constants.PIG_NUM; count++) {
            pigs[count].update();
        }

       collisionCheck();

        scoreboard.update();

        // Change to Game Over State if the player has no lives left
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
         // Change to Level 2 State if player hits 1000 points
        else if (scoreboard.score >= 1000) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }

    }

    export function play() {

        game = new createjs.Container();

        sky = new objects.Sky(game);
        egg = new objects.Egg(game);
        bird = new objects.Bird(game);

        createjs.Sound.play("one");

        for (var count = 0; count < constants.PIG_NUM; count++) {
            pigs[count] = new objects.Pig(game);
        }

        scoreboard = new objects.Scoreboard(game);

        stage.addChild(game);
    }

} 