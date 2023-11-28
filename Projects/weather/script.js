let intervalId = setInterval(function(){
    
    if(intervalId<=20){
        console.log(intervalId+" hellkjho");
        intervalId++
    }
    else{
        clearInterval(intervalId)
    }
   
},1000)
