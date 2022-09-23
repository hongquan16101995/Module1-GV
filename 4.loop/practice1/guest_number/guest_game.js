function guessTheNumber() {
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    let guestNum = Number(prompt("Enter the number you guess: "));
    let ranNum = Math.round(Math.random() * (num2 - num1) + num1);
    while (guestNum < num1 || guestNum > num2) {
        alert("You have entered wrong, please re-enter!")
        guestNum = Number(prompt("Enter the number you guess: "))
    }
    while (guestNum !== ranNum) {
        if (guestNum < ranNum) {
            alert("Bigger than you!")
        } else if (guestNum > ranNum) {
            alert("Smaller than you!")
        }
        guestNum = +prompt("Enter the number you guess: ")
        i++
        if (i === 3) {
            alert("You loss!")
            break;
        }
    }

    alert("You win!")
    document.write("Correct number is: " + ranNum)
}