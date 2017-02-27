var poo;
var car;

function preload() {
  poo = loadEmoji('💩');
  car = loadEmoji('🚙');
  gun = loadEmoji('🔫');
}

// get things set up here
function setup() {
  // create a full-screen canvas
  createCanvas(windowWidth, windowHeight);
  // only draw one frame
  noLoop();
}

// this is where the magic happens
function draw() {
  angleMode(DEGREES);
  
  translate(width/2, height/2);
  
  
  for(var i = 0; i < 10; i++) {
    rotate(36);
    console.log('draw poo', i);
    drawEmoji(poo, 0, 0, 50, 50); 
  }

  
  for(var i = 0; i < 10; i++) {
    rotate(36);
    console.log('draw poo', i);
    drawEmoji(car, 50, 0, 50, 50); 
  }
  
  
  resetMatrix();


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}