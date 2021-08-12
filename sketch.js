
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,200,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  if (keyDown(UP_ARROW)){
	  paper.body.position.y=paper.body.position.y-1;

  }
  if (keyDown(DOWN_ARROW)){
	  paper.body.position.y=paper.body.position.y+1;
  }
  if (keyDown(LEFT_ARROW)){
	  paper.body.positionx=paper.body.position.x-1;
  }
  if (keyDown(RIGHT_ARROW)){
	  paper.body.position.x=paper.body.position.x+1;
  }

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

