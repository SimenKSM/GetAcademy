const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


// Ball data
const ballRadius = 10;



// Paddel data
const paddleHeight = 10;
const paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// Fysikk data
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

// UserInput data
var rightPressed = false;
var leftPressed = false;

// Brick data
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}

// Score data
var score = 0;

// Antall liv data
var lives = 3;