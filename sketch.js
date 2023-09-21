var myParagraph;
var newParagraph;
var img;
let button;
let slider;
let gleep = true;
let greem = color(100, 230, 50)

function setup() {
   
  myParagraph = createP("EEP");
  myParagraph.position(0, 0);
  myParagraph.mouseClicked(makeRed);
  newParagraph = createP("gleep");
//   newParagraph.style("color", greem)
  button = createButton('gloop');
  button.mouseClicked(changenewParagraph);
  let img = createImg('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alien.png/435px-Alien.png',
  'the alien')
  img.position(200, 100);
  img.size(150, 150)
  slider = createSlider(0, 255, 100)
  slider.position(25, 250)
createP("ive been screwing around with this thing for hours and i am utterly incapable of understanding it or getting it to do what i want to do im trying my best AHHHHHHHH")
}

function draw () {
   myParagraph.position(winMouseX, winMouseY);
   let val = slider.value();
   let x = val
   background(x);
   newParagraph.style('font-size', 'val')
   if (gleep) {
      // newParagraph.style("color", greem)
   }
   // newParagraph.style(greem)
}

function changenewParagraph() {
   if (gleep) {
      gleep = false;
   } else {
      gleep = true;
   }
}

// function changePicture() {
//    img.position(250,150);
// }

function makeRed() {
  myParagraph.style("color", "red");
}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus") The value of the paragraph's position is twice the value of the frame rate.
1. Where, in the p5 reference, do we find all this DOM stuff? Scroll down past shape, it's right after structure.
2. Why is the text so large when it's just a "paragraph"? That's the default size?
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed? I typed style in the search, and found other attributes like font size, position, etc.

Some Things to Try:
0. Make the text follow the mouse pointer !
1. Make a button !
2. Make the button affect the style or position of some text !
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference? !
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/