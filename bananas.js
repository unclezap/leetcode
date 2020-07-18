// https://leetcode.com/problems/koko-eating-bananas/

var minEatingSpeed = function(piles, H) {
    if (H <= piles.length) {
        return Math.max(...piles)
    }

    let extraTurns = H - piles.length

    
};

// Example 1:

// console.log([3,6,7,11], 8)
// Output: 4

// Example 2:

console.log(minEatingSpeed([30,11,23,4,20],5))
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], H = 6
// Output: 23