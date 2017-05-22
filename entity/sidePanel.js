var sidePanelcontex = document.getElementById("pacmanGameSidePanel").getContext("2d");

//todo add disable sound button
 updateSidePanel = function(pacman) {
  sidePanelcontex.clearRect(0,0,600,600); 
  sidePanelcontex.font = "30px Aharoni";
  sidePanelcontex.fillStyle = 'white';  
  sidePanelcontex.fillText("Level:",10,150);  
  sidePanelcontex.fillText("Score:",10,210);    
  sidePanelcontex.fillText("Lives:",10,270); 
  sidePanelcontex.font = "45px Aharoni";
  sidePanelcontex.fillText(pacman.level,120,150);    
  sidePanelcontex.fillText(pacman.score,120,210);     
  for(var life = 0; life < pacman.HP; life ++)
  sidePanelcontex.drawImage(pacman.imageRight,100+(life*50),250,pacman.width/1.5,pacman.height/1.5);    
}
