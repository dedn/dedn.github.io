const width = 600;
const height = 600;
const snakeSize = 10;

var w = width;
var h = height;
var score = 0;
var snake, food, needBoost,tail;
var snakecolor = 'black';
var snakeborder = '#fff';
var eatcolor = '#fff';
var eatborder = 'black';
var textColor = 'black';
var foodX = width / 11;
var foodY = height / 11;
var defaultLoopDelay = 80;
var currentLoopDelay = defaultLoopDelay;
var gameloop = null;
var speedBoost = 10;
var foodForBoost = 4;
var foodRemainForBoost = foodForBoost;

