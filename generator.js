// on the event of a button click, will select a random element of randomStrings and display it in myRandomDiv    
var randomDiv = document.getElementById("myRandomDiv");

document.getElementById("myButton").addEventListener("click", function() {
        randomIndex = Math.ceil((Math.random()*randomStrings.length-1));
        newText = randomStrings[randomIndex];
        randomDiv.innerHTML = newText;
    });
