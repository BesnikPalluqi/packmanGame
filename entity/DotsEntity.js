Dots = function (id,x,y,speedX,speedY,width,height,image){
 var pacDot = Entity(id,x,y,speedX,speedY,width,height,image,'');
//fix algoeithem for collidion
  pacDot.isColliding = function(rect){
    var distX = Math.abs(pacDot.x - rect.x-rect.width/4);
    var distY = Math.abs(pacDot.y - rect.y-rect.height/4);

    if (distX > (rect.width/4 + pacDot.width)) { return false; }
    if (distY > (rect.height/4 + pacDot.width)) { return false; }
    if (distX <= (rect.width/4)) { return true; } 
    if (distY <= (rect.height/4)) { return true; }

    var dx=distX-rect.width/4;
    var dy=distY-rect.height/4;

    return (dx*dx+dy*dy<=(pacDot.width*pacDot.width));
   }

  pacDot.draw = function(){
    contex.beginPath();
    contex.arc(pacDot.x,pacDot.y,pacDot.width,0,2*Math.PI);
    contex.stroke();
    contex.fillStyle = 'white';
    contex.fill();
  }
    pacDotsList[id] = pacDot;
     return pacDot; 
}

  PowerUpDot = function (id,x,y,speedX,speedY,width,height,image){
    var superPacDot = Dots(id,x,y,speedX,speedY,width,height,image,'');
    powerUpsList[id] = superPacDot;
    return superPacDot;
}