// https://leetcode.com/problems/first-missing-positive/

let nums1 = [1,2,0]
// Output: 3

let nums2 = [3,4,-1,1]
// Output: 2

let nums3 = [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function(nums) {
    let set = new Set()
    let small = -1

    for (let i=0; i < nums.length; i++) {
        if (!set.has(nums[i]) && nums[i] > 0) {
            set.add(nums[i])
            if (small === -1 || nums[i] < small) {
                small = nums[i]
            }
        }
        
    }
    
    if (small !== 1) {
        return 1
    }
    
    while (set.has(small)) {
        small++
    }
    
    return small
};

var firstMissingPositiveBetter = function(nums) {
    let set = new Set()
    
    for (let i=0; i < nums.length; i++) {
            set.add(nums[i])
    }
    
    let counter = 1;
    while (set.has(counter)) {
        counter++
    }
    return counter;
};

var firstMissingPositiveBetterBetter = function(nums) {
    const numbers = new Set(nums);
    let counter = 1
    while (numbers.has(counter)) {
        counter++
    }
    return counter
};

var firstMissingPositiveBetterMap = function(nums) {
    let map = new Map()
    
    for (let i=0; i < nums.length; i++) {
            map.set(nums[i],1)
    }
    
    let counter = 1;
    while (map.get(counter)) {
        counter++
    }
    return counter;
};

var firstMissingPositiveBetterHash = function(nums) {
    let hash = {}
    
    for (let i=0; i < nums.length; i++) {
        hash[nums[i]] = 1
    }
    
    let counter = 1;
    while (hash[counter]) {
        counter++
    }
    return counter;
};

var firstMissingPositiveLeetcode100 = function(nums) {
    if(! nums) return 1;
    let counter = 1;
    while(nums.indexOf(counter) !== -1){
        counter++
    }
    return counter;
};

var firstMissingPositiveLeetcodeNextBucket = function(nums) {
    if(nums.length==0)
        return 1
    let no=[]
    for(let i = 0 ; i<nums.length; i++){
        if(nums[i]<0){
            nums.splice(i,1)
        }
    }
    //console.log(nums)
    for(let i = 0 ; i<nums.length; i++){
        no[nums[i]-1]=(nums[i]-1)
    }
    //console.log(no)
    for(let i = 0 ; i<nums.length; i++){
        if(no[i]==undefined){
           return i+1
        }
    }
    return nums.length+1
};

// console.log(firstMissingPositive(nums1))
// console.log(firstMissingPositive(nums2))
// console.log(firstMissingPositive(nums3))

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositive(nums1)
    firstMissingPositive(nums2)
    firstMissingPositive(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetter(nums1)
    firstMissingPositiveBetter(nums2)
    firstMissingPositiveBetter(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetterBetter(nums1)
    firstMissingPositiveBetterBetter(nums2)
    firstMissingPositiveBetterBetter(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better better time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetterMap(nums1)
    firstMissingPositiveBetterMap(nums2)
    firstMissingPositiveBetterMap(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better map time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetterHash(nums1)
    firstMissingPositiveBetterHash(nums2)
    firstMissingPositiveBetterHash(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better hash time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveLeetcode100(nums1)
    firstMissingPositiveLeetcode100(nums2)
    firstMissingPositiveLeetcode100(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveLeetcodeNextBucket(nums1)
    firstMissingPositiveLeetcodeNextBucket(nums2)
    firstMissingPositiveLeetcodeNextBucket(nums3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode second bucket time: ${timeElapsed} ms`)

console.log("+++++++")
console.log("edge case")
console.log("+++++++")

let numsEdge = []
for (let i=0; i < 100; i++) {
    numsEdge.push(i)
}

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositive(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetter(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetterBetter(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better better time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetterMap(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better map time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveBetterHash(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb better hash time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveLeetcode100(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    firstMissingPositiveLeetcodeNextBucket(numsEdge)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode second bucket time: ${timeElapsed} ms`)