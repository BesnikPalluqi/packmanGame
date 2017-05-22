document.onkeydown = function (event){
    if(event.keyCode === 68 && pacman.pressingDown == false && pacman.pressingLeft ==false && pacman.pressingUp == false)
      pacman.pressingRight = true;
    else if(event.keyCode === 83 && pacman.pressingRight == false && pacman.pressingLeft ==false && pacman.pressingUp == false)
      pacman.pressingDown = true;
    else if(event.keyCode === 65)
      pacman.pressingLeft = true;
    else if (event.keyCode === 87)
      pacman.pressingUp = true;
}

document.onkeyup = function (event){
    if(event.keyCode === 68)
      pacman.pressingRight = false;
    else if(event.keyCode === 83)
      pacman.pressingDown = false;
    else if(event.keyCode === 65)
      pacman.pressingLeft = false;
    else if (event.keyCode === 87)
      pacman.pressingUp = false;
}