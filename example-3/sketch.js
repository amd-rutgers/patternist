// declare variables here
var evergreen;
var deciduous;
var palm;
var deg;
var increment;


function preload() {
  setEmojiPath('../assets/emoji/');  
  
  evergreen = loadEmoji('🌲');
  deciduous = loadEmoji('🌳');
  palm = loadEmoji('🌴');

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
  
  deg = 0;
  increment = 30;
  
  translate(width/4, height/2);
  while(deg < 360) {
    rotate(increment);
    drawEmoji(evergreen, 0, 10, 50, 50);
    deg = deg + increment;
  }
  resetMatrix();
  
  deg = 0;
  increment = 60;  
  
  translate(width/2, height/2);
  while(deg < 360) {
    rotate(increment);
    drawEmoji(deciduous, 0, 10, 50, 50);
    deg = deg + increment;
  }
  resetMatrix();

  deg = 0;
  increment = 120;    
  
  translate(width/4 * 3, height/2);
  while(deg < 360) {
    rotate(increment);
    drawEmoji(palm, 0, 10, 50, 50);
    deg = deg + increment;
  }
  resetMatrix();
  
}

// adjust window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}