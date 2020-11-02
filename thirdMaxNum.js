//https://leetcode.com/problems/third-maximum-number/

var thirdMax = function(nums) {
    if (nums.length < 3) {
        return Math.max(...nums)
    }
    
    let set = new Set()
    let max
    let secondMax
    let thirdMax
    
    for (let i=0; i< nums.length; i++) {
        if (!max || max < nums[i]) {
            thirdMax = secondMax
            secondMax = max
            max = nums[i]
            set.add(nums[i])
        } else if (!secondMax || secondMax < nums[i]) {
            if (!set.has(nums[i])) {
                thirdMax = secondMax
                secondMax = nums[i]
                set.add(nums[i])
            }
        } else if (!thirdMax || thirdMax < nums[i]) {
            if (!set.has(nums[i])) {
                thirdMax = nums[i]
                set.add(nums[i])
            }
        }
    }
    
    if (thirdMax === undefined) {
        return max
    }

    return thirdMax
};