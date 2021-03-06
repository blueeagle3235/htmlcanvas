function Ball(radius){
    if (radius===undefined) {radius=40;}
    this.x=0;
    this.y=0;
    this.radius=radius;
    this.rotation=0;
    this.scaleX=1;
    this.scaleY=1;
    this.lineWidth=0;
}
Ball.prototype.draw=function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.lineWidth=this.lineWidth;
    context.fillStyle = '#0a0a0b';
    context.beginPath();
    context.arc(0,0,this.radius,0,(Math.PI*2),true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
}
Ball.prototype.getBounds = function () {
    return {
            x: this.x - this.radius,
            y: this.y - this.radius,
            width: this.radius * 2,
            height: this.radius * 2
        };
    };