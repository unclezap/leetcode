// https://leetcode.com/problems/two-sum/submissions/


var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

var twoSumLeetcode100 = function(nums, target) {
    const obj = {}
    for(let i = 0; i <nums.length; i++){
        if (obj[nums[i]] >=0){
            return [obj[nums[i]],i]
        }
        obj[target-nums[i]] = i
    }
};

var twoSumLeetcodeSecond = function(nums, target) {
    
    var objMap = {};
    nums.forEach((v,i) => objMap[v]=i);
    
    for(var i = 0;i<nums.length;i++)
    {
        var otherNum = target - nums[i];
        if(otherNum in objMap && objMap[otherNum] != i)
            {
                return [i, objMap[otherNum]];
            }        
    }   
};

var twoSumLeetcodeThird = function(nums, target) {
    const counter = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const numNeeded = target - num;
        if (counter[numNeeded] !== undefined) {
            const leftIndex = counter[numNeeded];
            return [leftIndex, i];
        } else {
            counter[num] = i
        }
    }
};

var twoSumLeetcodeFourth = function(nums, target) {
    var ans = [];
    var map = {};

    for (var i = 0; i < nums.length; i++){
        if (typeof(map[target-nums[i]]) !== 'undefined')
        {
            ans.push(map[target-nums[i]]);
            ans.push(i);
            break;
        }
        map[nums[i]] = i;
    }

    return ans;
};  

var twoSumLeetcodeFifth = function(nums, target) {
    let seen = {};
    
    for(let i = 0; i < nums.length; i++){
        let current = nums[i];
        let diff = target - current;

        if(seen[diff] !== undefined){
            return [seen[diff], i]
        }
        
        seen[current] = i;
    };

};

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    twoSum([2,7,11,15], 9)
    twoSum([3,2,4], 6)
    twoSum([3,3], 6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    twoSumLeetcode100([2,7,11,15], 9)
    twoSumLeetcode100([3,2,4], 6)
    twoSumLeetcode100([3,3], 6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    twoSumLeetcodeSecond([2,7,11,15], 9)
    twoSumLeetcodeSecond([3,2,4], 6)
    twoSumLeetcodeSecond([3,3], 6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    twoSumLeetcodeThird([2,7,11,15], 9)
    twoSumLeetcodeThird([3,2,4], 6)
    twoSumLeetcodeThird([3,3], 6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    twoSumLeetcodeFourth([2,7,11,15], 9)
    twoSumLeetcodeFourth([3,2,4], 6)
    twoSumLeetcodeFourth([3,3], 6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    twoSumLeetcodeFifth([2,7,11,15], 9)
    twoSumLeetcodeFifth([3,2,4], 6)
    twoSumLeetcodeFifth([3,3], 6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)