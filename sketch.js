var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 100, 40, 60);
  movingrect = createSprite (400,200,60,40);
  fixedrect.shapeColor = "Red"
  movingrect.shapeColor = "lightblue"
  
}

function draw() {
  background("black");  
  drawSprites();
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  if (movingrect.x-fixedrect.x<movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.y-movingrect.y<movingrect.height/2 + fixedrect.height/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2 + fixedrect.height/2) {
    movingrect.shapeColor = "lightgreen"
    fixedrect.shapeColor = "orange"
     
  } else {
    fixedrect.shapeColor = "Red"
  movingrect.shapeColor = "lightblue"
  }
}