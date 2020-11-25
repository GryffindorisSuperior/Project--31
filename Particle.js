class Particles{
    constructor()

    this.body = Bodies.circle(60,345, this.r, options);
    this.color = color(random(0,255), random(255), random(255));
    World.add(world, this.body);
}