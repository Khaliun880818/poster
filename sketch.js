function setup(){
  createCanvas(windowWidth, windowHeight)
  background('white')
  fill('black')
	rect(width/2 - 250, height/2-300,500, 600)

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
textSize(14)
fill('#FFA3C4')
text("BLACKPINK", width/2 - 40, height/2 -240)
textSize(16)
textFont('HELVETICA')
textStyle(BOLD)
text('2018.06.15', width/2 - 40, height/2 +190)
text('1ST MINI ALBUM', width/2- 67, height/2 + 205)
textSize(36)
fill("gray")
text('SQUARE UP', width/2-103, height/2 - 190)

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

