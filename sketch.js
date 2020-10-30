var movingrect,fixedrect;
function setup() {
 createCanvas(800,400);
movingrect=createSprite(400, 200, 50, 50);
movingrect.shapeColor="black"
movingrect.debug=true
fixedrect=createSprite(400, 200, 50, 50);
fixedrect.shapeColor="black"
fixedrect.debug=true
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2
    &&fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2){
   movingrect.shapeColor="pink"
   fixedrect.shapeColor="pink"
  }
else{
  movingrect.shapeColor="black"
  fixedrect.shapeColor="black" 
}
  drawSprites();
}