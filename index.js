function getWinNumber(){
    return Math.floor(Math.random() * 100);
}

// declarations
let winningNum = getWinNumber();
let button = document.getElementById("buttons");
let resetbutton = document.querySelector("#reset")
let orientation = document.getElementsByClassName("orientation");
let oldGuess = document.querySelectorAll(".lastguess");
let currentGuess = '';
let trys = 0
let remain = 4
let win = ''
let remaining = document.querySelector(".remaining");
let loser = document.querySelector(".remaining");

//old guesses construct 


button.addEventListener("click", function(event){
    event.preventDefault()
    let element = document.querySelector(".Guess");
    currentGuess = document.querySelector(".Guess").value;
    element.value = ''
    oldGuess[trys].innerText = currentGuess
   
    if (trys < 4){  
      if(currentGuess >= 0 && currentGuess <=100) {
    console.log(winningNum)
    console.log(currentGuess)
    winCheck(currentGuess, winningNum, win, trys);
    // game(currentGuess, winningNum, oldGuess, trys);
    temp(currentGuess, winningNum);
    trys++
    remain--
    console.log("trys ", trys)}
    else{
        alert("input a number from 1-100");
       
    }
}else
    
    loser.innerHTML = "You Lose!!"

    
})

// function game(currentGuess, winningNum, oldGuess, trys){

//     //update old guesses
//     oldGuess[trys].innerText = currentGuess
//     //win check
// }
function temp(currentGuess, winningNum){
   let distance = winningNum - currentGuess
   let temp = document.querySelector(".temp")
   let higher = document.querySelector(".temp")
   if (distance <= 10 && distance >= -10){temp.innerHTML = "Hot"}
    else if(distance <= 20 && distance >= -20){temp.innerHTML = "Warm"}
    else if(distance <= 30 && distance >= -30){temp.innerHTML = "cold"}
    else{temp.innerHTML = "ice cold"}

    if (currentGuess > winningNum){higher.innerHTML+= " Lower"}
    else if(currentGuess < winningNum){higher.innerHTML+= " higher"}
}
function reset(oldGuess){

    for(let i = 0; i < 4; i++){
        oldGuess[i] = '';

    }
    trys = 0
    remain = 5
}
function winCheck(currentGuess, winningNum, win, trys){

    if(currentGuess == winningNum){
        let winner = document.querySelector(".remaining");
        winner.innerHTML = 'You Win!!'
        
    }else if(currentGuess < winningNum){

        remaining.innerText =  remain + " Guesses Remaining"
    }else if(currentGuess > winningNum ){

        remaining.innerText =  remain + " Guesses Remaining"
    }


}

resetbutton.addEventListener("click", function() {
    reset(oldGuess);

})