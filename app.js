// game values
 let min = 1,
     max = 10,
     winningNum = getRandomNum(min, max),
     guessesLeft = 4;

// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});



// Listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);


// Validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please set a number between ${min} and ${max}`, 'red');

}
// Check if won
if(guess === winningNum){
    gameOver(true, `${winningNum} is correct, you Win!`);
} else {
// Wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0){
        // Game Over Lost
        gameOver(false, `Game over, you lost. The correct number was ${winningNum} `);
    } else {
    // Game continues - aswer wrong


        // Change color green
    guessInput.style.borderColor = 'red';

    // Clear the input
        guessInput.value = '';

    // Tell user its the wrong number
setMessage(`${guess} is no correct, ${guessesLeft} guesses left`, 'red')

    }

}

});

function gameOver(won, msg){
    let color; 
    won === true ? color = 'green' : color = 'red';
    // disable input
 guessInput.disabled = true;
// // Change color green
guessInput.style.borderColor = color;
// Set tect color
message.style.color = color;
// // Set message
setMessage(msg);

// Play again
guessBtn.value = 'play again';
guessBtn.className += 'play-again';

}

// Define getWinningNUm

function getRandomNum(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color){
message.style.color = color;
message.textContent = msg;
}
