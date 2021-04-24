class Paper{
constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("purple");
    ellipse(0, 0, this.width, this.height);
    pop();
}
}