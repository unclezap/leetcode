// https://leetcode.com/problems/longest-consecutive-sequence/
let nums1 = [0, -1]
let nums2 = [100, 4, 200, 1, 3, 2]
let nums3 = [1,2,3,5,6,10,7,9]


var longestConsecutiveHash = function(nums) {
    let hash = {}
    
    for (let i=0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        }
    }
    
    let tempMax
    let max = 0
    // let keys = Object.keys(hash)
    
    for (let i=0; i < nums.length; i++) {
        if (!hash[nums[i] - 1]) {
            tempMax = 1
            while (hash[nums[i] + tempMax]) {
                tempMax++
            }
            max = Math.max(max, tempMax)
        }
    }

    return max
};

var longestConsecutiveMap = function(nums) {
    let map = new Map()
    
    for (let i=0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
    }
    
    let tempMax
    let max = 0

    map.forEach((value, key) => {
        if (!map.get(key - 1)) {
            tempMax = 1
            while(map.get(key + tempMax)) {
                tempMax++
            }
            max = Math.max(tempMax, max)
        }
    })
    
    return max
};

var longestConsecutiveSet = function(nums) {
    let set = new Set()
    
    for (let i=0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i], 1)
        }
    }
    
    let tempMax
    let max = 0

    set.forEach((num) => {
        if (!set.has(num - 1)) {
            tempMax = 1
            while(set.has(num + tempMax)) {
                tempMax++
            }
            max = Math.max(tempMax, max)
        }
    })
    
    return max
};

console.log("======")
start = Date.now()
for (let i=0; i < 100000; i++) {
    longestConsecutiveHash(nums1)
    longestConsecutiveHash(nums2)
    longestConsecutiveHash(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`hash time: ${timeElapsed} ms`)

console.log("======")
start = Date.now()
for (let i=0; i < 100000; i++) {
longestConsecutiveMap(nums1)
longestConsecutiveMap(nums2)
longestConsecutiveMap(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`map time: ${timeElapsed} ms`)

console.log("======")
start = Date.now()
for (let i=0; i < 100000; i++) {
longestConsecutiveSet(nums1)
longestConsecutiveSet(nums2)
longestConsecutiveSet(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`set time: ${timeElapsed} ms`)

// var longestConsecutive = function(nums) {
//     // let hash = {nums[0]: 1, nums[0] - 1: 0, nums[0] + 1: 0}
//     let hash = {}
    
//     for (let i=0; i < nums.length; i++) {
//         if (hash[nums[i]] === 0) {
//             hash[nums[i]] = 1
//             if (!hash[nums[i] + 1]) {
//                 hash[nums[i] + 1] = 0
//             }
//             if (!hash[nums[i] - 1]) {
//                 hash[nums[i] - 1] = 0
//             }
//         } else if (!hash[nums[i]]) {
//             hash[nums[i]] = 1
//             hash[nums[i] + 1] = 0
//             hash[nums[i] - 1] = 0
//         }
//     }
    
//     let values = Object.values(hash)
//     let max = 0
//     let tempMax = 0
//     console.log(Object.values(hash))
    
//     for (let i=0; i < values.length; i++) {
//         if (values[i] === 0) {
//             tempMax = 0
//             console.log('zero', tempMax)
//         } else {
//             tempMax++
//             if (tempMax > max) {
//                 max = tempMax
//             }
//             console.log('one', tempMax, max)
//         }
//     }
    
//     return max
// };