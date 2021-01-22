
class Circle
{
    constructor(xPos , yPos , radius)
    {
        this.xPos = xPos;
        this.yPos = yPos ;
        this.radius = radius;
    }
    move(xOffset, yOffset)
    {
        this.xPos += xOffset;
        this.yPos += yOffset ;
    }

    get surface ()
    {
        return (Math.PI * Math.pow(this.radius,2));
    }

    
}

let circle= new Circle (150,400,360);

console.log(circle);

console.log(circle.surface);

circle.move(400,150);
console.log(circle);
