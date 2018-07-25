Ball b;
int amt = 200;
ArrayList<Ball> balls = new ArrayList<Ball>();

void setup(){
  size(1000,500); 
  //b = new Ball();
    for (int i = 0; i < amt; i++){
    balls.add(new Ball());
    Ball temp = balls.get(i);
    temp.y = random(height);
    temp.update();
    
    }

}

void draw(){
  background(230);
  //b.update();
  //b.display();
  
  for (int i = 0; i < balls.size(); i++){
    balls.get(i).update();
    balls.get(i).display();
    if (balls.get(i).y > (height+balls.get(i).r) ){
      balls.remove(i);
      i--;  // Stops flickering due to arraylist shifting
    }
  }
  if (balls.size() < amt){
    balls.add(new Ball());
    
  }
  
  
  
}
