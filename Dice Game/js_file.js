function RefreshPage(){
let randomNumber1 = Math.floor(Math.random() * 6 )+ 1;
let randomNumber2 = Math.floor(Math.random() * 6 )+ 1;
let imageFirstSelector = "./images/dice"+randomNumber1+".png";
let imageSecondSelector = "./images/dice"+randomNumber2+".png";
console.log(imageFirstSelector);
console.log(imageSecondSelector);
let image1 = document.getElementsByClassName("img1");
image1[0].src = imageFirstSelector;
let image2 = document.getElementsByClassName("img2");
image2[0].src = imageSecondSelector;
if(randomNumber1>randomNumber2){
        let refresh_me_tag = document.getElementsByTagName("h1");
    refresh_me_tag[0].innerHTML = "Player 1 wins 🏴";
}
else if(randomNumber1<randomNumber2){
    let refresh_me_tag = document.getElementsByTagName("h1");
    refresh_me_tag[0].innerHTML = "Player 2 wins 🏳️";
    
}
else{
    let refresh_me_tag = document.getElementsByTagName("h1");
    refresh_me_tag[0].innerHTML = "Draw";
}
}