function Square(scale){
    if (length===undefined) {scale=30;}

    this.x=0;
    this.y=0;
    this.rotation=0;
    this.scaleX=scale/8;
    this.scaleY=scale/8;
    // this.xVel=0;
    // this.yVel=0;
    // this.accelX=0;
    // this.accelY=0;
}

Square.prototype.draw=function(context){
    context.save();
    
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = 2;
    context.fillStyle='black';

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(50,0);
    context.lineTo(50,50);
    context.lineTo(0,50);
    context.lineTo(0,0);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();
}