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

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    largestNumber1([10,2])
    largestNumber1([3,30,34,5,9])
    largestNumber1([824,938,1399,5607,6973,5703,9609,4398,8247])
    largestNumber([121,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`first time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    largestNumbee2([10,2])
    largestNumbee2([3,30,34,5,9])
    largestNumbee2([824,938,1399,5607,6973,5703,9609,4398,8247])
    largestNumber([121,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`first time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    largestNumber3([10,2])
    largestNumber3([3,30,34,5,9])
    largestNumber3([824,938,1399,5607,6973,5703,9609,4398,8247])
    largestNumber([121,12])
}
end = Date.now()
timeElapsed = end - start
console.log(`first time: ${timeElapsed} ms`)