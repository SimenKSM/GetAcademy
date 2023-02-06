view()
function view() {
    let HTML = '';
    HTML = `
    ${draw()}
    `;

    document.getElementById("myCanvas").innerHTML = HTML;

}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }

    if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
    } else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
const interval = setInterval(draw, 10);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}





// function drawRedSquare() {
//     ctx.beginPath();
//     ctx.rect(20, 40, 50, 50);
//     ctx.fillStyle = "#FF0000";
//     ctx.fill();
//     ctx.closePath();
// }

// function drawGreenCircle() {
//     ctx.beginPath();
//     ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.closePath();
// }

// function drawBlueBox() {
//     ctx.beginPath();
//     ctx.rect(160, 10, 100, 40);
//     ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//     ctx.stroke();
//     ctx.closePath();
// }