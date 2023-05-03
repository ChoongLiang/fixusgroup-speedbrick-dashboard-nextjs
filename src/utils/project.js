class Project {
  constructor(data) {
    this.timestamp = data.timestamp;
    this.contractValue = data.contractValue;
    this.limitOfRetentionSum = data.limitOfRetentionSum;
    this.balanceBudget = data.balanceBudget;
    this.revenue = data.revenue;
    this.totalCostIncurred = data.totalCostIncurred;
    this.varianceRevenueTotalCostIncurred = data["variance(RevenueTotalCostIncurred)"];
  }
}

export default Project;
