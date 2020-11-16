// https://leetcode.com/problems/self-dividing-numbers/


var selfDividingNumbers = function(left, right) {
    let returnArray = []
    let number
    let digit
    let tensPower = 0
    
    for (let i=left; i <= right; i++) {
        number = i
        let works = true
        while (number >= 1) {
            digit = number % 10
            if (digit === 0 || i % digit !== 0) {
                works = false
                break
            }
            number -= digit
            number /= 10
        }
        if (works) {
            returnArray.push(i)
        }
    }
    
    return returnArray
};