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