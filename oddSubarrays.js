// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

var sumOddLengthSubarrays = function(arr) {
    let sum = 0
    let length = arr.length
    let oddCount
    
    if (length % 2 === 0) {
        oddCount = length - 1
    } else {
        oddCount = length
    }
    for (let j=0; j < length ; j++) {
        for (let i=0; i + j < length; i++) {
            sum += arr[i]
            console.log(i)
        }    
    }
    
    return sum
};