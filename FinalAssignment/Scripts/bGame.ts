/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/bird.ts" />
/// <reference path="objects/egg.ts" />
/// <reference path="objects/pig.ts" />
/// <reference path="objects/king.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/skytwo.ts" />
/// <reference path="objects/sky.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instructions.ts" />

/*bGame.ts
 * Author: Jeff Geear
 * Last Modified by: Jeff Geear
 * Date last modified: Dec. 12/2014
 * Description: 
 * Version #2
 * Instructor Tom Tsiliopoulos
 */

//container variables
var stage: createjs.Stage, loaderBar, loadInterval;
var percentLoaded = 0;
var stage: createjs.Stage;
var game: createjs.Container;
var stats: Stats;


// game objects
var bird: objects.Bird;
var egg: objects.Egg;
var pigs = [];
var kings = [];
var sky: objects.Sky;
var skyTwo: objects.SkyTwo;
var scoreboard: objects.Scoreboard;

// game global variables
var currentState: number;
var currentStateFunction;
var screenScale: number;
var scores: number = 0;

// Preload function - Loads Assets 
function preload(): void {
    setupStage();
    buildLoaderBar();
    startLoad();
    managers.asset.init();
    managers.asset.loader.addEventListener("complete", init);
    optimizeForMobile();
    gameStart();
}

//initializes game
function init(): void {

    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    createjs.Sound.play('anger', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    currentState = constants.MENU_STATE;
    changeState(currentState);
    optimizeForTouchAndScreens();
    setupStats()
    
}

/*enable touchscreen functionality*/
function optimizeForTouchAndScreens() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Add touch support for mobile devices and initial Screen Size
function optimizeForMobile() {
    if (window.innerWidth < constants.GAME_WIDTH) {
        stage.canvas.width = 400;
    }
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
    screenScale = stage.canvas.width / constants.GAME_WIDTH;

    stage.update();
}

/*Sets up stage for loader bar*/
function setupStage() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function (e) {
        stage.update();
    });
}

/*Draws loader bar*/
function buildLoaderBar() {
    loaderBar = new createjs.Shape();
    loaderBar.x = loaderBar.y = 100;
    loaderBar.graphics.setStrokeStyle(2);
    loaderBar.graphics.beginStroke("#000");
    loaderBar.graphics.drawRect(0, 0, constants.LOADER_WIDTH, 40);
    stage.addChild(loaderBar);
}

/*Redraws loader bar after each update*/
function updateLoaderBar() {
    loaderBar.graphics.clear();
    loaderBar.graphics.beginFill('#FF530D');
    loaderBar.graphics.drawRect(0, 0, constants.LOADER_WIDTH * percentLoaded, 40);
    loaderBar.graphics.endFill();
    loaderBar.graphics.setStrokeStyle(2);
    loaderBar.graphics.beginStroke("#000");
    loaderBar.graphics.drawRect(0, 0, constants.LOADER_WIDTH, 40);
    loaderBar.graphics.endStroke();
}


// Setup Game Stats using Stats.js
function setupStats() {
    stats = new Stats();
    stats.setMode(0)
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

/*Loader bar interval created*/
function startLoad() {
    loadInterval = setInterval(updateLoad, 50);
}

/*Updates the percentage of the preloaded assets*/
function updateLoad() {
    percentLoaded += .005;
    updateLoaderBar();
    if (percentLoaded >= 1) {
        clearInterval(loadInterval);
        stage.removeChild(loaderBar);
    }
}


// Game Loop
function gameLoop(event): void {
    // Start counting for FPS stats
    this.stats.begin();


    currentStateFunction();

    stage.update();

    // Stop counting Stats
    return this.stats.end();
}

// Launch Various "States"
function changeState(state: number) {

    switch (state) {
        case constants.MENU_STATE:
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.LEVEL2_STATE:
            currentStateFunction = states.levelTwoState;
            states.playTwo();
            break;
        case constants.LEVEL3_STATE:
            currentStateFunction = states.levelThreeState;
            states.playThree();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            states.gameOver();
            break;
        case constants.INSTRUCTIONS_STATE:
            currentStateFunction = states.infoState;
            states.info();
            break;

    }
}

//co-odinates
function distance(point1: createjs.Point, point2: createjs.Point): number {
    var p1: createjs.Point;
    var p2: createjs.Point;
    var theXs: number;
    var theYs: number;
    var result: number;

    p1 = new createjs.Point();
    p2 = new createjs.Point();

    p1.x = point1.x;
    p1.y = point1.y;
    p2.x = point2.x;
    p2.y = point2.y;

    theXs = p2.x - p1.x;
    theYs = p2.y - p1.y;

    theXs = theXs * theXs;
    theYs = theYs * theYs;

    result = Math.sqrt(theXs + theYs);

    return result;
}

// Check Collision with Bird and Egg
function birdAndEgg() {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = bird.x;
    p1.y = bird.y;
    p2.x = egg.x;
    p2.y = egg.y;


    if (distance(p1, p2) <= ((bird.width * 0.5) + (egg.width * 0.5))) {
        createjs.Sound.play("coin");
        scores += 100;
        // increase player's lives every 1500 points
        if (scores % 1500 == 0) {
            createjs.Sound.play("coin");
            this.scoreboard.lives++;
        }
        egg.reset();
    }
}

// Check Collision with Bird and Pig
function birdAndPig(thePig: objects.Pig) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    var pig: objects.Pig = thePig;

    p1.x = bird.x;
    p1.y = bird.y;
    p2.x = pig.x;
    p2.y = pig.y;

    if (distance(p1, p2) <= ((pig.width * 0.5) + (bird.width * 0.5))) {
        createjs.Sound.play("pig");
        scoreboard.lives -= 1;
        pig.reset();
    }
}

// Check Collision with Bird and King
function birdAndKing(theKing: objects.King) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    var king: objects.King = theKing;

    p1.x = bird.x;
    p1.y = bird.y;
    p2.x = king.x;
    p2.y = king.y;

    if (distance(p1, p2) <= ((king.width * 0.5) + (bird.width * 0.5))) {
        createjs.Sound.play("pig");
        scoreboard.lives -= 1;
        king.reset();
    }
}

//verify collisions
function collisionCheck() {
    birdAndEgg();

    for (var count = 0; count < constants.PIG_NUM; count++) {
        birdAndPig(pigs[count]);
    }
    if (currentState == constants.LEVEL2_STATE || currentState == constants.LEVEL3_STATE) {
        for (var count = 0; count < constants.KING_NUM; count++) {
            birdAndKing(kings[count]);
        }
    }
}

//start sound track
function gameStart() {
    createjs.Sound.play('anger', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
}