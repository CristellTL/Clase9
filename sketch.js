var ball;

function setup() {
  createCanvas(600,600);
  ball = createSprite(300,300);
}

function draw() 
{
  background("pink");
  
  if(keyDown(UP_ARROW)){
    ball.y = ball.y -5;
  }

  if(keyDown(DOWN_ARROW)){
    ball.y = ball.y +5;
  }

  drawSprites();
}




