function TimeNow () {
    this.x = 0;
    this.y = 0;
    this.color = "#ff0000";
  }

  
  TimeNow.prototype.draw = function (context) {
    context.save();
    context.font = "30px Arial";
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.fillText("toLocaleTimeString(): "+(new Date()).toLocaleTimeString(), this.x, this.y);
    context.fillText("getTime(): "+(new Date()).getTime(), this.x, this.y+30);
    context.fillText("getMilliseconds(): "+(new Date()).getMilliseconds(), this.x, this.y+60);
    
    context.restore();
  };
  