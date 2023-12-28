

document.addEventListener("DOMContentLoaded", function() {

let minimum = 1;
let maximum = 10;

// Generate a random number within the specified range
let guess_num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log("guess_num",guess_num)



  var chances = 10;
  var arr = []
  const form = document.querySelector("form");
    
  form.addEventListener('submit', function(e) {       
      e.preventDefault(); // Prevent the default form submission

      const num = parseInt(document.querySelector("#guessField").value)
      arr.push(num);
      if (num === "" || isNaN(num))
      {
        alert("Enter a valid number")
      }
      else if ((guess_num === num) && (chances > 0))
      {
        alert("You Selected the Right Answer")
        chances=0;
      }
      else if (chances <= 0)
      {
        alert("You have Wasted Your Chances");
      }
      else
      {
        document.getElementById("pg").innerHTML  = `Previous Guesses: ${arr.join(", ")}`
        chances--;
        document.getElementById("ge").innerHTML  = `Guess Remaining ${chances}`
      }
 



  })

});
