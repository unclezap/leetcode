// https://leetcode.com/problems/maximum-subarray/

//original solution in leetcode, not sure if it's mine
var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)
  };

//   [1, 5, -1, 3, -2]

//   [1, 5, -1] = 4
//   [1, 5] = 6
//   [1] = 1
//   [5] = 5
//   [-1] = -1


//   [-1, 3, -2] = 0
//   [-1,]
  
//   [1,5,-1, 3, -2]


//   [1] = 1
//   [1, 5] = 6
//   [1, 5, -1] = 5
//   [1, 5, -1, 3] = 8
//   [1, 5, -1, 3] = 6
//   [5] = 5
//   [5, -1] = 4
//   [5, -1, 3] = 7
//   [5, -1, 3, -2] = 5
//   [-1] = -1
//   [-1, 3] = 2
//   [-1, 3, -2] = 0 
//   [3] = 3
//   [3, -2] = 1
//   [2] = 2


// 1
// 12
// 2

//   1
//   12
//   123
//   2
//   23
//   3

//   1
//   12
//   123
//   1234
//   2
//   23
//   234
//   3
//   34
//   4

  function maxSubarray(nums) {
    currentSum = 0
    maxSum = 0
    startIndex = 0
    endIndex = 0
    bestStart = 0
    bestEnd = 0

    for (let i=0; i< nums.length; i++) {
        if (currentSum <=0) {
            startIndex = i
            endIndex = i
            currentSum = nums[i]
        } else {
            currentSum += nums[i]
            endIndex = i
        }
        
        if (currentSum > maxSum) {
            maxSum = currentSum
            bestStart = startIndex
            bestEnd = endIndex + 1
        }
    }
    
    return nums.slice(bestStart, bestEnd)
};

console.log(maxSubarray([-2,1,-3,3,-2,4,1,-5,4]))
//stick a larger number after the max subarray and see if it gets picked up
console.log(maxSubarray([-2,1,-3,3,-2,4,1,-5,40]))
//stick the large number before and see if it gets noticed
console.log(maxSubarray([-2,40,-3,3,-2,4,1,-5,4]))
//the rest of the subarray doesn't outweigh the -30
console.log(maxSubarray([-2,40,-30,3,-2,4,1,-5,4]))

console.log(maxSubarray([-2,-40,-300,-4000,-1,-2,-1,-5,-4]))

[-2] <- first number we encounter is negative. No good.
[1] <- We have a positive number! This is our current largest subarray.
[1, -3] <- The -3 outweighs the 1. We will discard this array.
[3] <- Aha! A positive number larger than our previous sum. The currentSum > maxSum logic
 marches into action and we restart our tracking.
[3, -2] <- A smaller sum, but we don't have a negative number yet...we want to keep this
 array around to tack on to the beginning of any positive arrays we encounter 
 later, since that will make a bigger sum.
[3, -2, 4] <- It pays off! Our maximum sum is now 5, 2 bigger than the sum for [3].
[3, -2, 4, 1] <- Again we have a bigger currentSum than maxSum and we note the 
larger array.
[3, -2, 4, 1, -5] <- Our current sum is now 3. No resetting of maxSum.
[3, -2, 4, 1, -5, 4] <- We reach the end. The 4 is not enough to outweigh the 5 and we do
 not note a new end for the subarray.