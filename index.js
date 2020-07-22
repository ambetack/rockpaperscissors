var choices =["paper", "rock" ,"scissors"];
var i= Math.floor(Math.random()*3);
var player1 = choices [i];
var player2=  choice [i];
var player 3= choice [i];
var UserPoints =0;

function score() {
    var score_div =document.getElementById("score").innerHTML=player1 +" " player2 +" "+ player3 +" "+ playeer4
}
setInterval(score,50);
function game(UserChoice) {
    var box= document.getElementById("challenge");
    box.stylele.display = "inline flex"
    var userDiv= document.getElementById("yourobject";
    userDiv.innerHTML=conert(UserChoice);
    var player1=document.getElementById("player 1 object")
    varplayer1.innerHTML=convert(player1choice);
    var player2= document.getElementById("yourobject")
    varplayer1.innerHTML=convert(player1choice);
    var player2.innerHTML=convert(player2choice);
    varplayer2.innerHTML=convert(player1choice);
    var player3= document.getElementById("player3object")
    varplayer3.innerHTML=convert(player1choice);
    var player3= document.getElementById(player3object)
    )""
    if(userChoice ==== "paper"&& player2choice ===="rock" && player3Choice=== "scissors" || userChoice === "rock"
    && player2choice=== "paper" && player3Choice"scissors"   )
    win();
    elseif (player1=player2 && player4= user){
        draw();
    }


    else{
        lose();
    }
    function continueGame() {
        i=Math.floor(math.random()*4);
        playerChoice=choice[i];
        box.style.display="none";
    }
    setTimeout(continueGame,50);

}
function win(){
    player1points++;
    document.getElementById("result")
}
function draw(){

}
functionlose{

}

}
