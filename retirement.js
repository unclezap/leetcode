function retirementCalculator (monthlySavings, interestRate, years) {

    months = years * 12
    // months = 12
    sum = 0

    for (let t=1; t <= months; t++) {
        rateOfReturn = Math.pow(1 + interestRate/12, t)
        perMonthReturn = monthlySavings * rateOfReturn
        sum += perMonthReturn
        console.log(perMonthReturn)
    }
    console.log("====")
    return sum
}

let retirementFunds = retirementCalculator(375,0.04, 40)
console.log("retirementFunds", retirementFunds)
console.log("per year at 3%", retirementFunds * 0.03)
console.log("per month at 3%", retirementFunds * 0.03/12)