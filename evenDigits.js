// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/

var findNumbers = function(nums) {

    let count = 0
    
    for (let i=0;i<nums.length;i++) {
        if (nums[i].toString().length % 2 === 0) {
            count++
        }
    }
    
    return count
}

var findNumbers = function(nums) {

    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let digits = 0;
        while (nums[i] > 0) {
            nums[i] = Math.floor(nums[i] / 10);
            digits++;
        }
        
        if (digits % 2 == 0) count++;
    }
    
    return count;
};