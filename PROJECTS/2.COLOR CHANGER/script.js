document.addEventListener("DOMContentLoaded", function() {
    const colors = ["bluebox", "greenbox", "blackbox", "redbox"];

    colors.forEach(
    
        (color)=>{
    
                const color_picked = document.getElementById(color);
                color_picked.addEventListener("click", function() {

                    document.body.style.backgroundColor=getComputedStyle(color_picked).backgroundColor;
                });
        }
    )
});
