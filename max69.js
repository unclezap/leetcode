// https://leetcode.com/problems/maximum-69-number/

var maximum69Number  = function(num) {
    let power = 1
    let digits = []
    
    while (10**power < num) {
        digits.push((num % 10**power))
        num-= num % 10**power
        power++
    }
    
    digits.push(num % 10**power)
    
    for (let i=digits.length - 1; i >= 0; i--) {
        if (digits[i]/10**(power-1) === 6) {
            digits[i] *= 1.5
            return digits.reduce((a,b) => {return a+b})
        }
        power--
    }

    return digits.reduce((a,b) => {return a+b})
};