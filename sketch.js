function setup(){
  createCanvas(windowWidth, windowHeight)
  background('white')

}

function draw() {
noStroke();
fill("#FFA3C4");
// left sq
beginShape();
vertex(590, 200);
vertex(680, 180);
vertex(680, 320);
vertex(590, 300);
endShape(CLOSE);
fill("#F296B8")
//right sq
beginShape();
vertex(680, 180);
vertex(770, 200);
vertex(770, 300);
vertex(680, 320);
endShape(CLOSE);
stroke('black')

fill('black')
line(590, 233, 680, 226.6)
line(590, 266, 680, 273.3)
line(680, 226.6, 770, 233)
line(680, 273.3, 770, 266)
line(615, 193.3, 615, 306.6)
line(650, 186.6, 650, 313.4)
line(710, 186.6, 710, 313.4)
line(745, 193.3, 745, 306.6)
}

