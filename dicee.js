// first dice
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomSource1="images/"+randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomSource1);

// sec dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomSource2="images/"+randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomSource2);


// To check who wins the competition
if(randomNumber1=== randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins !!";
}
else {
  document.querySelector("h1").innerHTML="Player 2 wins !!";
}
