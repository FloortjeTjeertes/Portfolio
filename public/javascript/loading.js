let backgroundVisibility = "on";
let loadbarr = document.getElementById('black');


function disapearr(){
  if(backgroundVisibility=="on"){
  console.log("ready");
  document.getElementById("ModaalBody").classList.add("disapear");
backgroundVisibility="off";
console.log(backgroundVisibility);
setInterval(weg ,2000);

}

}
function weg(){
  console.log("test");
  document.getElementById("ModaalBody").style.display = "none";
backgroundVisibility="off";
}



loadbarr.addEventListener("webkitAnimationEnd", disapearr);
loadbarr.addEventListener("animationend", disapearr);
