const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,50,groundOptions);
  World.add(world,ground);
}

function draw() {
  background("yellow"); 
  
  Engine.update(engine);

  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
}