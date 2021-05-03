class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            density	:1.2,
            friction :0,
            restitution :0.2,	
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y,r, options);
        this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r,this.r)
			pop()
			
	}

}