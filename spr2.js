function Scissor() {
    var pick =0;
    // var arr = ["Scissor", "Paper", "Rock"];
    // var a = Math.floor(Math.random() * 3);
    // document.getElementById("result").innerHTML = arr[a];
    display(a);
    if(pick==a)
    {
        document.getElementById("winner").innerHTML = "DRAW";    
    }
    else if(a==1)
    {
        document.getElementById("winner").innerHTML = "YOU WON!!!";
    }
    else{
        document.getElementById("winner").innerHTML = "YOU LOSE!!!";
    }  
    document.getElementById('icon1').style.display = "block";   
                             
}

function Paper() {
    var pick =1;
    // var arr = ["Scissor", "Paper", "Rock"];
    // var a = Math.floor(Math.random() * 3);
    // document.getElementById("result").innerHTML = arr[a];
    display(a);
    if(pick==a)
    {
        document.getElementById("winner").innerHTML = "DRAW";
       
    }
    else if(a==2)
    {
        document.getElementById("winner").innerHTML = "YOU WON!!!";
    }
    else{
        document.getElementById("winner").innerHTML = "YOU LOSE!!!";
    }
    document.getElementById('icon2').style.display = "block";

}
function Rock() {
    var pick =2; 
    // var arr = ["Scissor", "Paper", "Rock"];                     // scissor=0 , paper =1  ,rock =2
    // var a = Math.floor(Math.random() * 3);
    // document.getElementById("result").innerHTML = arr[a];
    display(a);
    if(pick==a)
    {
        document.getElementById("winner").innerHTML = "DRAW";
    }
    else if(a==0)
    {
        document.getElementById("winner").innerHTML = "YOU WON!!!";
    }
    else{
        document.getElementById("winner").innerHTML = "YOU LOSE!!!";
    }
    document.getElementById('icon3').style.display = "block";
   
}
function display(a) {                      
    
    document.getElementById('icon1').style.display = "none";
    document.getElementById('icon2').style.display = "none";
    document.getElementById('icon3').style.display = "none";
    document.getElementById('icon4').style.display = "none";
    document.getElementById('icon5').style.display = "none";
    document.getElementById('icon6').style.display = "none";

    if (a === 0) {
        document.getElementById("result").innerHTML = "Opponent chose Scissor";
        document.getElementById('icon4').style.display = "block";
    } else if (a === 1) {
        document.getElementById("result").innerHTML = "Opponent chose Paper";
        document.getElementById('icon5').style.display = "block";
    } else if (a === 2) {
        document.getElementById("result").innerHTML = "Opponent chose Rock";
        document.getElementById('icon6').style.display = "block";
    }
}

