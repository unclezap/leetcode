//https://leetcode.com/problems/single-number-ii/

let nums1 = [2,2,3,2]

var singleNumberMap = function(nums) {
    let map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        key = nums[i]
        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
            if ((map.get(key)) > 2) {
                map.delete(key)
            }
        } else {
            map.set(key, 1);
        }
    }

    return Array.from(map.keys())[0]
};



// console.log(singleNumber(nums1))

var singleNumberHash = function(nums) {
    let hash = {}

    for (let i=0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++
            if (hash[nums[i]] > 2) {
                delete hash[nums[i]]
            }
        } else {
            hash[nums[i]] = 1
        }
    }

    return parseInt(Object.keys(hash)[0])
}
// console.log(singleNumberHash(nums1))

var singleNumberLeetcode100 = function(nums) {
    let length = nums.length;
    let hash = {};
    for (let i = 0; i < length; i++) {
        let letter = nums[i];
        if ( hash[letter] ) {
            hash[letter] = i + 1;
        } else {
            hash[letter] = 1;
        };
    };
    for (let i = 0; i < length; i++) {
        if ( hash[nums[i]] === 1) {
            return nums[i];
        };
    };
    return -1;
};


console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    singleNumberHash(nums1)
}
end = Date.now()
timeElapsed = end - start
console.log(`hash time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    singleNumberMap(nums1)
}
end = Date.now()
timeElapsed = end - start
console.log(`map time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    singleNumberLeetcode100(nums1)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//map time faster than leetcode by ~800ms