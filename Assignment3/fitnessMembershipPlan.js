function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    const plans = {
      Basic: { cost: 20, includesTrainer: false, includesDietPlan: false },
      Premium: { cost: 50, includesTrainer: true, includesDietPlan: false },
      VIP: { cost: 80, includesTrainer: true, includesDietPlan: true },
    };
  
    if (!plans[planType]) {
      return "Invalid membership plan selected.";
    }
  
    const selectedPlan = plans[planType];
  
    if (wantsTrainer && !selectedPlan.includesTrainer) {
      return "Upgrade to the Premium plan for a personal trainer.";
    }
    if (wantsDietPlan && !selectedPlan.includesDietPlan) {
      return "Upgrade to the VIP plan for a diet plan.";
    }
  
    return `The ${planType} plan is suitable for your needs.`;
  }
  
  console.log(choosePlan("Basic", false, false));
  console.log(choosePlan("Basic", true, false));
  console.log(choosePlan("Premium", true, true));
  console.log(choosePlan("VIP", true, true));
  console.log(choosePlan("Standard", false, false));
  