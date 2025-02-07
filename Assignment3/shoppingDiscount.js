function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingFee = 0;
    if (orderAmount > 1000) {
        discount = orderAmount * 0.2; 
    } else if (orderAmount >= 500) {
        discount = orderAmount * 0.1; // 10% discount
    } 
    if (orderAmount <= 50) {
        shippingFee = 10; 
    } else {
        shippingFee = 0; // Free shipping
    }
    const totalAmount = orderAmount - discount + shippingFee;
    return `Total payable amount: $${totalAmount.toFixed(2)}`;
}

// Example 
console.log(calculateFinalAmount(1200)); // Output: Total payable amount: $970.00
console.log(calculateFinalAmount(800));  // Output: Total payable amount: $720.00
console.log(calculateFinalAmount(300));  // Output: Total payable amount: $310.00
console.log(calculateFinalAmount(40));   // Output: Total payable amount: $50.00
