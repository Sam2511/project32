const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1 ,ground2;
var score = 0;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    hex = new Hexa(100,400,50);

    sling = new Slingshot(hex.body,{x:100, y:400});
    
    ground1 = new Ground(350,500,250,10);
    ground2 = new Ground(500,300,250,10);
    ground3 = new Ground(400,650,800,100);

    box1 = new Box(295,498,25,25);
    box2 = new Box(315,498,25,25);
    box3 = new Box(335,498,25,25);
    box4 = new Box(355,498,25,25);
    box5 = new Box(375,498,25,25);
    box6 = new Box(395,498,25,25);
    box7 = new Box(315,498,25,25);
    box8 = new Box(335,498,25,25);
    box9 = new Box(355,498,25,25);
    box10 = new Box(375,498,25,25);
    box11 = new Box(335,495,25,25);
    box12 = new Box(355,495,25,25);
    box13 = new Box(345,450,25,25);


    box14 = new Box(445,298,25,25);
    box15 = new Box(465,298,25,25);
    box16 = new Box(485,298,25,25);
    box17 = new Box(505,298,25,25);
    box18 = new Box(465,296,25,25);
    box19 = new Box(485,296,25,25);
    box20 = new Box(475,252,25,25);



    
   
 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if( background(255,0,0)){
    background(255,0,0);
  }
  else {background(255,255,255)};

  textSize(35)
  fill("white");
  text("Score:"+ score, 550,40);

  hex.display();
  ground3.display();

  sling.display();

  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();



    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
 


  
  drawSprites();
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(hex.body, {x:100,y:400});
		sling.attach(hex.body);
}


}


function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


/*async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();     //extracts the data in json format

  console.log(responseJSON);

  var dt = responseJSON.datetime;
  //console.log(dt);

  var hour = datetime.slice(12, 13);
  console.log(hour);

  if(hour>=07 && hour<=18){
    background(255,255,255);
  }
  else
  {background(255,0,0);}
}*/





































