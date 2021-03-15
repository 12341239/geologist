const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    
    pig1 = new Pig(810, 350);
    

  
    
    

   

    bird = new Bird(200,200);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box1.body.position.x);
    console.log(box1.body.position.y);
    console.log(box1.body.angle);
    
    
    ellipse();

    ellipse(56, 46, 55, 55);
    
    
    
    box1.display();
    
    
    
    
    
    ground.display();
    pig1.display();
    

    bird.display();
}