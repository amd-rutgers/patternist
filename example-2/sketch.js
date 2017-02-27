// declare variables here
var ex;
var oh;
var no;
var symbols;


function preload() {
  setEmojiPath('../assets/emoji/');  
  
  // load our emojis
  ex = loadEmoji('❌');
  no = loadEmoji('🚫');
}

// get things set up here
function setup() {
  // create a full-screen canvas
  createCanvas(windowWidth, windowHeight);
  // only draw one frame
  noLoop();
  
  symbols = [ex, no];
}

// this is where the magic happens
function draw() {
  var i, j;
  var randIndex;
	
  // two-dimensional grid
  for(i = 0; i < 8; i++) {
      for(j = 0; j < 8; j++) {
          randIndex = floor(random(symbols.length));
          drawEmoji(symbols[randIndex], 75*i, 75*j, 75, 75);
      }
  }


}

// adjust window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}