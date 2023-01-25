var canvas = document.getElementById('CanvasId');
var g = canvas.getContext('2d');
g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;
var gX = canvas.width / 2;
var gY = canvas.height / 2;
var black = "#735F32";
var white = "#FFF";

//house
g.beginPath();
g.fillStyle = "pink";
g.moveTo(300,100);
g.lineTo(700,200);
g.lineTo(600,400);
g.lineTo(200,300);
g.lineTo(300,100);
g.fill();
g.stroke();
g.closePath();

g.beginPath();
g.fillStyle = "pink";
g.moveTo(200,300);
g.lineTo(200,500);
g.lineTo(600,600);
g.lineTo(600,400);
g.lineTo(200,300);
g.fill();
g.stroke();
g.closePath();

g.beginPath();
g.fillStyle = "pink";
g.moveTo(600, 400);
g.lineTo(600, 600);
g.lineTo(800, 500);
g.lineTo(800, 300);
g.closePath();
g.stroke();
g.fill();

g.beginPath();
g.moveTo(800, 300);
g.lineTo(700, 200)
g.lineTo(600, 400);
g.closePath();
g.stroke();
g.fill();

//door
g.beginPath(); 
g.moveTo(600, 500);
g.lineTo(650, 470);
g.lineTo(650, 575)
g.lineTo(650, 470)
g.closePath();
g.stroke();
g.fill();

//window 
g.beginPath(); 
g.fillStyle = "magenta";
g.moveTo(275, 450);
g.lineTo(450, 490);
g.lineTo(450, 400)
g.lineTo(290, 365)
g.closePath();
g.stroke();
g.fill();