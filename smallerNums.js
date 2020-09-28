// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/

var smallerNumbersThanCurrent = function(nums) {
    let returnArray = []
    let count
    
    for (let i=0; i < nums.length; i++) {
        count = 0
        for (let j=0; j < nums.length; j++) {
            if (j === i) {
                j++
            }
            if (nums[j] < nums[i]) {
                count++
            }
        }
        returnArray.push(count)
    }
      
      return returnArray
  };