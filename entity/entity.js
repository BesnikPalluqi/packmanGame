var wallsList = {};
Entity = function (id,x,y,speedX,speedY,width,height,image,njesi) {
 var entity = {
  id:id,
  x:x,
  y:y,
  speedY:speedY,
  speedX:speedX,
  width:width,
  height:height,
  image:image,
};

 entity.isColliding = function (entity2) {
   var rect1 = {
     x:entity.x, 
     y:entity.y,
     width:entity.width,
     height:entity.height,
   }

var rect2 = {
     x:entity2.x,
     y:entity2.y,
     width:entity2.width,
     height:entity2.height,
   }
     return  entity.testCollisionOfRectangles(rect1,rect2);
}

entity.testCollisionOfRectangles = function(rectangle1,rectangle2) {
  return rectangle1.x <= rectangle2.x + rectangle2.width
     &&  rectangle2.x <= rectangle1.x + rectangle1.width
     &&  rectangle1.y <= rectangle2.y + rectangle2.height
     &&  rectangle2.y <= rectangle1.y + rectangle1.height;
}

   entity.draw = function(){
      contex.save();
      contex.drawImage(entity.image,entity.x,entity.y,entity.width,entity.height);
      contex.restore();
  }

  entity.update = function(){
    entity.draw();
  }

  entity.isCollidingWithWalls = function (wallList){
      for (var key in wallList){
       if(entity.isColliding(wallList[key]))
        return true;
       }
        return false;
    }
    
return entity;

}

Wall = function (id,x,y,width,height,color){
  var wall = Entity(id,x,y,0,0,width,height,'','');
  wall.color = '#0080ff';
  wallsList[id] = wall;
}

