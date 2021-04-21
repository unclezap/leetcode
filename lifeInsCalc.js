function calc(premium, years, returnRate) {
    let moneySpent = 0
    let investValue = 0

    for (let i = 0; i < years; i++) {
        for (let j = 0; j < 12; j++) {
            moneySpent += premium
            investValue += premium
            investValue *= 1 + (returnRate / 12)
        }
    }

    console.log(`Results for ${returnRate * 100}% investment`)
    console.log('-------------------------------------------')
    console.log(`money spent: ${moneySpent}`)
    console.log(`Total investment value: ${investValue}`)
    console.log(`Amount earned: ${investValue - moneySpent}`)
    console.log(`Total value as percent of money spent: ${investValue / moneySpent}`)
    console.log('============')
    console.log('')
    console.log('')
    console.log('')
}

// calc(44.98, 30, 0.01)
calc(44.98, 30, 0.03)
calc(44.98, 30, 0.04)
calc(44.98, 30, 0.05)
// calc(44.98, 30, 0.08)
// calc(44.98, 30, 0.1)
