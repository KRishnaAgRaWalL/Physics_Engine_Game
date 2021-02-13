/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
*/
var canvas;
var music;
var box1, box2, box3, box4;
var ball;



function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
   box1 = createSprite(75,495,140,10)
   box1.shapeColor = ("green")
   
   box2 = createSprite(225,495,140,10)
   box2.shapeColor = ("blue")

   box3 = createSprite(375,495,140,10)
   box3.shapeColor = ("red")

   box4 = createSprite(525,495,140,10)
   box4.shapeColor = ("Black")

   //create The bouncy ball with the velocity
   ball = createSprite(Math.round(random(20,600)),100,30,30)

   
  

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges)
  
           //the setting
           if(box1.isTouching(ball)  &&  ball.bounceOff(box1)){
            ball.shapesColor = ("green")
            
            ball.bounceOff(box1)
            music.play();
           }
          
           if(box2.isTouching(ball)){
               ball.shapeColor = ("blue")
               ball.bounceOff(box2)
              music.stop();
           }
       
           if(box3.isTouching(ball) &&  ball.bounceOff(box3) ){
               ball.shapeColor = ("red")
               
               ball.bounceOff(box3)
           }
       
           if(box4.isTouching(ball)){
               ball.shapeColor = ("black")
               ball.velocityX = 0
               ball.velocityY = 0
           }

    drawSprites();
    }

    function keyPressed(){
        if(keyCode === LEFT_ARROW){
           ball.x = ball.x - 10;
        }
        else if(keyCode === RIGHT_ARROW){
            ball.x = ball.x + 10;
        }
        else if(keyCode === UP_ARROW){
          ball.y = ball.y - 10
        }
        else if(keyCode === DOWN_ARROW){
            ball.y = ball.y + 10
        }
    }