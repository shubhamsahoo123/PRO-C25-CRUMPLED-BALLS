var drops = [];

function setup() {
  createCanvas(1500,600);
  frameRate(20);

  for(var a=0;a<100;a++){
    drops.push(new Drop());
  }
}

function draw() {
  background(0,100);  

  for(var a=0;a<drops.length;a++){
    drops[a].draw();
    drops[a].update();
  }
}