/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/skytwo.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/king.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*instructions.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: this file displays the instruction screen
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module states {

    // Scene Variables
    var instructionsFont: string = constants.INSTR_FONT;
    var lineSpace: number = 45;


    export function infoState() {
        skyTwo.update();

    }

    export function info() {
        var gameInstructions = [];
        var instructionsArray = [];

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        skyTwo = new objects.SkyTwo(game);

        instructionsArray = [
            "Game Instructions",
            "Anger Management has our Angry Bird trying to control his/her",
            "anger by supplying the flock with Golden eggs. The goal of ",
            "this is to have the Angry bird fly through the stormy skies",
            "and collect golden eggs. These eggs must be collected while",
            "avoiding the insane flying Pigs. Steer with the mouse or. ",
            "by touching the screen. Good Luck!"
        ];



        // Display each line of instructions
        for (var line = 0; line < instructionsArray.length; line++) {

            gameInstructions[line] = new createjs.Text(instructionsArray[line], instructionsFont, constants.FONT_COLOUR);
            gameInstructions[line].x = stage.canvas.width * 0.05;
            gameInstructions[line].y = 20 + (lineSpace * line);

            game.addChild(gameInstructions[line]);
        }

        // Display Back Button
        var backButton = new objects.Button(650, 350, 'back');

        game.addChild(backButton);

        backButton.addEventListener("click", function (e) {

            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
            createjs.Sound.play('bang');
        });

        // Add Scene to Game Container
        stage.addChild(game);
    }

} 