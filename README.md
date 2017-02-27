Patternist
==========

Use p5.js and emojis to create a 2d pattern.

* Use at least 5 emoji symbols
* Use at least 1 `for` or `while` loop


Including emojis
----------------

I wrote a little tool for including emoji symbols with p5 (have a look at the [source](libraries/p5.emoji.js) if you're curious). Here's how you use it:


Declare variables for your emojis at the top of the sketch:

```js
var peep;
```

Then you'll need to load the emoji with `loadEmoji` in the `preload` function (note that the symbol is between quote marks):

```js
function preload() {
  peep = loadEmoji('🐥');
}
```

Finally you can use `drawEmoji` to draw the emoji symbol. `drawEmoji` takes the same arguments as p5's [`image` function](http://p5js.org/reference/#/p5/image).


```js
function draw() {
  drawEmoji(peep, width/2, height/2, 30, 30);
}
```

Examples
---------