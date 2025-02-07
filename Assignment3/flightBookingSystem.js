function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    if (classType === "Business") {
      baseFare += 200;
    } else if (classType === "First") {
      baseFare += 500;
    }
    if (luggageWeight > 20) {
      baseFare += Math.ceil((luggageWeight - 20) / 10) * 50;
    }
    if (isStudent) {
      baseFare *= 0.85;
    } else if (isSenior) {
      baseFare *= 0.90;
    }
    return baseFare.toFixed(2);
  }
  console.log(calculateFlightFare("Economy", 25, true, false));
  console.log(calculateFlightFare("Business", 30, false, true));
  console.log(calculateFlightFare("First", 15, false, false));
  console.log(calculateFlightFare("Economy", 40, false, false));
  