
//Create random image 1
const randomNumber1 = Math.floor(Math.random()*6) +1;
console.log(randomNumber1);
let randomDiceImage = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

//Create random image 2
const randomNumber2 = Math.floor(Math.random()*6) +1;
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

//Change text content of h1
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins &#x1F3C1;"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins &#x1F3C1;"
}else{
    document.querySelector("h1").innerHTML = "&#x1F3C1; TIE &#x1F3C1;"
}
