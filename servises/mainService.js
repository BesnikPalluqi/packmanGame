var pacman_beginning_Audio = new Audio('sound/pacman_beginning.wav');
     window.onload = function() {
     var ctx = document.getElementById("StartScreen").getContext("2d");
     ctx.canvas.width  = window.innerWidth;
     ctx.canvas.height = window.innerHeight;
     var pacmanStartUpImage = new Image();
     pacmanStartUpImage.onload = function() 
     {
       ctx.drawImage(pacmanStartUpImage,0,0,window.innerWidth,window.innerHeight);
     };
     pacmanStartUpImage.src = "img/kot.jpg";
     pacman_beginning_Audio.play();
};
     $("#startButton").click(function () {
        $("#pacmanGame").show();
        $("#pacmanGameSidePanel").show();
        $("#startButton").hide();
        $("#controllersButton").hide();
        $("#StartScreen").hide();
        pacman_beginning_Audio.pause();
    });

playGame = function (){
 contex.clearRect(0,0,Width,Height);  	
 for(var key in wallsList){
  drawWalls(wallsList[key]);
 }
  initializeGame();
  pacman.update();
  enemy1.update();
  enemy2.update();
  enemy3.update();
  enemy4.update();

for(var dotIndex in pacDotsList){
 pacDotsList[dotIndex].draw();
}

for(var powerUpDotindex in powerUpsList){
 powerUpsList[powerUpDotindex].draw();
}

pacman.eatDots(pacDotsList);
pacman.eatPowerUpDot(powerUpsList);
pacman.fuckIamDead();
pacman.wonTheGame();
updateSidePanel(pacman);

}

initializeGame = function (){
 if(hasGameStart==false){
  hasGameStart=true;
  generateFieldNumberOne();
  var generatedId =1;
   for(var i=0;i<unitList.length;i++){
    for(var j=0;j<10;j++){
      generatedId++;
      generatePacmanDots(generatedId,i,j);
    }
   }
   generatePacmanPowerDots('1',1,1);
   generatePacmanPowerDots('2',18,1);
   generatePacmanPowerDots('3',1,9);
   generatePacmanPowerDots('4',18,9);
  }
}
generatePacmanDots = function(id,x,y){
if(unitList[x][y].isWall==false){
	var dotX = unitList[x][y].x + (unitList[x][y].width/2);
	var dotY = unitList[x][y].y + (unitList[x][y].height/2);
  var dot = Dots(id,dotX,dotY,0,0,5,0,"");
  }
}

generatePacmanPowerDots = function(id,x,y){
	var dotX = unitList[x][y].x + (unitList[x][y].width/2);
	var dotY = unitList[x][y].y + (unitList[x][y].height/2);
  var powerUpDot = PowerUpDot(id,dotX,dotY,0,0,10,0,"");
}


pacman = Pacman('PacmanId',61,61,10,10,40,40,Img.pacman);
enemy1 = Enemy("Clyde",420,265,10,10,35,35,Img.Clyde);
enemy2 = Enemy("Blinky",460,265,10,10,35,35,Img.Blinky);
enemy3 = Enemy("Inky",500,265,10,10,35,35,Img.Inky);
enemy4 = Enemy("Pinky",540,265,10,10,35,35,Img.Pinky);
setInterval(playGame,40);
