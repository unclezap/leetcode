// https://leetcode.com/problems/string-to-integer-atoi/submissions/

var myAtoi = function(str) {
    let numHash = {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
    }
    
    let i=0
    while (str[i] === " ") {
        i++
    }
    
    if (str[i] === "-" || str[i] === "+" || numHash[str[i]]) {
        let sign = 1
        let j
    
        if (str[i] === "-") {
            sign = -1
            i++
        } else if (str[i] === "+") {
            i++
        }

        j=i
        
        while (numHash[str[j]]) {
            j++
        }

        if (sign * str.slice(i,j) > 2147483647) {
            return 2147483647
        } else if (sign * str.slice(i,j) < -2147483648) {
            return -2147483648
        } else {
            return sign * str.slice(i,j)
        }
    
    } else {
        return 0
    }
    
};