const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ball;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var ball_options={
    restitution: 1.0
  }
  ball = Bodies.circle(200,100,50,ball_options);
  World.add(world,ball);


}

function draw() {
  background("Blue");  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);


  drawSprites();
}