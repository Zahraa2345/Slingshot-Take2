const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block27, block28;
var polygon_1;
var platform_1, platform_2;
var chain_1;

function setup() {
  createCanvas(1900,1800);

  engine = Engine.create();
  world = engine.world;
  
  platform_1= new Ground(947,265,410,20);
  platform_2= new Ground(1020,645,20500,20);
  
  block1=new Box(795,250,30,30);
  block2=new Box(845,250,30,30);
  block3=new Box(895,250,30,30);
  block4=new Box(945,250,30,30);
  block5=new Box(995,250,30,30);
  block6=new Box(1045,250,30,30);
  block7=new Box(1095,250,30,30);
  block8=new Box(820,240,40,10);
  block9=new Box(870,240,40,10);
  block10=new Box(920,240,40,10);
  block11=new Box(970,240,40,10);
  block12=new Box(1020,240,40,10);
  block13=new Box(1070,240,40,10);
  block14=new Box(845,230,30,30);
  block15=new Box(895,230,30,30);
  block16=new Box(945,230,30,30);
  block17=new Box(995,230,30,30);
  block18=new Box(1045,230,30,30);
  block19=new Box(870,220,40,10);
  block20=new Box(920,220,40,10);
  block21=new Box(970,220,40,10);
  block22=new Box(1020,220,40,10);
  block23=new Box(895,210,30,30);
  block24=new Box(945,210,30,30);
  block25=new Box(995,210,30,30);
  block26=new Box(920,200,40,10);
  block27=new Box(970,200,40,10);
  
  
  
  polygon_1= new Polygon(300,180,20);
  chain_1= new Chain(polygon_1.body, {x:300, y:180});

  

}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  platform_1.display();
  platform_2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
 


  polygon_1.display();
  chain_1.display();

  detectcollision(polygon_1,block1);
  detectcollision(polygon_1,block2);
  detectcollision(polygon_1,block3);
  detectcollision(polygon_1,block4);
  detectcollision(polygon_1,block5);
  detectcollision(polygon_1,block6);
  detectcollision(polygon_1,block7);
  detectcollision(polygon_1,block8);
  detectcollision(polygon_1,block9);
  detectcollision(polygon_1,block10);
  detectcollision(polygon_1,block11);
  detectcollision(polygon_1,block12);
  detectcollision(polygon_1,block13);
  detectcollision(polygon_1,block14);
  detectcollision(polygon_1,block15);
  detectcollision(polygon_1,block16);
  detectcollision(polygon_1,block17);
  detectcollision(polygon_1,block18);
  detectcollision(polygon_1,block19);
  detectcollision(polygon_1,block20);
  detectcollision(polygon_1,block21);
  detectcollision(polygon_1,block22);
  detectcollision(polygon_1,block23);
  detectcollision(polygon_1,block24);
  detectcollision(polygon_1,block25);
  detectcollision(polygon_1,block26);
  detectcollision(polygon_1,block27);
  

  drawSprites();
}

function detectcollision(lball, lblock){
	
  ballBodyPosition=lball.body.position;
  blockBodyPosition=lblock.body.position;
  
  var distance=dist(ballBodyPosition.x, ballBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  if(distance<=lball.r+lblock){
  
  Matter.Body.setStatic(lblock.body, false);
  
  }
  
  } 

  function mouseDragged(){
        Matter.Body.setPosition(polygon_1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain_1.fly();
}

function keyPressed(){

  if (keyCode===82){
    Matter.Body.setPosition(polygon_1.body, {x:205, y:230})
    chain_1.attach(polygon_1.body);
  }
  
  }
  