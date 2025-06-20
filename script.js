function setup()
{
    createCanvas(600,600);
    background(220);
    translate(width/2, height/2)
    drawAxesWithTicks();
    /*point();*/
}

function draw()
{
    line(-400,-400,400,400);
        if (mouseIsPressed)
        {
        ellipse(mouseX, mouseY, 5, 5)
        }
    /*rect(0,0,100,100)
    rect(100,100,100,100)
    rect(200,200,100,100)
    rect(300,300,100,100)*/
}

function point()
{
    stroke(0);
    strokeWeight(5);
    point(50,50);
}

function drawAxesWithTicks()
{
    stroke(0);
    strokeWeight(2);

    line(-400,0,400,0);

    line(0,-400,0,400);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);

    for(let x = -400; x <= 400; x+= 10) {
        stroke(0);
        strokeWeight(x % 50 === 0 ? 2 : 1);
        line(x, -5, x, 5);
        if (x !== 0 && x % 50 === 0)
        {
            noStroke();
            text(x,x,15);
        }
    }

    for(let y = -400; y <= 400; y+= 10) {
        stroke(0);
        strokeWeight(y % 50 === 0 ? 2 : 1);
        line(-5,y,5,y);
        if (y !== 0 && y % 50 === 0)
        {
            noStroke();
            text(-y, -15, y);
        }
    }
}