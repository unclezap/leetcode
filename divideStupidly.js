// https://leetcode.com/problems/divide-two-integers/

var divide = function(dividend, divisor) {
    let count = 0
    
    if (dividend > 0) {
        if (divisor > 0) {
            while (dividend >= divisor) {
                dividend -= divisor
                count++
            }
        } else {
            while (dividend >= 0 - divisor) {
                dividend += divisor
                count++
            }
            count -= count + count
        }
    } else {
        if (divisor > 0) {
            while (dividend <= 0 - divisor) {
                dividend += divisor
                count++
            }
            count -= count + count
        } else {
            while (dividend <= divisor) {
                dividend -= divisor
                count++
            }
        }
    }

    return count >= 2147483648 || count < -2147483648 ? 2147483647 : count
};