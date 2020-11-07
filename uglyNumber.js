// https://leetcode.com/problems/ugly-number/

var isUgly = function(num) {
    if (num <= 0) {
        return false
    }
    
    while (num % 2 === 0) {
        num = num/2
    }
    while (num % 3 === 0 ) {
        num = num/3
    }
    while (num % 5 === 0) {
        num = num/5
    }
    
    if (num !== 1) {
        return false
    }
    
    return true
};

var isUglyLeetcode100 = function(num) {
    if (num < 1) {
        return false;
    }
    
    if (num < 7) {
        return true;
    }
    
    if (num % 2 === 0) {
        return isUgly(num / 2);
    }
    
    if (num % 3 === 0) {
        return isUgly(num / 3);
    }
    
    if (num % 5 === 0) {
        return isUgly(num / 5);
    }
    
    return false;
};

//this one is nifty
var isUglyLeetcodeSecond = function(n) {
    if(n<=0)return false
    while(n/2==~~(n/2)){
n/=2
}
while(n/3==~~(n/3)){
n/=3
}
while(n/5==~~(n/5)){
n/=5
}
return(n==1)
};

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    isUgly(6)
    isUgly(8)
    isUgly(14)
    isUgly(163840)
    isUgly(-500)
    isUgly(1)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    isUglyLeetcode100(6)
    isUglyLeetcode100(8)
    isUglyLeetcode100(14)
    isUglyLeetcode100(163840)
    isUglyLeetcode100(-500)
    isUglyLeetcode100(1)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    isUglyLeetcodeSecond(6)
    isUglyLeetcodeSecond(8)
    isUglyLeetcodeSecond(14)
    isUglyLeetcodeSecond(163840)
    isUglyLeetcodeSecond(-500)
    isUglyLeetcodeSecond(1)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)