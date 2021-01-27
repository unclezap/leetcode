// https://leetcode.com/problems/maximum-average-subarray-i/submissions/

var findMaxAverage = function(nums, k) {
    let average = 0
    
    for (let i=0;i<k;i++) {
        average += nums[i]
    }
    
    average /= k
    let maxAverage = average
    
    for (let i=k;i<nums.length;i++) {
        average += (nums[i] - nums[i-k])/k
        if (average > maxAverage) {
            maxAverage = average
        }
    }
    
    return maxAverage
};

var findMaxAverageTwo = function(nums, k) {
    let average = 0
    
    for (let i=0;i<k;i++) {
        average += nums[i]
    }
    
    average
    let max = average
    
    for (let i=k;i<nums.length;i++) {
        average += nums[i] - nums[i-k]
        if (average > max) {
            max = average
        }
    }
    
    return max/k
};

var findMaxAverageLeetcode100 = function(nums, k) {
    let average = 0
    
    for (let i=0;i<k;i++) {
        average += nums[i]
    }
    
    average /= k
    let maxAverage = average
    
    for (let i=k;i<nums.length;i++) {
        average += (nums[i] - nums[i-k])/k
        if (average > maxAverage) {
            maxAverage = average
        }
    }
    
    return maxAverage
};

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    findMaxAverage([1,12,-5,-6,50,3], 4)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    findMaxAverageTwo([1,12,-5,-6,50,3], 4)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    findMaxAverageLeetcode100([1,12,-5,-6,50,3], 4)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

1 10
2 9
3 8
4 7
5 6

1 9
2 8
3 7
4 6
5

5 * 6/2


4
3
2
1

5 = 5
1 = 6
4 = 10

1 = 1
2 = 3

3 = 6
4 = 10


n*(n+1)/2 = d
n^2/2 + n/2 - d = 0
a = 1/2
b = 1/2
c = -desiredNumber

gauss = -1/2 + sqrt(1/4+2*desiredNumber)
5 =? 1/2 + sqrt(1/4 + 2*15)
5 == 6

5 *(5+1)/2 = 15
5^2/2 + 5/2 - 15 = 0
5 = -1/2 + sqrt(1/4 + 2*desiredNumber)