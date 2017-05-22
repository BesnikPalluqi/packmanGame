Pacman = function (id,x,y,speedX,speedY,width,height,image){
 var pacman = Entity(id,x,y,speedX,speedY,width,height,image,'');
  
  pacman.updatePosition = function(){
    if(pacman.pressingRight){
      pacman.x += 5;
         if(pacman.isCollidingWithWalls(wallsList)){
           pacman.x -= 5;
            }
           pacman.imageRightFlag = true;
           pacman.imageLeftFlag = false;
           pacman.imageDownFlag = false;
           pacman.imageUpFlag = false;

        }
    if(pacman.pressingLeft){
      pacman.x -= 5;  
        if(pacman.isCollidingWithWalls(wallsList)){
            pacman.x += 5;  
        }
           pacman.imageRightFlag = false;
           pacman.imageLeftFlag = true;
           pacman.imageDownFlag = false;
           pacman.imageUpFlag = false;
    }
    if(pacman.pressingDown){
      pacman.y += 5;  
       if(pacman.isCollidingWithWalls(wallsList)){
               pacman.y -= 5;
       }
           pacman.imageRightFlag = false;
           pacman.imageLeftFlag = false;
           pacman.imageDownFlag = true;
           pacman.imageUpFlag = false;
    }
     if(pacman.pressingUp){
      pacman.y -= 5;  
       if(pacman.isCollidingWithWalls(wallsList)){
                pacman.y += 5;
       }
           pacman.imageRightFlag = false;
           pacman.imageLeftFlag = false;
           pacman.imageDownFlag = false;
           pacman.imageUpFlag = true;
    }
      //ispositionvalid
    if(pacman.x < pacman.width/2)
      pacman.x = pacman.width/2;
    if(pacman.x > Width-10 -pacman.width/2)
      pacman.x = Width-10 - pacman.width/2;
    if(pacman.y < pacman.height/2)
      pacman.y = pacman.height/2;
    if(pacman.y > Height -10 - pacman.height/2)
      pacman.y = Height -10 - pacman.height/2;
  }
    pacman.draw = function(image){
    contex.save();
    contex.drawImage(image,pacman.x,pacman.y,pacman.width,pacman.height);
    contex.restore();
  }
    pacman.update = function(){
       if(pacman.imageRightFlag == true)
                pacman.draw(pacman.imageRight);
         else 
           if(pacman.imageUpFlag == true)
               pacman.draw(pacman.imageUp);
         else 
            if(pacman.imageDownFlag == true)
                 pacman.draw(pacman.imageDown);
         else 
            if(pacman.imageLeftFlag == true)
             pacman.draw(pacman.imageLeft);

                pacman.updatePosition();
      }

    pacman.eatDots = function (pacDotsList){
      for (var key in pacDotsList){
       if(pacDotsList[key].isColliding(pacman)){
         /*pacman.eatDotsAudio.play();*/
          delete pacDotsList[key];
          pacman.score += 10;
        } 
     }
  }

  pacman.eatPowerUpDot = function(powerUpsList){
     for (var key in powerUpsList){
         if(pacman.isColliding(powerUpsList[key])){
        delete powerUpsList[key];
          pacman.score += 100;
          pacman.setAllInDanger();
          }
       }
  }

   pacman.setAllInDanger = function (){
     for(var key in enemyList)
       key.indanger = true;
    }

//fix it
   pacman.eatGhost = function(){
     for (var key in enemyList){
      if(pacman.isColliding(enemyList[key]) && enemyList[key].indanger === true){
        delete enemyList[key];
        pacman.score +=200;
    }
  }
}

  pacman.fuckIamDead = function(){
     for (var key in enemyList){
      if(pacman.isColliding(enemyList[key]))
          pacman.HP -= 1;
      //restartGame
       }
  }
    pacman.wonTheGame = function(){
      if(pacDotsList.length==0)
      alert("You Won Level "+pacman.level);
  }

   

pacman.HP = 3;
pacman.level = 1;
pacman.score = 0;
pacman.pressingDown = false;
pacman.pressingUp = false;
pacman.pressingLeft = false;
pacman.pressingRight = false;
pacman.imageLeft = Img.pacmanLeft;
pacman.imageRight = Img.pacmanRight;
pacman.imageUp = Img.pacmanUp;
pacman.imageDown = Img.pacmanDown;
pacman.imageLeftFlag = false;
pacman.imageRightFlag = true;
pacman.imageUpFlag = false;
pacman.imageDownFlag = false;
/*pacman.walkAudio = new Audio('');*/
pacman.eatDotsAudio = new Audio('sound/pacman_chomp.wav');
/*pacman.eatSuperDotsAudio = new Audio('');
pacman.eatGhostAudio = new Audio('');
pacman.deathAudio = new Audio('');*/
return pacman;
}