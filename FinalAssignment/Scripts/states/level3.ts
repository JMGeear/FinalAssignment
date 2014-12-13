/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/king.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*level3.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: level three
 * Version #2
 * Instructor Tom Tsiliopoulos
 */

module states {
    export function levelThreeState() {
        sky.update();
        egg.update();
        bird.update();

        for (var count = 0; count < constants.PIG_NUM; count++) {
            pigs[count].update();
        }

        for (var count = 0; count < constants.KING_NUM; count++) {
            kings[count].update();
        }

        collisionCheck();

        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    export function playThree() {

        game = new createjs.Container();

        sky = new objects.Sky(game);
        egg = new objects.Egg(game);
        bird = new objects.Bird(game);

        createjs.Sound.play("three");

        for (var count = 0; count < constants.PIG_NUM; count++) {
            pigs[count] = new objects.Pig(game);
        }

        for (var count = 0; count < constants.KING_NUM; count++) {
            kings[count] = new objects.King(game);
        }

        scoreboard = new objects.Scoreboard(game);

        stage.addChild(game);
    }

 

}  