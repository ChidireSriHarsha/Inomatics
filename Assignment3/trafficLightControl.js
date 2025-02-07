function trafficLightControl(density) {
    let duration;
    if (density === "Heavy Traffic") {
      duration = 60; 
    } else if (density === "Moderate Traffic") {
      duration = 40; 
    } else if (density === "Light Traffic") {
      duration = 20; 
    } else {
      duration = 0; 
      console.error("Error: Invalid traffic density input.");
    }
    return duration;
  }
  // Example 
  console.log(trafficLightControl("Heavy Traffic"));
  console.log(trafficLightControl("Moderate Traffic")); 
  console.log(trafficLightControl("Light Traffic")); 
  console.log(trafficLightControl("Unknown")); 
  