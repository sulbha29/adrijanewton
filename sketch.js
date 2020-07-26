
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  bob1 = new Bob(460,400,20);
  bob2 = new Bob(200,400,20);
  bob3 = new Bob(300,400,20);
  bob4 = new Bob(350,400,20)
	//Create the Bodies Here.

	
    //var option = {
     //   restitution: 0.8
   // }

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
//bob4.display();


 
}



