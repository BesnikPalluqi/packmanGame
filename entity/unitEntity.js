var unitList = new Array();

unitEntity = function(x,y,width,height,isWall){
var unit = {
x:x,
y:y,
width:width,
height:height,
isWall:false,
};

unit.buildWall = function(){
	unit.isWall=true;
}
return unit;
}
