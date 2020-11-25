class Divisions{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200,400,4,200);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.s,pos.y,this.w,this.h);
    }
}