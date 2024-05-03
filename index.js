#! /usr/bin/env node
// Importing necessary libraries
import inquirer from "inquirer";
import chalk from "chalk";
// Welcome message
console.log(chalk.cyanBright(`\n\t Welcome to Saifi Developer's Guessing Game`));
console.log(chalk.greenBright("*".repeat(60)));
console.log("\n");
// Function to start the guessing game
async function guessingGame() {
    // Ask the user to input a number
    const { GuessNumber } = await inquirer.prompt([
        {
            type: "input",
            name: "GuessNumber",
            message: chalk.yellowBright("Guess a number between 1 to 7:  "),
        },
    ]);
    // Generating a random number between 1 and 7
    const Guess = Math.floor(Math.random() * 7 + 1);
    // Checking if the guessed number matches the generated number
    if (parseInt(GuessNumber) === Guess) {
        console.log(chalk.greenBright(`\t Congratulation ${chalk.yellowBright(GuessNumber)} you guessed correct number \n`));
    }
    else {
        console.log(chalk.redBright(`\t\n\t Sorry, ${chalk.blueBright(GuessNumber)} you guessed wrong number \n`));
    }
}
// Asking the user if they want to play again
async function playAgain() {
    const { play } = await inquirer.prompt([
        {
            type: "confirm",
            name: "play",
            message: chalk.yellowBright(" Do you want to play again?"),
            default: false,
        },
    ]);
    return play;
}
// Main function to run the guessing game
async function main() {
    await guessingGame(); // Initially start the game
    // Loop to ask the user if they want to play again
    let play = await playAgain();
    while (play) {
        await guessingGame();
        play = await playAgain();
    }
    // If the user doesn't want to play again, print a thank you message
    console.log(chalk.greenBright("\n\t\t Thank you for playing \n"));
}
// Calling the main function to start the game
main();
