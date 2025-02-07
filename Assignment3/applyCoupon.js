function applyCoupon(orderAmount, couponCode) {
    let finalPrice = orderAmount;
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
      finalPrice = orderAmount - (orderAmount * 0.10); 
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
      console.log("Free shipping applied!"); 
    } else if (couponCode !== "") {
      console.log("Invalid coupon or conditions not met.");
    }
    return finalPrice;
  }
  // Example
  console.log(applyCoupon(600, "DISCOUNT10")); 
  console.log(applyCoupon(250, "FREESHIP"));   
  console.log(applyCoupon(400, "DISCOUNT10"));
  console.log(applyCoupon(150, "FREESHIP"));   
  console.log(applyCoupon(300, "INVALID"));
  