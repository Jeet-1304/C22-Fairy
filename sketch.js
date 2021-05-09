var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fairyimg = loadAnimation("images/fairyimage1.png","images/fairyimage2.png");
	sound = loadSound("sound/JoyMusic.mp3");


}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	sound.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(200,500);
	fairy.addAnimation("flying",fairyimg);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	starbody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starbody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starbody.position.x 
  star.y= starbody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 450 && starbody.position.y > 450){
	  Matter.Body.setStatic(starbody,true);
	
	}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starbody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode == RIGHT_ARROW){
		fairy.x=fairy.x+10;
	}
	if(keyCode == LEFT_ARROW){
		fairy.x=fairy.x-10;
	}
}
