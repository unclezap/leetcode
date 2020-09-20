// https://leetcode.com/problems/sqrtx/submissions/

var mySqrt = function(x) {
    if (x < 6) {
        if (x === 0) {
            return 0
        } else if (x < 4) {
            return 1
        } else {
            return 2
        }
    }
    for (let i=1; i <= x/2; i++) {
        if (i**2 >= x) {
            if (i**2 === x) {
                return i                
            } else {
                return i -1
            }
        }
    }
};

//counting down probably would be slower the bigger the numbers are
var mySqrt2 = function(x) {
    if (x < 2) {
        return x
    }
    
    for (let i=Math.floor(x/2); i >= 1; i--) {
        if (i**2 <= x) {
            return i
        }
    }
};

//cheating is fastest
var mySqrtCheat = function(x) {
    return Math.floor(Math.sqrt(x))
}

var mySqrtLeetcodeCheat = function(x) {
    return Math.trunc(Math.pow(x, 0.5));
};

//faster counting down at slow nums
console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrt(10)
}
end = Date.now()
timeElapsed = end - start
console.log(`first time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrt2(10)
}
end = Date.now()
timeElapsed = end - start
console.log(`second time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrtCheat(10)
}
end = Date.now()
timeElapsed = end - start
console.log(`cheat time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrtLeetcodeCheat(10)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode cheat time: ${timeElapsed} ms`)

console.log('+++++')

//this is MUCH slower w/ counting donw
console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrt(1000)
}
end = Date.now()
timeElapsed = end - start
console.log(`first time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<10000000;u++) {
//   mySqrt2(1000)
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`second time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrtCheat(1000)
}
end = Date.now()
timeElapsed = end - start
console.log(`cheat time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
  mySqrtCheat(1000)
}
end = Date.now()
timeElapsed = end - start
console.log(`cheat time: ${timeElapsed} ms`)