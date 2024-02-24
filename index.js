var x,y;
document.querySelector(".img1").addEventListener("click",function (){
    x = Math.floor(Math.random()*6)+1;
    var imgSrc1 = "./images/"+"dice"+x+".png";
    document.querySelectorAll("img")[0].setAttribute("src",imgSrc1);
    document.querySelector("h1").innerHTML = "Player 2 Turn";
});
document.querySelector(".img2").addEventListener("click",function (){
    y = Math.floor(Math.random()*6)+1;
    var imgSrc2 = "./images/"+"dice"+y+".png";
    document.querySelectorAll("img")[1].setAttribute("src",imgSrc2); 
    document.querySelector("h1").innerHTML = "Player 1 Turn";

    if(x>y) document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    else if(x<y) document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
    else document.querySelector("h1").innerHTML = "Draw";
    document.querySelector("h1").style.fontSize = "5em";
});
document.querySelector()