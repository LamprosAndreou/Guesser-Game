let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(userguess, computerguess, generateTarget) {
    let user = Math.abs(userguess - generateTarget);
    let computer = Math.abs(computerguess - generateTarget);
    if (user > computer) {
        return false;
    }
    else if (user < computer) {
        return true;
    }
    else if (user === computer) {
        return true;
    }
}

const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore = humanScore + 1;
    }
    else if(winner === 'computer'){
        computerScore = computerScore + 1;
    }
}

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1;
}