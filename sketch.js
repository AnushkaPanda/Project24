
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumbledpaper,box,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;
	var options={
	 isStatic:true	
	}
	
	//Create the Bodies Here.
	crumbledpaper = Bodies.circle(width/2,100,20,options)
	World.add(world,crumbledpaper);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box = new Box(1200,350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  box.display();
  ellipse(RADIUS);
  ellipse(crumbledpaper.position.x,crumbledpaper.position.y,20)
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumbledpaper.body,crumbledpaper.body.position,{x:85,y:-85});
		
	 }
   }


