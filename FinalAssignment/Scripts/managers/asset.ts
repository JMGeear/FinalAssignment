/*asset.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: This file contains the game assets
 * Version #2
 * Instructor Tom Tsiliopoulos
 */
module managers {

    export class asset {

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [

                [2, 2, 320, 160],
                [520, 343, 15, 15],
                [324, 343, 96, 96],
                [541, 164, 96, 96],
                [753, 2, 96, 96],
                [422, 343, 96, 96],
                [851, 2, 96, 96],
                [541, 262, 96, 96],
                [520, 360, 96, 96],
                [646, 110, 96, 96],
                [639, 208, 96, 96],
                [639, 306, 96, 96],
                [618, 404, 96, 96],
                [716, 404, 96, 96],
                [753, 100, 96, 96],
                [851, 100, 96, 96],
                [737, 208, 96, 96],
                [737, 306, 96, 96],
                [814, 404, 96, 96],
                [835, 198, 96, 96],
                [835, 296, 96, 96],
                [912, 394, 96, 96],
                [2, 164, 320, 160],
                [324, 2, 320, 160],
                [949, 2, 65, 65],
                [949, 69, 65, 65],
                [949, 136, 65, 65],
                [933, 273, 62, 63],
                [933, 203, 69, 68],
                [2, 326, 320, 160],
                [324, 164, 215, 177],
                [646, 2, 105, 106]
            ],
            "animations": {

                "play": [22],
                "playagain": [23],
                "back": [0],
                "instruction": [29],
                "fire": [28],
                "bird": {
                    frames: [24, 25, 26],
                    speed: 0.2
                },
                "egg": [27],
                "pig": [31],
                "king": [30],
                "bullet": [1],
                "explosion": {
                    frames: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
                    next: false,
                    speed: 0.5
                } 

            }

        }

        static manifest = [
            { id: "sky", src: "assets/images/sky.jpg" },
            { id: "sky2", src: "assets/images/sky2.jpg" },
            { id: "coin", src: "assets/sounds/coin.mp3" },
            { id: "boom", src: "assets/sounds/Bomb_Exploding.mp3" },
            { id: "bang", src: "assets/sounds/Glock_17.mp3" },
            { id: "anger", src: "assets/sounds/Stupid Girl.mp3" },
            { id: "pig", src: "assets/sounds/Pig.mp3" },
            { id: "one", src: "assets/sounds/level1.mp3" },
            { id: "two", src: "assets/sounds/level2.mp3" },
            { id: "three", src: "assets/sounds/level3.mp3" }
        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }

    }
}  