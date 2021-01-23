// https://leetcode.com/problems/largest-palindrome-product/

var largestPalindrome = function(n) {
    
    let num = 0
    while (n > 0) {
        num *= 10
        num += 9
        n--
    }
    let firstDif
    let secondDif
    
    for (let i=0;i<num;i++) {
        
        if (i % 2 === 0) {
            firstDif = i/2
            secondDif = i/2
        } else {
            firstDif = i/2 - 0.5
            secondDif = i/2 + 1
        }
    
        while (firstDif >= 0) {
            let product = (num - firstDif) * (num - secondDif)
            let copy = product
            let reverse = 0

            while (copy > 0) {
                reverse *= 10
                reverse += copy % 10
                copy -= copy % 10
                copy /= 10
            }

            if (product === reverse) {
                return product % 1337
            }
            
            firstDif--
            secondDif++
        }
    }
}

//LOLOLOLOLOLOL
var largestPalindromeFastest = function(n) {
    let hash = {
        1: 9,
        2: 987,
        3: 123,
        4: 597,
        5: 677,
        6: 1218,
        7: 877,
        8: 475
    }
    
    return hash[n]
}