//I tried the class method, however it didn't work, so I manually did it

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var a = 0
var b = 0;
var open_lid, closed_lid;
var left, right;
var ground, top_wall;
var ball, ball_options, ground_options;


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;


  ball_options = {
    restitution: 0.45,
    friction:0,
    density:0.8
  };
  ball = Bodies.circle(40,150,15,ball_options);
  World.add(world, ball);

  ground_options = {
    isStatic:true
  };
  ground = Bodies.rectangle(300,390,800,20,ground_options);
  World.add(world, ground);
  
  var walls_options = {
    isStatic:true
  };
  wall1 = Bodies.rectangle(340,340,20,80,walls_options);
  World.add(world, wall1);

  wall2 = Bodies.rectangle(460,340,20,80,walls_options);
  World.add(world, wall2);

  open_lid = Bodies.rectangle(510,190,20,140,ground_options);
  World.add(world, open_lid);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  rectMode(CENTER);
  fill(150);
  rect(300,390,600,20);
  rect(340,340,20,80);
  rect(460,340,20,80);

  if(b===0)
  {
    rect(510,190,20,140);
  }
  fill(255);
  ellipse(ball.position.x, ball.position.y, 15);

  if(keyDown(UP_ARROW) && a===0)
  {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:17,y:-20});
    a++;
  }

  if(ball.position.x>340 && ball.position.x<460 && ball.position.y>350)
  {
    b++;
  }

  if(b>0)
  {
    closed_lid = Bodies.rectangle(400,290,140,20,ground_options);
    World.add(world,closed_lid);
    fill(150);
    rect(400,290,140,20);
    ball_options = {
      restitution: 0.45,
      friction:1,
      density:0
    }

  }
  Engine.update(engine);

}
