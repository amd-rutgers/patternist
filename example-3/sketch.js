// declare variables here
var evergreen;
var deciduous;
var palm;
var deg;
var increment;


function preload() {
  setEmojiPath('../assets/emoji/');  
  
  // load our trees
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
  // we want to use degrees for angles, not radians
  angleMode(DEGREES);
  
  // set our degrees to 0
  deg = 0;
  increment = 30;
  
  // move to 1/4 of the canvas width, 1/2 canvas height
  translate(width/4, height/2);
  
  // keep repeeting whild deg is less than 360
  while(deg < 360) {
    
    // rotate the matrix by the increment
    rotate(increment);
    // draw the evergreen emoji within transform matrix
    drawEmoji(evergreen, 0, 10, 50, 50);
    // update degrees
    deg = deg + increment;
  }
  
  // reset back to normal!
  resetMatrix();
  
  
  // same thing below, with different
  // increment and position
  
  deg = 0;
  increment = 60;  
  
  translate(width/2, height/2);
  while(deg < 360) {
    rotate(increment);
    drawEmoji(deciduous, 0, 10, 50, 50);
    deg = deg + increment;
  }
  resetMatrix();

  // same thing below, with different
  // increment and position  
  
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