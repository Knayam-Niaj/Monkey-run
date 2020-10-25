
var monkey , monkeyMove;
var banana ,bananaImage, foodGroup;
var obstacle, obstacleImage1, obstacleImage2, obstacleGroup;
var score = 0, choice;
var ground, groundImage, invisibleGround;

function preload(){
  
  
  monkeyMove =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage1 = loadImage("obstacle.png");
  obstacleImage2 = loadImage("bench.png");
  
  groundImage = loadImage("grass.png");
}



function setup() {
  createCanvas(500, 300);
  
  ground = createSprite(300, -100, 600, 40);
  ground.addImage("Image", groundImage);
  ground.scale = 5;

  
  invisibleGround = createSprite(300, 285, 600, 10);
  invisibleGround.visible = false;
  
  monkey = createSprite(80, 230, 20, 20);
  monkey.addAnimation("monkeyMove", monkeyMove);
  monkey.scale = 0.1;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
 background("lightblue");
  
  
 
  score = score + Math.round(getFrameRate()/60);
  
  ground.velocityX = -10;
  if(ground.x<0){
    ground.x = 300;
  }
  
  if(keyDown("space")&&monkey.y >= 230) {
      monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  food();
  obstacles();
  
  monkey.collide(invisibleGround);
  drawSprites();
  text("SURVIVAL TIME: "+score, 20, 20);
}


function food(){
  if(frameCount%80===0){
    banana = createSprite(510, random(120, 200), 10, 10);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -10;
    banana.lifetime = 50;
    
    foodGroup.add(banana);
  }
  
  
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(510, 250, 30, 30);
    choice = Math.round(random(1, 2));
    
    switch(choice){
      case 1: obstacle.addImage("obstacle1", obstacleImage1);
      obstacle.scale = 0.2;
      break;  
      
      case 2: obstacle.addImage("obstacle2", obstacleImage2);
      obstacle.scale = 0.5;  
      break;  
    }
    
    
    
    obstacle.velocityX = -10;
    obstacle.lifetime = 55;
    
    obstacleGroup.add(obstacle);
  }
  
}

