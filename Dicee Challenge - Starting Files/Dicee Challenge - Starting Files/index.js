/*var randomnumber1 =Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomnumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.queryselectorAll("img1")[0];

image1.setAttribute("src", randomImageSource);*/

var randomNumber1 = Math.floor(Math.random()*6+1);

var randomNumber2 = Math.floor(Math.random()*6+1);

document.querySelector(".dice .img1").setAttribute("src", "images/dice"+randomNumber1+".png")

document.querySelector(".dice .img2").setAttribute("src", "images/dice"+randomNumber2+".png")

if (randomNumber1>randomNumber2){document.querySelector(".container h1").innerText ="🏁Player 1 wins";}

else if(randomNumber2>randomNumber1){document.querySelector(".container h1").innerText="Player 2 wins🏁";}

else{document.querySelector(".container h1").innerText="Its a Draw!";}
