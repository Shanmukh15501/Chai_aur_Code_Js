document.addEventListener("DOMContentLoaded", function() {
 setInterval(showTime, 1000);
 function showTime() 
 {
   d = new Date,
   date_format = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    const text =  document.getElementById("time");
    text.innerHTML=date_format;


 }
 showTime()
});
