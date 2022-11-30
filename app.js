function time(){
    today=new Date();
    
    h=today.getHours();
    m=today.getMinutes();
    
    if (h < 10){ h = "0" + h;}
    if (m < 10){ m = "0" + m;} 
    
    document.getElementById('time').innerHTML=h+":"+m;
    setTimeout('time()',500);
    }

function myFunction(){
    var x = document.getElementById("password");
    if (x.type === "password"){
         x.type = "text";
    } else {
        x.type = "password";
    }
}