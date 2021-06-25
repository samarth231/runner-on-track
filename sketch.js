var path;
var runner;
var invisible_wall1, invisible_wall2
var edges

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png"); 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200, 200, 200)
  track.addImage("track",  pathImg);

  runner = createSprite(140, 200, 50, 50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.1

  edges = createEdgeSprites();

  invisible_wall1 = createSprite(70, 200, 5, 400);
  invisible_wall1.visible = false;
  invisible_wall1.shapeColor = "white";

  invisible_wall2 = createSprite(340, 200, 5, 400);
  invisible_wall2.visible = false;
  invisible_wall2.shapeColor = "white";
  

}

function draw() {
  background(0);
  track.velocityY = 3;
  console.log(track.y);

  if (track.y > 400){
    track.y = 200/2;

  }

  runner.x = mouseX;

  runner.collide(invisible_wall1);
  runner.collide(invisible_wall2);

  drawSprites();
}
