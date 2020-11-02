// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    let count = 0
    
    for (let i=0; i< nums.length; i++) {
        while (nums[i] === nums[i+1]) {
            nums[i+1] = nums[i+2]
            i++
            if (i >= nums.length) {
                break
            }
        }
        count++
    }
    
    return count
    
    // for (let i=nums.length - 2; i >= 0; i--) {
    //     if (nums[i] === nums[i+1]) {
    //         nums[i] = nums[i-1]
    //         i--
    //     }
    // }
    
};