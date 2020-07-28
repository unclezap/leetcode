let nums = [2,2,1]
let nums2 = [4,1,2,1,2]

var singleNumber = function(nums) {
    let res;
      nums.forEach(num => {
          
          if (nums.indexOf(num) === nums.lastIndexOf(num)) {
              res = num;
          }
      })
      
      return res;
  };

var singleNumberLeetcode100 = function(nums) {
    let a = 0
    
    for (let i of nums) {
        a ^= i
    }
    return a
};

console.log(singleNumber(nums))
console.log(singleNumber(nums2))

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    singleNumber(nums)
    singleNumber(nums2)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    singleNumberLeetcode100(nums)
    singleNumberLeetcode100(nums2)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//binary addition is 10+ times faster