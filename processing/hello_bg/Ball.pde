class Ball {

  Ball(){

  }
 float nudgeAmt = 100;
 float xnudge = 0;
 float ynudge = 0;
 float z = random(20,100);
 int d = 30;
 int r = d/2;
 float x = random(-2*width,2*width);
 float y = random(0-r,-1000);//0-r;
 float xspeed = 5;
 float yspeed = 5/((z+50)/61);

 void display(){
   noStroke();
   fill(map(z,0,100,50,220));
   ellipse(x, y, d,d);
 }
 void update(){
   xnudge = (map(mouseX,0,width,-(width/2),width/2)/nudgeAmt)/(z/100);
   ynudge = (map(mouseY,0,height,-(height/2),height/2)/nudgeAmt)/(z/10);
   x = x + xnudge;
   y = floor(y + yspeed+ ynudge);
 }
 
}
