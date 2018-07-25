
var m = 0;




let balls = [];
var amt = 75;
function setup() {




  //var initHeight = windowHeight/2.5;
  // put setup code here
  hello_canv = createCanvas(windowWidth,windowHeight/2);
  hello_canv.class("hello_canv");
  hello_canv.parent("hello_cont");

  


  for (var i = 0; i < amt; i++){
    var z = map(i, 0, amt, amt,0);
    var z = map(z, amt, 0, 100, 20)
    balls[i] = new Ball(z);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight/2, false);
}
class Ball {

    constructor(z1){
        this.d = 30;
        this.r = this.d/2;
        this.z = z1;
        this.nudgeAmt = 300;
        this.xNudge = 0;
        this.yNudge = 0;
        this.x = random(0, width);
        this.y = random(0, height);
        this.yspeed = 0.4/((this.z)/20);
    }
    show () {
        noStroke();
        fill(map(this.z,0,100,50,220));
        ellipse(this.x, this.y, this.d,this.d);
    }
    move (){
        this.xNudge = map(mouseX,0,width,-5,5);
        this.yNudge = map(mouseY,0,height,-0.5,0.5);
        this.x = this.x + this.xNudge;
        this.y = this.y  + this.yspeed + this.yNudge;

    }
}

function draw() {

  // put drawing code here
  background(230);
  //print(balls[0].y);
  for (var i = 0; i < amt; i++){
    balls[i].show();
    balls[i].move();

    if (balls[i].y > height+ balls[i].d){
        balls[i].y = random(0-balls[i].r,-1000);
    }
    if (balls[i].x > width+ balls[i].d){
        balls[i].x = 0-balls[i].r;
    }
    if (balls[i].x < 0-balls[i].r){
        balls[i].x = width+balls[i].r;
    }
    

  }
}




