var fixedRect, movingRect, rect1, rect2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.debug = true;
  movingRect.debug = true;

  rect1 = createSprite(800,100,30,20);
  rect2 = createSprite(800,700,40,30);

  rect1.velocityY = 3;
  rect2.velocityY = -3;

  
}

function draw() {
  background(0);  

  console.log(movingRect.x -fixedRect.x);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x -fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x -movingRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.y -movingRect.y < movingRect.height/2+fixedRect.height/2
    && movingRect.y -fixedRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

if(rect1.y-rect2.y < rect1.height/2 + rect2.height/2 && rect2.y-rect1.y < rect2.height/2+rect1.height/2){
rect1.velocityY = rect1.velocityY *(-1);
rect2.velocityY = rect2.velocityY * (-1);
}

if(rect1.x-rect2.x < rect1.width/2+rect2.width/2 && rect2.x - rect1.x < rect2.width/2+ rect1.width/2){
  rect1.velocityX = rect1.velocityX * (-1);
  rect2.velocityX = rect2.velocityX * (-1);
}

  drawSprites();
}