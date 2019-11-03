let windowMove = document.getElementById('windowMove');
let body = document.body;
console.log(windowMove);

windowMove.addEventListener("mousedown", down);




let x2 = 0;
let y2 = 0;

let x1 = 0;
let y1 = 0;

let klick = 0;

function down() {

  var x = event.clientX;
  var y = event.clientY;

  x1 = x;
  y1 = y

  console.log('x1 = ' + x1 + ' y1 = ' + y1)

  console.log(x1);
  klick = 1;

}






body.addEventListener("mouseup", up);





function up(x2, y2) {
console.log(klick);

  var x = event.screenX;
  var y = event.screenY;
  x2 = x;
  y2 = y;

  console.log('x2 = ' + x2 + ' y2 = ' + y2);
  console.log(x2);
xOfset =x2-x1;
yOfset =y2-y1;

  console.log(xOfset);
  console.log(yOfset);

  if(klick == 1){
    windowMove.style.zIndex="3";
    windowMove.style.position= "fixed";
  windowMove.style.margin = (100+yOfset) +"px 0px 0px " + (300+xOfset) +"px";

  klick=0;
};
}
