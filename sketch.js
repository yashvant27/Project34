//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImage,happydogImage;
function preload()
{
  //load images here
  dogImage=loadImage("Dog.png");
  happydogImage=loadImage("happydog.png");
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250, 300, 10,10);
	dog.addImage(dogImage)
  dog.scale=0.15
foodStock=database.ref('Food')
foodStock.on("value",readStock) 

}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImage)
  
}
fill('white')
textSize(20)
text('press up arrow to feed your dog',130,10)
text('food remaining'+foodS,170,150)
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
 
}
function readStock(data){
  foodS=data.val()
}