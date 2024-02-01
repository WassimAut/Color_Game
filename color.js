var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colors-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

resetButton.addEventListener("click",function(){init()});

init();
function init(){
Modesetup();
setupUi();
}

function setupUi(){
resetButton.textContent="New Colors";
messageDisplay.textContent ='';
h1.style.backgroundColor="#2C8E99";
colorchoices(numSquares);
pickedColor=Choosecolor();
colorDisplay.textContent=pickedColor;
setupSquares();
}

function setupSquares(){
  for(let i=0;i<squares.length;i++){
      if (colors[i]){
      squares[i].style.backgroundColor=colors[i];
      squares[i].style.display="block";
      }
      else{
          squares[i].style.display="none";
      }

      squares[i].addEventListener('click',function(){
      if(this.style.backgroundColor == pickedColor){
        messageDisplay.textContent="Congratulation";
        resetButton.textContent="Play Again";
        set_all_unicolor(pickedColor);
      }
      else{
          messageDisplay.textContent="Try Again";
          this.style.backgroundColor="#222222";
      }

})

}

}

function colorchoices(num){
colors=[];
for(let i=0 ;i<num;i++){
var R=Math.floor(Math.random()*255);
var G=Math.floor(Math.random()*255);
var B=Math.floor(Math.random()*255);
colors.push("rgb(" + R + ", " + G + ", " + B + ")");
}
}

function Choosecolor(){
var random=Math.floor(Math.random()*colors.length);
return colors[random]
}

function Modesetup(){
    for(let i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
        for (let i =0;i<modeButtons.length;i++){
        modeButtons[i].classList.remove("selected");
        }
       this.classList.add("selected");
       if(this.textContent=="Easy"){
       numSquares=3;
       }
       else{
       numSquares=6;
       }

setupUi()
})
}

}
function set_all_unicolor(col){
for (let i=0;i<squares.length;i++){
squares[i].style.backgroundColor=col;
}
h1.style.backgroundColor=pickedColor;
}
