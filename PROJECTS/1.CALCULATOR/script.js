document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const button7 = document.getElementById("button7");
    const button8 = document.getElementById("button8");
    const button9 = document.getElementById("button9");
    const button0 = document.getElementById("button0");
    const buttondot = document.getElementById("buttondot");
    const buttoneq = document.getElementById("buttoneq");
    const CEButton = document.getElementById("CE");
    const myText = document.getElementById("mytext");

    const buttonplus = document.getElementById("buttonplus");
    const buttondiv = document.getElementById("buttondiv");
    const buttonminus = document.getElementById("buttonminus");
    const buttonmul = document.getElementById("buttonmul");


    buttonplus.addEventListener("click", function() {
        myText.textContent += "+"; // Append "1" to the display text
    });
    buttondiv.addEventListener("click", function() {
        myText.textContent += "/"; // Append "1" to the display text
    });
    buttonminus.addEventListener("click", function() {
        myText.textContent += "-"; // Append "1" to the display text
    });
    buttonmul.addEventListener("click", function() {
        myText.textContent += "*"; // Append "1" to the display text
    });

    button1.addEventListener("click", function() {
        myText.textContent += "1"; // Append "1" to the display text
    });

    button2.addEventListener("click", function() {
        myText.textContent += "2"; // Append "2" to the display text
    });

    button3.addEventListener("click", function() {
        myText.textContent += "3"; // Append "3" to the display text
    });
    button4.addEventListener("click", function() {
        myText.textContent += "4"; // Append "4" to the display text
    });
    button5.addEventListener("click", function() {
        myText.textContent += "5"; // Append "5" to the display text
    });
    button6.addEventListener("click", function() {
        myText.textContent += "6"; // Append "6" to the display text
    });
    button7.addEventListener("click", function() {
        myText.textContent += "7"; // Append "7" to the display text
    });
    button8.addEventListener("click", function() {
        myText.textContent += "8"; // Append "8" to the display text
    });
    button9.addEventListener("click", function() {
        myText.textContent += "9"; // Append "9" to the display text
    });
    button0.addEventListener("click", function() {
        myText.textContent += "0"; // Append "0" to the display text
    });
    buttondot.addEventListener("click", function() {
        myText.textContent += "."; // Append "9" to the display text
    });
    buttoneq.addEventListener("click", function() {

       const finalelement = myText.textContent

       if (finalelement === '')
       {
        alert("Enter data fist ");

       }





       const characters = finalelement.split('');
       let value1 = ''
       var value2 = []


       for (let i=0;i<characters.length;i++)
       {
            if (characters[i] != '+' && characters[i] != '-' && characters[i] != '*' && characters[i] != '/')
            {
                value1 =  value1 +  characters[i]  
            }
            else
            {
                value1 = parseFloat(value1);
                value2.push(value1);
                value2.push(characters[i]);

                value1=''
                
            }
       }
       value1 = parseFloat(value1);
       value2.push(value1);
       let sum = 0


       for (let i=0;i<value2.length;i++)
       {
         if (value2[i] === '+' || value2[i] === '*' || value2[i] === '/' || value2[i] === '-' )
         {

            if (value2[i] === '+')
            {
            sum +=  value2[i-1] + value2[i+1];

            }
            else if (value2[i] === '-')
            {
            sum +=  value2[i-1] - value2[i+1];

            }
            else if (value2[i] === '*')
            {
            sum +=  value2[i-1] * value2[i+1];

            }
            else
            {
            sum +=  value2[i-1] / value2[i+1];

            }
         }
       }

       myText.innerHTML = sum;




    });


    CEButton.addEventListener("click", function() {
        myText.textContent = ""; // Clear the display text
    });
});
