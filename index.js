var n = document.querySelectorAll(".drum").length;
// var audio=new Audio("sounds/tom-1.mp3");
for(var i=0;i<n;i++)
{
document.getElementsByClassName("drum")[i].addEventListener("click",function(){
  var innerHTML = this.innerHTML;
  makeSound(innerHTML);
  addAnimationToKey(innerHTML);
});
}
document.addEventListener("keypress",function(event){
makeSound(event.key);
addAnimationToKey(event.key);
});
function makeSound(key)
{
  switch (key) {

    case "w":
    var crashh=new Audio("sounds/crash.mp3");
    crashh.play();
    break;

    case "a":
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "s":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "d":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "j":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "k":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    default:
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;


}
}
function addAnimationToKey(parameter)
{
  var variable=document.querySelector("."+parameter);
  variable.classList.add("pressed");

  setTimeout(function(){
      variable.classList.remove("pressed");
    },0);
}
