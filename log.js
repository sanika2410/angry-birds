class Log{
    constructor(x,y,w,h,angle){
        var options={
            restitution:0.9,
            friction:1.0,
            density:1.0
        }
        
this.body = Matter.Bodies.rectangle(x,y,w,h,options)
this.w = w;
this.h=h;
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
this.image = loadImage("assets/wood2.png")
    }
    show(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    angleMode(RADIANS)
    rotate(angle)
    fill(255)
    imageMode(CENTER)
    
    image(this.image,0,0,this.w,this.h)
    pop()
    
    }
}