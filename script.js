function makeBubble(){
  var allbubble="";
  for(i=1;i<139;i++){
      allbubble+=`<div id="bubble">${Math.floor((Math.random())*10)}</div>` ;
    }
document.getElementById("pbot").innerHTML=allbubble;
}
var t=30;
var sr=0;
var h1=0;
function timer(){
  var t1=document.getElementById("t1");
  var time1=setInterval(function(){
    if(t>0){
      t=t-1;
      t1.textContent=t;
    }
    else{
      clearInterval(time1);
      document.getElementById("pbot").innerHTML=`<h1>Game Over</h1>`;
    }
   
  },1000)
}
function scr(){
  sr=sr+10;
  document.getElementById("score").textContent=sr;
}
function hitFun(){
   h1=Math.floor(Math.random()*10);
   document.getElementById("hit1").textContent=h1;
}
makeBubble();
timer();
// scr();
// hitFun();
 
 
    document.getElementById("pbot").addEventListener("click",function(dets){
    var clickedB=Number(dets.target.textContent);
    if(clickedB===h1){
    scr();
    hitFun();
    makeBubble();
    }
  else{
    hitFun();
    makeBubble();
  }
  })
 
   
 
  



