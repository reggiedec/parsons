const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to match the window's inner dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set canvas background color
canvas.style.backgroundColor = 'beige';

// Ball properties
const ballRadius = 30; // Increase the ball size
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 5; // Increase the horizontal speed for more force
let dy = -5; // Increase the vertical speed for more force

// User control
let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'green'; // Change the ball color to green
    ctx.fill();
    ctx.closePath();
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the background
    ctx.fillStyle = 'beige';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawBall();

    if (rightPressed && x + dx < canvas.width - ballRadius) {
        x += dx;
    } else if (leftPressed && x - dx > ballRadius) {
        x -= dx;
    }

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx; // Reverse horizontal direction when hitting the sides
    }

    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy; // Reverse vertical direction when hitting top/bottom
    }

    x += dx;
    y += dy;

    // Add description text
    ctx.font = "24px Autour One";
    ctx.fillStyle = "Green";
    ctx.fillText("This is a project I made with HTML and JavaScript.", 20, 40);
    ctx.fillText("I will be presenting more of these in my final presentation.", 20, 70);
    ctx.fillText("Control the ball with the arrow keys!", 20, 100);
}

function animate() {
    updateCanvas();
    requestAnimationFrame(animate);
}

animate();
