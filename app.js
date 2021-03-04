// game values
 let min = 1,
     max = 10,
     winningNum = 2,
     guessesLeft = 3;

// UI Elements

const game = document.querySelector('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);


// Validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please set a number between ${min} and ${max}`, 'red');

}
// Check if won
if(guess === winningNum){
// disable input
guessInput.disabled = true;
// Change color green
guessInput.style.borderColor = 'green';
// Set message
setMessage(`${winningNum} is correct, you Win!`, 'green');


} else {

}

});


function setMessage(msg, color){
message.style.color = color;
message.textContent = msg;
}