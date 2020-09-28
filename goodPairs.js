// https://leetcode.com/problems/number-of-good-pairs/submissions/

var numIdenticalPairs = function(nums) {
    let hash = {}
    let count = 0
    
    for (let i=0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            count += hash[nums[i]]
            hash[nums[i]]++
        }
    }
    return count
};

var numIdenticalPairsOSquared = function(nums) {
    let count = 0
    for (let i=0; i < nums.length; i++) {
        for (let j=0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++
            }
        }
    }
    return count
}

let input1 = [1,2,3,1,1,3]
let input2 = [1,1,1,1]
let input3 = [1,2,3]

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    numIdenticalPairs(input1)
    numIdenticalPairs(input2)
    numIdenticalPairs(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    numIdenticalPairs(input1)
    numIdenticalPairs(input2)
    numIdenticalPairs(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)