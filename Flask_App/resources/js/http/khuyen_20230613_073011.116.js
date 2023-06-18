
//RUN display hongbao0
setTimeout(function(){
document.getElementById("hongbao0").style.display = "block";
}, 15000); //run this after 3 seconds



//START random money
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


var sotien = "+" + getRandomInt(100,120) + "";
document.getElementById("rand1").innerHTML = sotien;
//END random money



function myFunction1() {
  document.getElementById("pop1").style.display = "flex";
  document.getElementById("hongbao0").style.display = "none";
}
function myFunction2() {
  document.getElementById("pop1").style.display = "none";

}
function myFunction3() {
  document.getElementById("pop1").style.display = "none";
  window.open("https://www.291bet.ph/?channel_id=60001");   //
}