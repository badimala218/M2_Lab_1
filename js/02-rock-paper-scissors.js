// Phase 1
let userChoice = window.prompt("Rock, Paper, or Scissors?");

// Phase 2
let random = Math.random() * 3;
let computerChoice = Math.floor(random);
if (computerChoice === 0)
{
    computerChoice = "rock";
}
else if (computerChoice === 1)
{
    computerChoice = "paper";
}
else if (computerChoice === 2)
{
    computerChoice = "scissors";
}

// Phase 3
/**
 * Checks that the input is a string and is "rock", "paper", or "scissors".
 * @param {number} input Input to validate
 * @returns True if valid input, False if not.
 */
function validateUserInput(input)
{
    let valid = false;
    if (typeof input === 'string')
    {
        let lowercase = input.toLowerCase();
        if (lowercase === "rock" || lowercase === "paper" ||
            lowercase === "scissors")
        {
            valid = true;
        }
    }
    return valid;
}

/**
 * Checks the user's choice compared to the computer's choice and
 * displays a message in an alert box.
 * @param {string} user User input string
 * @param {string} computer Computer game choice
 */
function checkWinner(user, computer)
{
    if (validateUserInput(user) === false)
    {
        window.alert("Invalid user input");
    }
    else 
    {
        let lowercaseUser = user.toLowerCase();
        if (lowercaseUser === computer)
        {
            window.alert("You both threw " + user + "! That's a tie!");
        }
        else if (lowercaseUser === "rock")
        {
            if (computer === "paper")
            {
                window.alert("Computer wins! Paper beats rock!");
            }
            else if (computer === "scissors")
            {
                window.alert("You win! Rock beats scissors!");
            }
        }
        else if (lowercaseUser === "paper")
        {
            if (computer === "rock")
            {
                window.alert("You win! Paper beats rock!");
            }
            else if (computer === "scissors")
            {
                window.alert("Computer wins! Scissors beat paper!");
            }
        }
        else if (lowercaseUser === "scissors")
        {
            if (computer === "rock")
            {
                window.alert("Computer wins! Rock beats scissors!");
            }
            else if (computer === "paper")
            {
                window.alert("You win! Scissors beats paper!");
            }
        }
    }

}
checkWinner(userChoice, computerChoice);