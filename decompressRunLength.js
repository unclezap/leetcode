https://leetcode.com/problems/decompress-run-length-encoded-list/

var decompressRLElist = function(nums) {
    let output = []
    
    for (let i=0;i<nums.length;i++) {
        for (let j=0;j<nums[i];j++) {
            output.push(nums[i+1])
        }
        i++
    }
    
    return output
};

var decompressRLElistLeetcode100 = function(nums) {
    let result = []; 
    for (let i = 0; i < nums.length / 2; i++) { 
        let freq = nums[2 * i]; 
        let val = nums[2 * i + 1]; 
        result.push(...new Array(freq).fill(val))
    }
    return result; 
};

var decompressRLElistLeetcode2 = function(nums) {
    // recursive solution 104 ms	45.1 MB
    // let pairs = (new Array(nums[0]).fill(nums[1]));
    // nums.shift();
    // nums.shift();
    // if (nums.length>0) {
    //     return pairs.concat(decompressRLElist(nums));
    // }
    // return pairs;
    
    // reduce solution 96 ms	44.5 MB
    // return nums.reduce((acc, val, key) => {
    //     if (key%2 == 0) {
    //         return acc.concat(new Array(nums[key]).fill(nums[key+1]))
    //     }
    //     return acc;
    // }, []).flat();
    
    // for+ concat 88 ms	44.2 MB
    let res = [];
    for (let i = 0; i<nums.length;i+=2) {
        // Array.prototype.push.apply(res, new Array(nums[i]).fill(nums[i+1]));
        res.push(...(new Array(nums[i]).fill(nums[i+1])));
    }
    return res;
};

var decompressRLElistLeetcode3 = function(nums) {
    result = []
    for(let i = 0;i<nums.length;i+=2){
        let freq = nums[i]
        while(freq > 0){
            result.push(nums[i+1])
            freq-=1
        }
    
    }
    return result
};

var decompressRLElistLeetcode4 = function(nums) {
    const output = [];
    let tracker = 0;
    
    while (tracker + 1 <= nums.length) {
        const array = [];
        for (let i = 0; i < nums[tracker]; i++) {
            array.push(nums[tracker + 1]);
        }
        output.push(...array);
        
        tracker+=2;
    }
    
    
    return output;
}

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    decompressRLElist([1,2,3,4])
    decompressRLElist([1,1,2,3])
    decompressRLElist([2,4,1,8,9,2,1,0])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    decompressRLElistLeetcode100([1,2,3,4])
    decompressRLElistLeetcode100([1,1,2,3])
    decompressRLElistLeetcode100([2,4,1,8,9,2,1,0])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    decompressRLElistLeetcode2([1,2,3,4])
    decompressRLElistLeetcode2([1,1,2,3])
    decompressRLElistLeetcode2([2,4,1,8,9,2,1,0])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    decompressRLElistLeetcode3([1,2,3,4])
    decompressRLElistLeetcode3([1,1,2,3])
    decompressRLElistLeetcode3([2,4,1,8,9,2,1,0])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    decompressRLElistLeetcode4([1,2,3,4])
    decompressRLElistLeetcode4([1,1,2,3])
    decompressRLElistLeetcode4([2,4,1,8,9,2,1,0])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)