const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
 
 var engine,world; 
 var ground,ball;
 
 function setup() {
    createCanvas(400,400); 
    
     engine=Engine.create();
     world=engine.world; 
     
     ground=Bodies.rectangle(200,380,400,40); 
     World.add(world,ground);
      
    } 
    
    function draw() {
      
      background(0);
      
      Engine.update(engine); 
      
      rectMode(CENTER); 
      rect(ground.position.x,ground.position.y,400,40);
     
       }