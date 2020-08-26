var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="yellow";
 movingRect.velocityX=-4;
 movingRect.velocityY=4;
fixedRect= createSprite(400,100,50,50);
fixedRect.shapeColor="yellow";
fixedRect.velocityX=4;
fixedRect.velocityY=-4;
}

function draw() {
  background(25,25,25);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (movingRect.x - fixedRect.x<movingRect.width/2 + fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2 + fixedRect.width/2&&
    movingRect.y - fixedRect.y<movingRect.height/2 + fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="orange";
  }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  if (movingRect.x - fixedRect.x<movingRect.width/2 + fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2 + fixedRect.width/2) {
      movingRect.velocityX=movingRect.velocityX * (-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }

    if (movingRect.y - fixedRect.y<movingRect.height/2 + fixedRect.height/2&&
      fixedRect.y-movingRect.y<movingRect.height/2 + fixedRect.height/2 ) {
        movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1);
      }
  drawSprites();
}