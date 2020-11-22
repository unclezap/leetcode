// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

var sumOddLengthSubarrays = function(arr) {
    let sum = 0
    let length = arr.length
    let oddCount = 1
    
    for (let oddCount = 1; oddCount<=length; oddCount += 2) {
        for (let i=0; i<length; i++) {
            if (i + oddCount <= length) {
                for (let j=0; j<oddCount; j++) {
                    sum += arr[i+j]
                }                
            }
        }
    }
    
    return sum
};

var sumOddLengthSubarraysLeetcode100 = function(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        let ls = 0;
        for (let j=i; j<arr.length; j++) {
            ls += arr[j];
            if ((i+j) % 2 === 0) {
                sum += ls;
            }
        }
    }
    return sum;
};

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    sumOddLengthSubarrays([1,4,2,5,3])
    sumOddLengthSubarrays([1,2])
    sumOddLengthSubarrays([10,11,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    sumOddLengthSubarraysLeetcode100([1,4,2,5,3])
    sumOddLengthSubarraysLeetcode100([1,2])
    sumOddLengthSubarraysLeetcode100([10,11,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)