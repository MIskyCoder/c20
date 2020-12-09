var movingRect;

var fixedRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = 'purple';
  movingRect.shapeColor = 'purple';
  
  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)  {

    fixedRect.shapeColor = 'blue';
    movingRect.shapeColor = 'blue';
  }
  else {
    fixedRect.shapeColor = 'purple';
    movingRect.shapeColor = 'purple';
  }

  drawSprites();
}