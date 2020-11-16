// https://leetcode.com/problems/self-dividing-numbers/

var selfDividingNumbers = function(left, right) {
    let returnArray = []
    let number
    let tensPower = 0
    
    for (let i=left; i <= right; i++) {
        number = i
        let works = true
        while (10**tensPower <= number) {
            if (number % 10**(tensPower + 1) === 0 || i % (number % 10**(tensPower + 1)) !== 0) {
                works = false
                break
            }
            number -= number % 10**(tensPower + 1)
            tensPower++
        }
        if (works) {
            returnArray.push(number)
        }
    }
    
    return returnArray
};