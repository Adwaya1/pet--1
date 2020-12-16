//Create variables here


var dog;

var happyDog;

var database;

var foodS;

var foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");

  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  
   // dog = creatSprite(250,250,30,30);
   // dog.addImaage("dogImg.png");

  
  
}


function draw() {  
    background(46,139,87);
  drawSprites();
  //add styles here
  text("press up arrow to feed dog the milk");
  fill("red");
  textSize("2");
  






}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }


  database.ref('/').update({
    Food:x
  })
}

