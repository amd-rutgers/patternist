// declare variables here
var dog;
var cat;
var mouse;
var rowTop;



function preload() {
  setEmojiPath('../assets/emoji/');

  // preload emojis here
  dog = loadEmoji('🐶');
  cat = loadEmoji('🐱');
  mouse = loadEmoji('🐭');
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
    var i = 0;
    var animals = [dog, cat, mouse];
    var randIndex;
  	
    // drawEmoji(emoji, x, y, width, height)
  
    // draw animal rows
	for(i = 0; i < 8; i++) {
      // draw dogs row
      drawEmoji(dog, 100 + 50*i, 100, 50, 50);
      // draw cats row
      drawEmoji(cat, 100 + 50*i, 150, 50, 50);
      // draw mice row
      drawEmoji(mouse, 100 + 50*i, 200, 50, 50);
	}
  
  
    // draw random animals
    for(i=0; i < 8; i++) {
      
      // get random index from animals array
      randIndex = floor(random(animals.length));
      
      // draw random emoji
      drawEmoji(animals[randIndex], 100 + 50*i, 250, 50, 50);
    }
}

// adjust window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}