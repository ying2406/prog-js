class App
{
    runApplication()
    {   
        FunctiionDraw()
        ctx.beginPath();
        var centreX = Math.random() * 1000;
        var centreY = Math.random() * 1000;
        var radius = 75;
        var startAngle = 0 * Math.PI/180;
        var endAngle = 360 * Math.PI/180;
        ctx.arc(centreX,centreY,radius,startAngle,endAngle,false);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    let app = new App();
    app.runApplication();   