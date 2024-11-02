let randomNumber
let attemps

function startGame(){
    randomNumber = Math.floor(Math.random()* 10) + 1
    attemps = 0
    alert("Zadej číslo mezi 1 a 10.")
    askForNumber()
}

function askForNumber(){
    let userInput = prompt("Zadejte číslo:")
    if (userInput === null) {
        return
    }

    let userNumber = parseInt(userInput)
    attemps++
    
    if (isNaN(userInput)){
        alert("To není číslo!")
        askForNumber()
    }
    else if (userNumber < 1 || userNumber > 10) {
        alert("Číslo musí být mezi 1 a 10!")
        askForNumber()
    }
    else {
        checkGuess(userNumber)
    }
}
function checkGuess(userNumber){
    if (userNumber == randomNumber){
        alert("Jsi borec, uhádl jsi to. Gratuluji!")
        if (confirm("Chceš hrát znovu?")) {
            startGame()
        }
    }


        else if (userNumber<randomNumber) {
            alert("Zkus vyšší číslo.")
            askForNumber()
        }
        else {
            alert("Zkus nižší číslo.")
            askForNumber()
        }
}
document.getElementById("startButton").addEventListener("click", startGame)







