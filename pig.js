class Pig{


    constructor(x,y,r){
        var options = {
            restitution:0.9
        }
        this.body = Matter.Bodies.circle(x,y,r,options)
        Matter.World.add(world , this.body)
       this.image=loadImage("assets/enemy.png")
        this.r = r;

    }


    show(){
        

        const pos = this.body.position;
        const angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(255)
        imageMode(RADIUS)
        image(this.image,0,0,this.r,this.r)
        pop()

    }
}