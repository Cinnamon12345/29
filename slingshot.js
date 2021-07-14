class Slingshot{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    fly(){
        this.sling.bodyA = null;
    }
        
    attach(body){
        this.sling.bodyA=body;
            
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img,polygon.position.x,polygon.position.y,40,40)
        rect(0,0,this.width, this.height);
        pop();
      }
}