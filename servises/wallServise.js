drawWalls = function (entity){
contex.save();
contex.fillStyle = entity.color;
contex.fillRect(entity.x,entity.y,entity.width,entity.height);
contex.restore();
}

generateFieldNumberOne = function(){
	var width=50;
	var height=50;
	var x=0;
	var y=0;
	for(var i=0;i<20;i++){
		if(i!=0){
		x+=width;
	}
		y=0;
		unitList[i] = new Array();
		for(var j=0;j<11;j++){
			unitList[i][j] = new unitEntity(x,y,width,height,'');
			y+=height;
		}
	}

	generateFieldOne();
}

generateFieldOne = function(){
 var generatedId=0;
   for(var i=0;i<unitList.length;i++){
     for(var j=0;j<11;j++){
	   if(generateCordinatesForFieldOne(i,j))
	      {
            Wall(generatedId,unitList[i][j].x,unitList[i][j].y,unitList[i][j].width,unitList[i][j].height,'blue');
             unitList[i][j].buildWall();
              generatedId++;
           }
	    }
	 }
  }

//to fix
generateCordinatesForFieldOne = function(x,y){
	if(x<20  && y==0  || x==0 && y<10 || x==19 && y<11  || x<20 && y==10)return true;
	if((x==2 || x==3) && y==2)return true;
	if(x==2  && (y==3 || y==7))return true;
	if((x==3 || x==2) && y==8)return true;
	if(x==5  && (y==2 || y==1 || y==4  || y==6 ))return true;
	if((x==7 || x==8 || x==9 || x==10 || x==11 || x==12 || x==14 || x==16) && y==2 )return true;
	if(x==14 && (y==1 || y==2 || y==9 || y==4 || y==6 ))return true;
	if(x==17 && (y==2 || y==3 || y==7))return true;
	if(x==5  && (y==9 || y==8))return true;
    if((x==7 || x==8 || x==9 || x==10 || x==11 || x==12 || x==14|| x==16 || x==17) && y==8)return true;
	if(x==4  && (y==4 || y==6 ))return true;
	if(x==15 && (y==4 || y==6))return true;
    if((x==7 || x==12) && (y==6 || y==5 || y==4))return true;
    if((x==11 || x==10 || x==9) && y==4)return true;
    if((x==9 ||x==10 ||x==8 ) && y==6)return true;

	return false;
}

//todo
generateCordinatesForFieldTwo = function(x,y){

}

//Todo
generateFieldTwo = function (){

}
