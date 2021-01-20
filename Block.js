class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = 255;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<5){
      fill("blue")
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
      else{
        push();
        World.remove(world,this.body);
        this.visible = this.visible-5;
        tint(255,this.visible);
        pop();
        
       
      }
      
   
    }

    score(){
      if (this.visible < 0 && this.visible > -15){
        score = score+100;
      }
    }
  };
  