Enemy = function (id,x,y,speedX,speedY,width,height,image){
 var enemy = Entity(id,x,y,speedX,speedY,width,height,image);
 enemy.indanger = false;
 enemyList[id] = enemy;
 return enemy;
}