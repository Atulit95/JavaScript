let randNumber = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const GuessSlot = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfAttempt = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(GuessSlot);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // 
    if(isNaN(guess))
        alert("Please Enter a number.")
    else if(guess < 1){
        alert("Please enter a nuumber more than one.")
    }
    else if(guess >= 100){
        alert('Enter number less than 100')
    }
    else{
        prevGuess.push(guess)
        if( numOfAttempt === 10 ){
            dispalyGuess(guess)
            dispalyMessage(`Game Over.Random number was${randNumber}`)
            endGame()
        }
        else{
            dispalyGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randNumber){
        dispalyMessage('You guessed it right.')
        endGame()
    }
    else if(guess < randNumber){
        dispalyMessage('Number is Toooo Low.')
    }
    else{
        dispalyMessage('Number is Toooo High.')
    }
}

function dispalyGuess(guess){
    userInput.value = ''
    GuessSlot.innerHTML += `${guess}, `
    numOfAttempt++;
    result.innerHTML = `${11 - numOfAttempt}`
}

function dispalyMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numOfAttempt = 1
        GuessSlot.innerHTML = ''
        result.innerHTML = `${11 - numOfAttempt}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}