// https://leetcode.com/problems/xor-operation-in-an-array/

var xorOperation = function(n, start) {
    let array = []
    
    for (let i=0;i<n;i++) {
        array.push(start + 2*i)
    }
    
    return array.reduce((a,b) => a ^ b)
};

//because duh
var xorOperation2 = function(n, start) {
    let sum = 0
    
    for (let i=0;i<n;i++) {
        sum = sum ^ start + 2*i
    }
    
    return sum
};

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    xorOperation(5,0)
    xorOperation(4,3)
    xorOperation(1,7)
    xorOperation(10,5)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    xorOperation2(5,0)
    xorOperation2(4,3)
    xorOperation2(1,7)
    xorOperation2(10,5)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)