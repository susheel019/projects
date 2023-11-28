var textHour=document.getElementById('textHour');
var textMinute=document.getElementById('textMinute');
var textSecond=document.getElementById('textSecond');

var hour=0;
var minute=0;
var second=0;
var no;

function start_click(){
   startwatch();
}

function startwatch(){
    clearInterval(no)
    no=setInterval(function(){
    second++;
    if(second===60){ 
        minute++;
        second=0;
    }else if(minute===60)
    {
        hour++;
        minute=0;
    }else if(hour===24)
    {

        hour=0;
    }
    
    textHour.value=hour
    textMinute.value=minute
    textSecond.value=second

    },1000);
}


function stop_click(){
  
    clearInterval(no);
}

function reset_click(){
   
    clearInterval(no);
    textHour.value="00";
    textMinute.value="00";
    textSecond.value="00";
    hour=0;
    minute=0;
    second=0;
}