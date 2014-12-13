/*constants.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: This file contains the Game constants
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module constants {
    // Stage Size Constants
    export var GAME_WIDTH: number = 800;
    export var GAME_HEIGHT: number = 400;

    // game constants
    export var PIG_NUM: number = 4;
    export var KING_NUM: number = 1;
    export var PLAYER_LIVES: number = 3;
    export var INSTR_FONT = "bold 20px Consolas";
    export var GAME_FONT = "bold 45px Consolas";
    export var FONT_COLOUR = "#FF530D";
    export var LOADER_WIDTH = 400;


    // game states
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var LEVEL2_STATE: number = 2;
    export var LEVEL3_STATE: number = 3;
    export var GAME_OVER_STATE: number = 4;
    export var INSTRUCTIONS_STATE: number = 5;
} 