function calculateGrade(marks, attendance) {
    if (attendance > 90) {
      marks += 5;
    }
    let grade = "F"; // Default grade is "F"
  
    if (marks >= 90) {
      grade = "A";
    } else if (marks >= 80) {
      grade = "B";
    } else if (marks >= 70) {
      grade = "C";
    } else if (marks >= 60) {
      grade = "D";
    }
    return grade;
  }
  // Example 
  console.log(calculateGrade(88, 92)); // Expected: "B" (with extra credit)
  console.log(calculateGrade(73, 85)); // Expected: "C"
  console.log(calculateGrade(45, 95)); // Expected: "F" (with extra credit)
  