var computer_score=0;
var player_score=0;

function playgame(str)
{
    var array=['rock','paper','scissor'];

   var computer_choice=document.getElementById("computer_choice");
   var player_choice=document.getElementById("player_choice");
   var score1=document.getElementById("computer_score");
   var score2=document.getElementById("player_score");

   player_choice.innerHTML=str;

   var num=Math.floor(Math.random()*array.length);

   var random=array[num];
   computer_choice.innerHTML=random;
   var result=document.getElementById("result");
   result.innerHTML="";

   if(str===random)
   {
       result.innerHTML="TYE";
   }
   else if(str==='rock'&&random==='paper')
   {
      result.innerHTML="you lose";
      computer_score++;
   }
   else if(str==='rock'&&random==='scissor')
   {
      result.innerHTML="you win";
      player_score++;
   }
   else if(str==='paper'&&random==='rock')
   {
     result.innerHTML="you win";
     player_score++;
   }
   else if(str==='paper'&&random==='scissor')
   {
    result.innerHTML="you lose";
    computer_score++;
   }
   else if(str==='scissor'&&random==='paper')
   {
    result.innerHTML="you win";
    player_score++;
   }
   else if(str==='scissor'&&random==='rock')
   {
    result.innerHTML="you lose";
    computer_score++;
   }

   score1.innerHTML=computer_score;
   score2.innerHTML=player_score;
   if(computer_score==10)
   {
    result.innerHTML="computer win the game";
    var playrepeat=document.getElementById("playrepeat");
    playrepeat.style.display="flex";

    var resultshow=document.getElementById("resultshow");
    resultshow.classList.add("red");
   }
   else if(player_score==10)
   {
    result.innerHTML="you win the game";
    var playrepeat=document.getElementById("playrepeat");
    playrepeat.style.display="flex";

    var resultshow=document.getElementById("resultshow");
    resultshow.classList.add("green");
   }
}

function playagain()
{
    location.reload();
}