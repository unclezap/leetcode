// https://leetcode.com/problems/non-decreasing-array/submissions/

//first attempt, too many exceptions
// var checkPossibility = function(nums) {
//     if (nums.length <= 1) {
//         return true
//     }
//     let count = 0
//     let last = nums[0]
//     for (let i=1; i < nums.length; i++) {
//         if (nums[i] <= nums[i-1]) {
//             count++
//             if (count > 1) {
//                 if (nums[i+1] < nums[i-1] || i === nums.length - 1) {
//                 return false
//                 } else {
//                 i++
//                 }
//             }
//         }
//     }
//     return true
// };
let input1 = [1,5,4,6,7,10,8,9]
let input2 = [4,2,1]
let input3 = [4,2,3]
let input5 = [4,7,1,8]
//kept trying various ways of changing the number checked or the previous one checked and running into exceptions so just did both
var checkPossibility = function(nums, count=0) {
    if (nums.length <= 1) {
        return true
    }
    for (let i=1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            if (count === 1) {
                return false
            }
            let changePrev = [...nums.slice(0,i-1), nums[i], nums[i], ...nums.slice(i+1, nums.length)]
            let changeCurr = [...nums.slice(0,i), nums[i-1], ...nums.slice(i+1, nums.length)]
            if (checkPossibility(changePrev, 1) || checkPossibility(changeCurr, 1)) {
                return true
            } else {
                return false
            }
        }
    }
    return true
};