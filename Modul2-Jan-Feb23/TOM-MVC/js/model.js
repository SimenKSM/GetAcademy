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