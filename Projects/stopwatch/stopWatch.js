var txtHour = document.getElementById('txtHour')
var txtMinute = document.getElementById('txtMinute')
var txtSecond = document.getElementById('txtSecond')

var hour = txtHour.value
var minute = txtMinute.value
var second = txtSecond.value

hour = 0;
minute = 0
second = 0;
var intervalId

function startWatch_click(){
    startWatch();
}

function  startWatch(){
    clearInterval(intervalId)
    intervalId =  setInterval(function(){
        second++
        if(second === 60){
            minute++
            second=0;
        }
        else if(minute === 60){
            hour++;
            minute = 0;
        }
        else if(hour === 24){
            hour = 0

        }
        txtSecond.value = second
        txtMinute.value = minute
        txtHour.value = hour  
    },1000)
}




function StoptWatch_click(){
    clearInterval(intervalId)

}

function resetWatch_click(){
    clearInterval(intervalId)
    
    txtSecond.value = "00";
    txtMinute.value = "00"
    txtHour.value = "00"
    hour=0;
    minute=0;
    second=0;

}