var canvas = document.getElementById('CanvasId');
var ctx = canvas.getContext('2d');

function Achtergrond(){
    var ctx = canvas.getContext("2d");
}

function house(x, y){ 
    ctx.beginPath();
    ctx.fillStyle = "pink";
    ctx.moveTo(x,y);
    ctx.lineTo(x+40,y+10);
    ctx.lineTo(x+30,y+50);
    ctx.lineTo(x-10,y+20);
    ctx.lineTo(x,y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "pink";
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
ctx.fillStyle = "rgb(120,12,22)"

ctx.fillRect(x, y, 10, 25);

ctx.fillStyle = "#013220";

ctx.beginPath();
ctx.arc(x+15, y-10, 15, 0, 2 * Math.PI);
ctx.arc(x-5, y-10, 15, 0, 2 * Math.PI);
ctx.arc(x+5, y-25, 15, 0, 2 * Math.PI);
ctx.fill();
}

Achtergrond();



function street(x, y){
ctx.fillStyle = "black";
ctx.font = "50px Lorem";
ctx.fillText("Happy Holidays", 305, 70);

ctx.font = "35px Lorem";
ctx.fillText("and a happy new year", 50, 500);

//multiple house+boom 
    for (let i = 0; i < 8; i++) {
        house(x, y);

        boom(x+60, y+20);
        house(x+40, y+60);
;
        house(x+460, y+360);

        boom(x+660, y+500);
        house(x+850, y+180);
        boom(x+380, y+500);

        boom(x+480, y+420);

        boom(x+680, y+240);
    

        
        x = x+100
        y = y+15
    }
}

street (0, 100);
street(-10, 220);