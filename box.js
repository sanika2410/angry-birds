class Box{
    constructor(x,y,w,h){
        var options ={
            restitution:0.9
        
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,options);
        Matter.World.add(world,this.body)
        this.image = loadImage("assets/wood1.png")
        this.w = w ;
        this.h = h;

    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(255)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
        
    }
}