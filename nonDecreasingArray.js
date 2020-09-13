// https://leetcode.com/problems/non-decreasing-array/submissions/

//first attempt, too many exceptions
// var checkPossibility = function(nums) {
//     if (nums.length <= 1) {
//         return true
//     }
//     let count = 0
//     let last = nums[0]
//     for (let i=1; i < nums.length; i++) {
//         if (nums[i] <= nums[i-1]) {
//             count++
//             if (count > 1) {
//                 if (nums[i+1] < nums[i-1] || i === nums.length - 1) {
//                 return false
//                 } else {
//                 i++
//                 }
//             }
//         }
//     }
//     return true
// };
let input1 = [1,5,4,6,7,10,8,9]
let input2 = [4,2,1]
let input3 = [4,2,3]
let input4 = [4,7,1,8]
//kept trying various ways of changing the number checked or the previous one checked and running into exceptions so just did both
var checkPossibility = function(nums, count=0) {
    if (nums.length <= 1) {
        return true
    }
    for (let i=1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            if (count === 1) {
                return false
            }
            let changePrev = [...nums.slice(0,i-1), nums[i], nums[i], ...nums.slice(i+1, nums.length)]
            let changeCurr = [...nums.slice(0,i), nums[i-1], ...nums.slice(i+1, nums.length)]
            if (checkPossibility(changePrev, 1) || checkPossibility(changeCurr, 1)) {
                return true
            } else {
                return false
            }
        }
    }
    return true
};

var checkPossibilityEdited = function(nums, count=0) {
    if (nums.length <= 1) {
        return true
    }
    for (let i=1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            if (count === 1) {
                return false
            }
            let changePrev = [nums[i-2], nums[i], ...nums.slice(i+1, nums.length)]
            let changeCurr = [nums[i-1], ...nums.slice(i+1, nums.length)]
            if (checkPossibility(changePrev, 1) || checkPossibility(changeCurr, 1)) {
                return true
            } else {
                return false
            }
        }
    }
    return true
};

var checkPossibilityLeetcode100 = function(nums) {
    let count = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] >= nums[i-1]){
            continue;
        }
        if(i>=2 && nums[i-2] > nums[i]){
            nums[i] = nums[i-1]
        }else{
            nums[i-1] = nums[i]
        }
        count++;
    }
    return count <=1
};

var checkPossibilityLeetcodeSecond = function(nums) {
    
    let wiggle = 1;
    
    for(let index = 0; index < nums.length; index++) {
        // console.log(nums);
        
        // First index
        if(index == 0 && nums.length >= 2 && !(nums[index + 1] >= nums[index]) ) {
            
            // If max reached
            if(wiggle <= 0) {
                console.log("About to fail: " + nums[index + 1] + ", " + nums[index] + ", " + nums[index - 1]);
                return false;
            }
            
            nums[index] = nums[index + 1] - 1;
            wiggle--;
        }
        // In between
        else if( index > 0 && index + 1 < nums.length && !(nums[index + 1] >= nums[index] && nums[index] >= nums[index - 1]) ) {
            
            // If max reached
            if(wiggle <= 0) {
                // console.log("About to fail: " + nums[index + 1] + ", " + nums[index] + ", " + nums[index - 1]);
                
                return false;
            }
            
            
            // Check if prob has to do with being smaller than the index before
            if(nums[index] < nums[index - 1]) {
                // console.log("1");
                nums[index] = nums[index - 1];
                wiggle--;
            }
            
            // Check if prob has to do with being bigger than the index after
            else if(nums[index] > nums[index + 1]) {
                // console.log("2");
                
                
                if( nums[index - 1] > nums[index + 1] ) {
                    nums[index + 1] = nums[index];
                }
                
                else {
                    nums[index] = nums[index - 1];
                }
                
                
                
                wiggle--;
            }
            
            
            
            // console.log("Problem at index: " + index + " for " + nums[index]);
        }
        // Last index
        else if( index == nums.length - 1 && nums.length >= 2 && !(nums[index - 1] <= nums[index]) ) {
            
            // If max reached
            if(wiggle <= 0) {
                console.log("About to fail: " + nums[index + 1] + ", " + nums[index] + ", " + nums[index - 1]);
                return false;
            }
            
            
            nums[index] = nums[index - 1] + 1;
            wiggle--;
        }
        
    }
    
    return true;
    
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    checkPossibility(input1)
    checkPossibility(input2)
    checkPossibility(input3)
    checkPossibility(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    checkPossibilityEdited(input1)
    checkPossibilityEdited(input2)
    checkPossibilityEdited(input3)
    checkPossibilityEdited(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`edited time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    checkPossibilityLeetcode100(input1)
    checkPossibilityLeetcode100(input2)
    checkPossibilityLeetcode100(input3)
    checkPossibilityLeetcode100(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    checkPossibilityLeetcodeSecond(input1)
    checkPossibilityLeetcodeSecond(input2)
    checkPossibilityLeetcodeSecond(input3)
    checkPossibilityLeetcodeSecond(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 2nd time: ${timeElapsed} ms`)