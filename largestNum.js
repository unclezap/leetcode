// https://leetcode.com/problems/largest-number/

var largestNumber1 = function(nums) {

    nums.sort((first, second) => {
        first = first.toString()
        second = second.toString()
        return (second + first) - (first + second)
    })

    if (nums[0] == 0) {
        return '0'
    }
    
    let string = ""
    for (let i=0; i < nums.length; i++) {
        string += nums[i]
    }
    
    return string
};

var largestNumber2 = function(nums) {

    nums.sort((first, second) => {
        return ("" + second + first) - ("" + first + second)
    })

    if (nums[0] == 0) {
        return '0'
    }
    
    let string = ""
    for (let i=0; i < nums.length; i++) {
        string += nums[i]
    }

    return string
};

var largestNumber3 = function(nums) {

    nums.sort((first, second) => {
        return ("" + second + first) - ("" + first + second)
    })

    if (nums[0] == 0) {
        return '0'
    }

    return nums.join('')
};

var largestNumber4 = function(nums) {
    nums = nums.map((number) => {return "" + number})
    nums.sort((first, second) => {
        return (second + first) - (first + second)
    })

    if (nums[0] == 0) {
        return '0'
    }
    
    let string = ""
    for (let i=0; i < nums.length; i++) {
        string += nums[i]
    }

    return string
};

var largestNumberLeetcode100 = function(nums) {
    let strNums = [];
    
    for (let num of nums) {
        strNums.push(num.toString());
    }
    
    strNums.sort(comparator);
    
    if (strNums[0] === '0') return '0';
    
    return strNums.reduce((max, num) => max + num, '');
};

const comparator = (a, b) => {
    let str1 = a + b,
        str2 = b + a
    
    return str1 > str2 ? -1 : 1;
}

// console.log("=====")
// start = Date.now()
// for (u=0;u<100000;u++) {
//     largestNumber1([10,2])
//     largestNumber1([3,30,34,5,9])
//     largestNumber1([824,938,1399,5607,6973,5703,9609,4398,8247])
//     largestNumber1([121,12])
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`first time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    largestNumber2([10,2])
    largestNumber2([3,30,34,5,9])
    largestNumber2([824,938,1399,5607,6973,5703,9609,4398,8247])
    largestNumber2([121,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`second time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<100000;u++) {
//     largestNumber3([10,2])
//     largestNumber3([3,30,34,5,9])
//     largestNumber3([824,938,1399,5607,6973,5703,9609,4398,8247])
//     largestNumber3([121,12])
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`third time: ${timeElapsed} ms`)


console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    largestNumber4([10,2])
    largestNumber4([3,30,34,5,9])
    largestNumber4([824,938,1399,5607,6973,5703,9609,4398,8247])
    largestNumber4([121,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`fourth time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    largestNumberLeetcode100([10,2])
    largestNumberLeetcode100([3,30,34,5,9])
    largestNumberLeetcode100([824,938,1399,5607,6973,5703,9609,4398,8247])
    largestNumberLeetcode100([121,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//leetcode faster by about 2500ms