var canvas = document.getElementById('CanvasId');
var ctx = canvas.getContext('2d');

function Achtergrond(){
    var ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(400, 0, 400, 300);
    gradient.addColorStop(0, 'pink');
    gradient.addColorStop(1, 'white');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
}

function house(x, y){ 
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(x,y);
    ctx.lineTo(x+40,y+10);
    ctx.lineTo(x+30,y+50);
    ctx.lineTo(x-10,y+20);
    ctx.lineTo(x,y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.moveTo(x-10,y+20);
    ctx.lineTo(x-10,y+40);
    ctx.lineTo(x+30,y+50);
    ctx.lineTo(x+30,y+30);
    ctx.lineTo(x-10,y+20);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.moveTo(x+30,y+30);
    ctx.lineTo(x+30, y+50);
    ctx.lineTo(x+50, y+40);
    ctx.lineTo(x+50, y+20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x+50, y+20);
    ctx.lineTo(x+40, y+10)
    ctx.lineTo(x+30, y+30);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function boom(x, y){
ctx.fillStyle = "rgb(165,42,42)"

ctx.fillRect(x, y, 10, 25);

ctx.fillStyle = "#013220";

ctx.beginPath();
ctx.arc(x+5, y-10, 15, 0, 2 * Math.PI);
ctx.fill();
}

Achtergrond();



function Straat(x, y){
ctx.fillStyle = "black";
ctx.font = "30px arial";
ctx.fillText("Happy Holidays", 150, 100);
//multiple house+boom 
    for (let i = 0; i < 8; i++) {
        house(x, y);

        house(x+50, y+10);

        boom(x+10, y+80);
        boom(x+80, y+90);
        boom(x+50, y+100);
        
        x = x+100
        y = y+15
    }
}

Straat(0, 100);
Straat(-10, 220);