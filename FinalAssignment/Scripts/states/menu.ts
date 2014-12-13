/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/skytwo.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/king.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*menu.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: This file displays the menu screen
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module states {
    export function menuState() {
        sky.update();
        bird.update();
    }

    export function menu() {
        game = new createjs.Container();

        sky = new objects.Sky(game);

        bird = new objects.Bird(game);

        var angryBirdsText: createjs.Text;

        angryBirdsText = new createjs.Text("Anger Management 2.0", constants.GAME_FONT, constants.FONT_COLOUR);
        angryBirdsText.regY = angryBirdsText.getBounds().height * 0.5;
        angryBirdsText.regX = angryBirdsText.getBounds().width * 0.5;
        angryBirdsText.y = stage.canvas.height * 0.5;
        angryBirdsText.x = stage.canvas.width * 0.5;
        game.addChild(angryBirdsText);

        var playButton = new objects.Button(400, 100, 'play');

        game.addChild(playButton);

        playButton.addEventListener("click", function (e) {

            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
            createjs.Sound.play('bang');
        });

        var instructionButton = new objects.Button(400, 300, 'instruction');

        game.addChild(instructionButton);

        instructionButton.addEventListener("click", function (e) {

            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.INSTRUCTIONS_STATE;
            changeState(currentState);
            createjs.Sound.play('bang');
        });


        stage.addChild(game);
    }
} 