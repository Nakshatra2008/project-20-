var car,wall;
var speed,weight;
var deformation;
var state = 1

function setup() {
  createCanvas(800,400);

  car = createSprite(20, 200, 50, 50);
car.shapeColor = "white";

wall = createSprite(width - 150,200,50,150);



}

function draw() {
  background(0,0,0);  


 if(state){
  speed = random(50,99);
  weight = random(450,1500);

  car.velocityX = speed;

 deformation = (0.5*weight*speed*speed)/22500


if(car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car.x < wall.width/2 + car.width/2
   && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
     state = 0
      car.shapeColor = "blue"
      console.log("touched")
      car.velocityX=0

      if(deformation<80){
        car.shapeColor = "green"
      }
      else if(deformation>=80 && deformation< 180){
        car.shapeColor = "yellow"
      }
      else{
        car.shapeColor ="red"
      }
    }
 }
 


  drawSprites();
}