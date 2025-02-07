function isEligibleForJob(age, experience, qualification) {node --version

    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
      return true; 
    } else {
      return false; 
    }
  }
  // Example 
  console.log(isEligibleForJob(30, 3, "Bachelor's Degree")); 
  console.log(isEligibleForJob(20, 5, "Bachelor's Degree")); 
  console.log(isEligibleForJob(40, 1, "Bachelor's Degree")); 
  console.log(isEligibleForJob(35, 4, "High School")); 
  