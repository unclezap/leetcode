let nums1 = [2,33,33,33,2]
let nums2 = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
    let target = nums.length/2
    // if (nums.length === 1) {
    //     return nums[0]
    // } else {
    //     target = nums.length/2
    // }
    
    let hash = {}
    
    for (let k=0; k < nums.length; k++) {
        if (!hash[nums[k]]) {
            hash[nums[k]] = 1
        } else {
            hash[nums[k]]++
            if (hash[nums[k]] > target) {
                return nums[k]
            }
        }
    }
    console.log("ta",target)
    return hash
};

// let nums2 = [2,2,1,1,1,2,2]

var majorityElementLeetcode100 = function(nums) {
    let res = nums[0]; //default first is majority
    let count = 1; //first element count 1
    for (let i = 1; i < nums.length; i++){
        if (count == 0){
            res = nums[i]; //update new majority 
        }
        
        if (nums[i] != res){
            count--; //new element occur, offset count we have
        }
        else{
            count++;
        }
    }
    return res;
};

var majorityElementBestSpace = function(nums) {
    return nums.sort()[Math.floor(nums.length/2)]
      
  };

// console.log(majorityElementLeetcode100(nums2))

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    majorityElement(nums1)
    majorityElement(nums2)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    majorityElementLeetcode100(nums1)
    majorityElementLeetcode100(nums2)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    majorityElementLeetcode100(nums1)
    majorityElementLeetcode100(nums2)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)