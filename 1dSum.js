// https://leetcode.com/problems/running-sum-of-1d-array/submissions/

var runningSum = function(nums) {
    let returnArray = [nums[0]]
    
    for (let i=1; i < nums.length; i++) {
        returnArray.push(nums[i] + returnArray[i-1])
    }
    
    return returnArray
};

var runningSum2 = function(nums) {
    for (let i=1; i < nums.length; i++) {
        nums[i] += nums[i-1]
    }
    return nums
};