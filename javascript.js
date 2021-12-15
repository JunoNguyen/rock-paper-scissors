function getRandom() {
    return Math.floor(Math.random());
  }

//   let rsp = prompt("Rock (R), Paper (P), Scissors (S)");


function gameCode() {

let rsp = prompt("Rock (R), Paper (P), Scissors (S)");

if (rsp.toLowerCase() == "r") {
    getRandom();
    if (getRandom() == 2) {
        alert("Computer chose scissors. You Win!");
    } if (getRandom() == 1) {
        alert("Computer chose paper. You Lost!");
    } if (getRandom() == 0) {
        alert(" Computer chose rock. It's a tie!");
    }     
}

else {
    if (rsp.toLowerCase() == "s") {
        getRandom();
        if (getRandom() == 2) {
            alert("Computer chose scissors. It's a tie!");
        } if (getRandom() == 1) {
            alert("Computer chose paper. You Win!");
        } if (getRandom() == 0) {
            alert(" Computer chose rock. You Lost!");
        }     
    }
}

if (rsp.toLowerCase() == "p") {
    getRandom();
    if (getRandom() == 2) {
        alert("Computer chose scissors. You Lost!");
    } if (getRandom() == 1) {
        alert("Computer chose paper. It's a tie!");
    } if (getRandom() == 0) {
        alert(" Computer chose rock. You won!");
    }     
}
}

gameCode();

function playAgain() {
    confirm("Want to play again?");
    if (confirm ==true);
    gameCode();
}

playAgain();



// var playAgain = confirm("Want to play again?");

// if (playAgain == true) {
//     gameCode();
// }
