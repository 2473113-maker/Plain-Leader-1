let ghostX = 200;
let ghostY = 180;
let score = 0;
let time = 30;
let gameStarted = false;
let startTime;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Purple and black background
  background(15, 5, 25);

  // Purple moon
  fill(255, 255, 255);
  ellipse(320, 80, 65, 65);

  // Cover part of the moon
fill(15, 5, 25);
ellipse(310, 75, 60, 60);

  // Stars
  fill(255);
  noStroke();
  ellipse(50, 60, 3, 3);
  ellipse(100, 120, 3, 3);
  ellipse(250, 40, 3, 3);
  ellipse(370, 180, 3, 3);
  ellipse(180, 80, 3, 3);

  // Ground
  fill(50, 15, 70);
  rect(0, 350, 400, 50);

  if (!gameStarted) {
    fill(220, 150, 255);
    textAlign(CENTER);
    textSize(30);
    text("GHOST HUNT", 200, 160);

    fill(255);
    textSize(17);
    text("Click to start!", 200, 210);
    return;
  }

  // Timer
  time = 30 - floor((millis() - startTime) / 1000);

  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("Score: " + score, 15, 30);
  text("Time: " + max(0, time), 300, 30);

  // Ghost
  drawGhost(ghostX, ghostY);

  if (time <= 0) {
    gameStarted = false;
    fill(220, 150, 255);
    textAlign(CENTER);
    textSize(25);
    text("GAME OVER!", 200, 160);
    textSize(18);
    fill(255);
    text("Final score: " + score, 200, 200);
    text("Click to play again", 200, 240);
  }
}

function drawGhost(x, y) {
  // Ghost body
  fill(240, 220, 255);
  ellipse(x, y, 55, 60);

  // Ghost bottom
  triangle(x - 27, y + 10, x + 27, y + 10, x, y + 40);

  // Eyes
  fill(20, 5, 30);
  ellipse(x - 10, y - 5, 7, 12);
  ellipse(x + 10, y - 5, 7, 12);
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
    score = 0;
    startTime = millis();
    ghostX = random(50, 350);
    ghostY = random(100, 320);
  } 
  else if (dist(mouseX, mouseY, ghostX, ghostY) < 35) {
    score++;
    ghostX = random(50, 350);
    ghostY = random(100, 320);
  }
}
