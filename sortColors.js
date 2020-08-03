// https://leetcode.com/problems/sort-colors/

let input1 = [2,0,2,1,1,0]
let input2 = [1,0]
let input3 = [2,0,1]
let input4 = [1,2,0]

var sortColorsFor = function(nums) {
    let zeros = 0
    let twos = 0
        
    for (let i=0; i < nums.length - twos; i++) {
        if (nums[i] === 0) {
            [nums[zeros], nums[i]] = [nums[i], nums[zeros]]
            zeros++
        } else if (nums[i] === 2) {
            [nums[nums.length - 1 - twos], nums[i]] = [nums[i], nums[nums.length - 1 - twos]]
            twos++
            i--
        }
    }
    return nums
};

var sortColorsWhile = function(nums) {
    let zeros = 0
    let twos = 0
    let i=0
        
    while (i < nums.length - twos) {
        if (nums[i] === 0) {
            [nums[zeros], nums[i]] = [nums[i], nums[zeros]]
            zeros++
            i++
        } else if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            [nums[nums.length - 1 - twos], nums[i]] = [nums[i], nums[nums.length - 1 - twos]]
            twos++
        }
    }
    return nums
};

var sortColors = function(nums) {
    let zeros = 0
    let ones = 0
    let twos = 0
    
    for (let i=0; i < nums.length; i++) {

        if (nums[i] === 0) {
            nums[zeros] = 0
            zeros++
        } else if (nums[i] === 1) {
            ones++
        } else {
            twos++
        }

    }

    while (ones > 0) {
        nums[nums.length - twos - ones] = 1
        ones--
    }
    while (twos > 0) {
        nums[nums.length - twos] = 2
        twos--
    }

    return nums
};

var sortColorsLeetcode100 = function(nums) {
    
    // Dutch National Flag
    
    let left = 0;
    let right = nums.length - 1;
    
    let i = 0;
    
    while (i <= right) {
        
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            i++;
            left++;
        }
        else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        }
        else {
            i++;
        }
    }
};

// console.log(sortColors(input1))
// console.log(sortColors(input2))
// console.log(sortColors(input3))
// console.log(sortColors(input4))

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    sortColors(input1)
    sortColors(input2)
    sortColors(input3)
    sortColors(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`rewrite time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    sortColorsFor(input1)
    sortColorsFor(input2)
    sortColorsFor(input3)
    sortColorsFor(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`for loop time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    sortColorsWhile(input1)
    sortColorsWhile(input2)
    sortColorsWhile(input3)
    sortColorsWhile(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`while loop time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    sortColorsLeetcode100(input1)
    sortColorsLeetcode100(input2)
    sortColorsLeetcode100(input3)
    sortColorsLeetcode100(input4)
}
end = Date.now()
timeElapsed = end - start
console.log(`while loop time: ${timeElapsed} ms`)