document.addEventListener("DOMContentLoaded", function() {
    var started = null;
    const arr = [ 255, 0, 50, 150, 200]

    document.querySelector("#start").addEventListener("click", function(e) {
        started = setInterval(function() {
            // Your code logic that should execute repeatedly every second goes here
            console.log("Interval triggered!");
            Math.random(arr)
            document.body.style.backgroundColor = `rgba(${arr[Math.floor(Math.random() * arr.length)]}, 
            ${arr[Math.floor(Math.random() * arr.length)]}, 
            ${arr[Math.floor(Math.random() * arr.length)]}, 
            0.8)`;        }, 1000);




});


    document.querySelector("#stop").addEventListener("click",function(e)
    {

        document.body.style.backgroundColor='white';
        clearInterval(started);

        console.log("stop");
    });


    
});
