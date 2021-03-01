// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function(n) {
    let sum = 0
    let prod = 1
    let digit
    
    while (n > 0) {
        digit = n - 10*Math.floor(n/10)
        n = (n - digit)/10
        sum += digit
        prod *= digit
    }  
    
    return prod - sum
};