
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paperball,bin1,bin2,bin3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
    ground=new Ground(400,470,1300,20)
	paperball=new Paper(30,440,30)
    bin1=new Ground(745,380,20,170)
	bin2=new Ground(875,420,20,80)
	bin3=new Ground(810,460,150,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperball.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}



