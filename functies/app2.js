class App
{
    mariofunction()
    {
        console.log("MARIO!!");
    }

    evilalughFuncation()
    {   
        return "bwahaha";
    }

    Mathfuncation()
    {
        let result = 2 + 2;
        console.log(result);
    }



}
let app = new App
app.runApplication();
app.mariofunction();
console.log(app.evilalughFuncation());
app.getallen();

runApplication()
var canvas = document.getElementById('CanvasId2');
var g = canvas.getContext('2d');
 

    g.beginPath();
    console.log('house')
    g.moveTo(x,y);
    g.lineTo(x+150, y+50);
    g.lineTo(x+350,y+100);
    g.lineTo(x+300,y+200);
    g.lineTo(x+100,y+150);
    g.lineTo(x+150,y+50);
    g.fill();
    g.closePath();

    g.beginPath();
    g.moveTo(x+100,y+150);
    g.lineTo(x+100,y+250);
    g.lineTo(x+300,y+300);
    g.lineTo(x+300,y+200);
    g.lineTo(x+100,y+150);
    g.fill();
    g.closePath();

    g.beginPath();
    g.moveTo(x+300, y+200);
    g.lineTo(x+300, y+300);
    g.lineTo(x+400, y+250);
    g.lineTo(x+400, y+150);
    g.lineTo(x+350, y+100);
    g.lineTo(x+300, y+200);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath(); 
    g.moveTo(x+300, y+250);
    g.lineTo(x+325, y+235);
    g.lineTo(x+325, y+287.5)
    g.lineTo(x+325, y+235)
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.moveTo(x+137.5,y+225);
    g.lineTo(x+225, y+245);
    g.lineTo(x+245, y+200);
    g.lineTo(x+145, y+182.5);
    g.closePath();
    g.stroke();
    g.fill();