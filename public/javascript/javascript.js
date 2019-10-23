let windowMove = document.getElementById('windowMove');
let body = document.body;
console.log(windowMove);

windowMove.addEventListener("mousedown", down);




let x2 = 0;
let y2 = 0;

let x1 = 0;
let y1 = 0;

function down() {

  var x = event.clientX;
  var y = event.clientY;

  x1 = x;
  y1 = y

  console.log('x1 = ' + x1 + ' y1 = ' + y1)

  console.log(x1);


}






body.addEventListener("mouseup", up);





function up(x2, y2) {

  var x = event.screenX;
  var y = event.screenY;
  x2 = x;
  y2 = y;

  console.log('x2 = ' + x2 + ' y2 = ' + y2);
  console.log(x2);
  console.log(y2 - y1);
  console.log(y2 - y1);
}
