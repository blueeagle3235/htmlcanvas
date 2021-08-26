function Rectangle(width,height){
    if (width===undefined) {scale=30;}
    if (height===undefined) {scale=15;}
    this.x=0;
    this.y=0;
    this.rotation=0;
    this.width=width;
    this.height=height;
    this.scaleX=1;
    this.scaleY=1;
    this.lineWidth=0;
}
Rectangle.prototype.draw=function(context){
    context.save();
    
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = 2;
    context.fillStyle='black';

    context.beginPath();
    context.rect(0, 0, this.width, this.height);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();
}