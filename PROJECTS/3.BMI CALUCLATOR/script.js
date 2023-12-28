document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");
    
    form.addEventListener('submit', function(e) {       
        e.preventDefault(); // Prevent the default form submission
        
        const ht = parseFloat(document.querySelector("#height").value);
        const wt = parseFloat(document.querySelector("#weight").value);
        
        const result = wt / ((ht / 100) **2);
        
        const finalResultElement = document.getElementById("results");
        finalResultElement.innerHTML = result.toFixed(2); // Display the result on the webpage
    });
});
