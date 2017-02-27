// declare variables here
var dog, cat, mouse, rabbit, panda, monkey, whale, blowfish, turtle;
var columns = 10;



function preload() {
  setEmojiPath('../assets/emoji/');

  // preload emojis here
  dog = loadEmoji('🐶');
  cat = loadEmoji('🐱');
  mouse = loadEmoji('🐭');
  rabbit = loadEmoji('🐰');
  panda = loadEmoji('🐼');
  monkey = loadEmoji('🐵');
  whale = loadEmoji('🐋');
  blowfish = loadEmoji('🐡');
  turtle = loadEmoji('🐢');

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
  	
  	// set number of columns based on window width
  	columns = floor(width / 50);
  	  
    // draw animal rows
	for(i = 0; i < columns; i++) {
      drawEmoji(dog, 50*i, 0, 50, 50);
      drawEmoji(cat, 50*i, 50, 50, 50);
      drawEmoji(mouse, 50*i, 100, 50, 50);
      drawEmoji(rabbit, 50*i, 150, 50, 50);
      drawEmoji(panda, 50*i, 200, 50, 50);
      drawEmoji(monkey, 50*i, 250, 50, 50);
	  drawEmoji(whale, 50*i, 300, 50, 50);
      drawEmoji(blowfish, 50*i, 350, 50, 50);
      drawEmoji(turtle, 50*i, 400, 50, 50);
	}
}

// adjust window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}