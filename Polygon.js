class Polygon {

    constructor(x, y, r){
   
       var options= {
         isStatic: false,
         restitution: 0,
         friction: 1,
       }
   
       this.body=Bodies.circle(x, y, r, options);
       this.radius= r;
       World.add(world,this.body);
   
    }
   
    display(){
       
       var pos= this.body.position;
       var ang= this.body.angle;
       
       // this.body.position.x=mouseX;
       //this.body.position.y=mouseY;

       push();
       translate(pos.x,pos.y);
       rotate(ang)
       ellipseMode(RADIUS);
       fill("blue");
       ellipse(0, 0, this.radius, this.radius);
       pop();
       }
    }