const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain = [];
var object;
var light;
var objectX;

function preload(){
    light = loadImage('lightening.png');
}
function setup(){
    var canvas = createCanvas(1280,605);
    engine = Engine.create();
    world = engine.world;
    objectX = -25;
    object = new Umbrella(objectX,560);
}
function draw(){
    background(0);

    noStroke();
    textSize(35)
    fill("white")
    text("Use Right Arrow Key To Move Bruce",640,300);
    
    Engine.update(engine);

    rain.push(new Rain(random(0,1280),0,random(2,7)));
    if(frameCount % 60 == 0){
        image(light,random(280,1080),random(0,10),100,180);
    }
    for(var x = 0;x < rain.length; x++){
        rain[x].display();
    }
    object.display();
}
function keyPressed(){
    if(keyCode === 39 ){
       objectX = objectX + 5;
       Matter.Body.setPosition(object.body,{x:objectX, y:560});
    }
}
