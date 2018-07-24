/*declaration des variable*/
var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");
/*dimension de la maison en 2d*/
ctx.beginPath();
ctx.moveTo(0,0)
ctx.lineTo(400,400)
ctx.moveTo(400,0);
ctx.lineTo(0,400);
ctx.closePath();
ctx.strok();
