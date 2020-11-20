var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(displayWidth - 20, displayHeight-30); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    textFont("Times New Roman");
    textSize(55);
    noStroke();
    fill("white");
    text("DIGITAL CLOCK APP", 600,190);

    textSize(25);
    noStroke();
    fill(0,0,255);
    text("BLUE = HOUR", 600,290);

    textSize(25);
    noStroke();
    fill(255,0,0);
    text("RED = SECOND", 600,370);

    textSize(25);
    noStroke();
    fill(0,255,0);
    text("GREEN = MINUTES", 600,330);

    textSize(19);
    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("12", 195,90);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("1",250,110);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("2",290,150);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("3", 310,205);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("4",290,260);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("5",250,295);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("8",90,260);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("7",135,295);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("9", 80,205);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("10",90,150);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("11",135,110);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    text("6", 195,310);

    textSize(40);
    textFont("Times New Roman");
    fill("yellow");
    text("Time: "+hr+": "+mn+": "+sc,100,400);
    

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(2);
    line(0,0,100,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(5);
    line(0,0,85,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(2);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    strokeWeight(5);
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
  // strokeWeight(5);
   //stroke(0,255,0);
  
}
