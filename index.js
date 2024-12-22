// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

    // Select the displayed result
    var result = document.querySelector("h1");

    // Generate random numbers from 1 to 6 for each player
    var randomNumber1 = Math.floor(6 * Math.random()) + 1; // Player 1
    var randomNumber2 = Math.floor(6 * Math.random()) + 1; // Player 2

    // Set the images for both players to the random numbers' paths
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Determine the winner of the game
    if (randomNumber1 > randomNumber2) {

        result.innerHTML = "🚩Player 1 wins!";
    } 
    
    else if (randomNumber2 > randomNumber1) {

        result.innerHTML = "🚩Player 2 wins!";
    } 
    
    else {
        result.innerHTML = "It's a Draw!";
    }
});
