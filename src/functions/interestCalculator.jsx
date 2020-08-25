export const InterestCalculator = (inputValue) => {
  const initFlowDate = new Date("2020-08-12");
  const currentDate = new Date(Date.now());

  const genesisLength = addDays(initFlowDate, 60);
  const halvingCycle = addDays(genesisLength, 365);

  let eras = [initFlowDate, genesisLength, halvingCycle];
  let currentCycleDate = null;

  for (let i = 1; i < 10; i++) {
    let cycle = addDays(halvingCycle, 365 * i);
    eras.push(cycle);
  }

  function determineCurrentCycle() {
    for (let date in eras) {
      if (currentDate < eras[date]) {
        currentCycleDate = eras[date];
        return date;
      }
    }
  }

  const currentCycle = determineCurrentCycle();

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function dateDifference() {
    const timeDifference = currentCycleDate.getTime() - currentDate.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    return dayDifference;
  }

  const daysRemaining = dateDifference();

  let compoundedInterest =
    inputValue.initBalance * (1 + 0.01 / currentCycle) ** daysRemaining;

  const compounded = [];

  function compoundingInterest() {
    compounded.push(compoundedInterest);
    for (let era in eras) {
      if (currentDate <= eras[era]) {
        eraInterest(eras[era], era);
      }
    }

    return compounded;
  }

  function eraInterest(date, index) {
    const interestRate = 1 + 0.01 / 2 ** index;
    const cycleInterest = compoundedInterest * interestRate ** 365;
    compoundedInterest = cycleInterest;
    compounded.push(cycleInterest);
  }

  return compoundingInterest();
};
