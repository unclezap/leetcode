var firstMissingPositiveBetterMap = function(nums) {
    let map = new Map([[nums, 1]])
    console.log('map',map)
    for (let i=0; i < nums.length; i++) {
            map.set(nums[i], 1)
    }
    
    let counter = 1;
    while (map.get(counter)) {
        counter++
    }
    return counter;
};

let nums1 = [1,2,0]
// Output: 3

let nums2 = [3,4,-1,1]
// Output: 2

let nums3 = [7,8,9,11,12]

console.log(firstMissingPositiveBetterMap(nums1))
console.log(firstMissingPositiveBetterMap(nums2))
console.log(firstMissingPositiveBetterMap(nums3))