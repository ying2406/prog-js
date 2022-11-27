class App
{
    runapplication()
    {
        let canvas = document.getElementById("CanvasId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10)

        //g.beginPath();
        //g.moveTo(20, 20);
        //g.lineTo(300, 300);
        //g.closePath();
        //g.stroke();

        //g.beginPath();
        //g.fillStyle = "yellow";
        //g.moveTo(20, 20);
        //g.lineTo(300, 300);
        //g.lineTo(580, 20);
        //g.closePath();
        //g.stroke();
        //g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.lineTo(30, 10);
        g.lineTo(20, 30);
        g.lineTo(60, 40);
        g.lineTo(70, 20);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "red";
        g.lineTo(20, 30);
        g.lineTo(20, 50);
        g.lineTo(60, 60);
        g.lineTo(60, 40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(60, 40);
        g.lineTo(60, 60);
        g.lineTo(80, 50);
        g.lineTo(80, 30);
        g.lineTo(70, 20);
        g.lineTo(60, 40);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);

    }
}

let app = new App();
app.runapplication();