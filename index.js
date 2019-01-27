var random_number=Math.floor(((Math.random()*6)+1));
var random_image="images/" + "dice" + random_number + ".png" ;

document.querySelector(".img1").setAttribute("src" ,random_image);

var random_number2=Math.floor(((Math.random()*6)+1));
var random_image2="images/"+"dice"+random_number2+".png";

document.querySelector(".img2").setAttribute("src",random_image2);

if(random_number>random_number2){
  document.querySelector("h1").innerHTML="Player 1 wins !";

}
else if (random_number===random_number2) {
  document.querySelector("h1").innerHTML="Draw !";

}

else{
  document.querySelector("h1").innerHTML="Player 2 wins !";
}
