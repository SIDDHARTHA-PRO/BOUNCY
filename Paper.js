class Paper{
    constructor(x,y,r){
        var options={
             isStatic:false,
             restitution:0.3,
             friction:0.5,
             density:1.2
         }
         this.x=x
         this.y=y
         this.r=r
         this.body=Bodies.circle(this.x,this.y,this.r/2,options) 
         World.add(world,this.body)
     }
     display(){
        var ppos=this.body.position
        var angle=this.body.angle
    
     
        push()
        translate(ppos.x,ppos.y)
        strokeWeight(2)
        fill ("white")
        ellipse(0,0,this.r,this.r)
        rectMode(CENTER)
        if(keyCode===UP_ARROW){
            Matter.Body.applyForce(this.body,this.body.position,{x:0.8,y:-2});
           
        }
        pop()




     }
 

    
 }