// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// var removeDuplicates = function(nums) {
// //     let count = 0
    
// //     for (let i=0; i< nums.length; i++) {
// //         while (nums[i] === nums[i+1]) {
// //             nums[i+1] = nums[i+2]
// //             i++
// //             if (i >= nums.length) {
// //                 break
// //             }
// //         }
// //         count++
// //     }
    
// //     return count
    
// //     // for (let i=nums.length - 2; i >= 0; i--) {
// //     //     if (nums[i] === nums[i+1]) {
// //     //         nums[i] = nums[i-1]
// //     //         i--
// //     //     }
// //     // }
    
// // };

// var removeDuplicates = function(nums) {
//     let count = 0
    
//     for (let i=1; i < nums.length; i++) {
//         if (nums[i] === nums[i-1]) {
//             nums[i] = nums[i+1]
//             nums[i+1] = -1
//             count++
//         }
//         if (nums[i] < 0) {
//             nums[i] = nums[i+1]
//             nums[i+1] = -1
//         }
//     }
    
//     return count
//     // for (let i=nums.length - 2; i >= 0; i--) {
//     //     if (nums[i] === nums[i+1]) {
//     //         nums[i] = nums[i-1]
//     //         i--
//     //     }
//     // }
    
// };

// console.log(removeDuplicates([1,1,2]))

var removeDuplicates = function(nums) {
    let count = 0
    for (let i=0; i < nums.length; i++) {
       if (nums[i] >= nums[i+1] ) {
           let broken = false
           for (let j=i+1; j<nums.length;j++) {
               if (nums[j] > nums[i]) {
                   nums[i+1] = nums[j]
                   count++
                   broken = true
                   break
               }
           }
           if (!broken) {
               return count + 1
           }
       } else {
           count++
       }
    }
    return count
    
};