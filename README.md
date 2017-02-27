Patternist
==========

Use p5.js and emojis to create a 2d composition.

* Use at least 5 emoji symbols
* Use at least 1 `for` or `while` loop
* If using the examples as reference, **no copy/pasting of code** please! You shoud write it out yourself.

Examples
---------

* [Example 1](https://amd-rutgers.github.io/patternist/example-1/) - Basic looping ([code](example-1/sketch.js))
* [Example 2](https://amd-rutgers.github.io/patternist/example-2/) - 2D `for` loop and randomization ([code](example-2/sketch.js))
* [Example 3](https://amd-rutgers.github.io/patternist/example-3/) - `while` loop and radial pattern ([code](example-3/sketch.js))

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

Directory structure
-------------------

In order for this to work, you'll need to make sure the images are in the right place. By default the emoji plugin uses the following structure:

```
/
  index.html
  sketch.html
  assets/
    emoji/
      [images...]

```

If for some reason you need to change this structure, you can use `setEmojiPath`:

```js
setEmojiPath('../assets/emoji/');
```
