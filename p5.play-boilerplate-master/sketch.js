var hr = hour();
var mn = minute();
var sc = second();
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,400)

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);

}

function draw() {
  background(0);  

  push();
  rotate(scAngle);
  stroke("blue");
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 80));
  line(0,0,200,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 100));
  strokeWeight(7);
  line(0,0,300,0);
  pop();

  
}
