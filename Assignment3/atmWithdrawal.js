function atmWithdrawal(balance, amount, correctPin, enteredPin) {
    // Check if the entered PIN is correct
    if (enteredPin !== correctPin) {
        return "Error: Invalid PIN";
    }

    // Check if there are enough funds
    if (amount > balance) {
        return "Error: Insufficient balance";
    }

    // Ensure the amount is a multiple of 100
    if (amount % 100 !== 0) {
        return "Error: Please enter an amount in multiples of 100";
    }
    balance -= amount;
    return `Success: Withdrawal completed. New balance: ${balance}`;
}
console.log(atmWithdrawal(8000, 2000, 5678, 5678)); // Expected: Success: Withdrawal completed. New balance: 6000
console.log(atmWithdrawal(8000, 9000, 5678, 5678)); // Expected: Error: Insufficient balance
console.log(atmWithdrawal(8000, 2500, 5678, 5678)); // Expected: Error: Please enter an amount in multiples of 100
console.log(atmWithdrawal(8000, 2000, 5678, 1234)); // Expected: Error: Invalid PIN
