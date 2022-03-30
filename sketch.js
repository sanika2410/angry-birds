const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground,box;
var bird,box1,box2,log;
var bg_img;
var pig;

function preload(){
bg_img = loadImage("assets/bg.png")
}


function setup(){
    createCanvas(1350,600)
    engine = Matter.Engine.create()
    world= engine.world

    ground = new Ground (width/2,height-10,width,15)
    box = new Box(1100,545,50,75)
    bird = new Bird(50,300,25)
    box1 = new Box(1300,545,50,75)
    //box2 = new Box(400,276,105,25)

    log = new Log(1200,470,20,220,PI/2)


    pig = new Pig(1200,545,50)
    
    }


function draw(){
    background(bg_img)
    Matter.Engine.update(engine)


    ground.show()
    box.show()
    bird.show()
    box1.show()
   // box2.show()
    log.show()
    pig.show()
}