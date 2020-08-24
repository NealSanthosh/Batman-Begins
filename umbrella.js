class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
            density:1,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,88,options);
        this.x = x;
        this.y = y;
        
        this.image = loadImage('umbrella.png');
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        noStroke();
        noFill();
        translate(pos.x,pos.y)
        image(this.image,0,0,50,90);
        pop();
    }
}
