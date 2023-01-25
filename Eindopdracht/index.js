var canvas = document.getElementById('CanvasId');
var g = canvas.getContext('2d');
g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;
var gX = canvas.width / 2;
var gY = canvas.height / 2;
var black = "#735F32";
var white = "#FFF";

canvas.width = 400;
canvas.height = 300;

// Draw the card shape
g.beginPath();
g.moveTo(50, 50);
g.lineTo(350, 50);
g.lineTo(350, 250);
g.lineTo(50, 250);
g.lineTo(50, 50);
g.closePath();
g.stroke();

//house
g.beginPath();
g.fillStyle = "pink";
g.moveTo(30,10);
g.lineTo(70,20);
g.lineTo(60,60);
g.lineTo(20,30);
g.lineTo(30,10);
g.fill();
g.stroke();
g.closePath();

g.beginPath();
g.fillStyle = "pink";
g.moveTo(20,30);
g.lineTo(20,50);
g.lineTo(60,60);
g.lineTo(60,40);
g.lineTo(20,30);
g.fill();
g.stroke();
g.closePath();

g.beginPath();
g.fillStyle = "pink";
g.moveTo(60, 40);
g.lineTo(60, 60);
g.lineTo(80, 50);
g.lineTo(80, 30);
g.closePath();
g.stroke();
g.fill();

g.beginPath();
g.moveTo(80, 30);
g.lineTo(70, 20)
g.lineTo(60, 40);
g.closePath();
g.stroke();
g.fill();

//boom
g.fillStyle = "rgb(0, 100, 0)";

g.fillRect(20, 35, 10, 20);

g.beginPath();
g.arc(25, 25, 15, 0, 2 * Math.PI);
g.fill();

//house 
g.moveTo(x+25, y+70);
g.moveTo(x+40, y+65);
g.moveTo(x+85, y+10);
g.stroke();
g.fill();

// Draw multiple houses
for (let i = 0; i < 5; i++) {
}