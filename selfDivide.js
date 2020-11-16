// https://leetcode.com/problems/self-dividing-numbers/


var selfDividingNumbers = function(left, right) {
    let returnArray = []
    let number
    let digit
    
    for (let i=left; i <= right; i++) {
        number = i
        let works = true
        while (number >= 1) {
            digit = number % 10
            if (digit === 0 || i % digit !== 0) {
                works = false
                break
            }
            number -= digit
            number /= 10
        }
        if (works) {
            returnArray.push(i)
        }
    }
    
    return returnArray
};

//this seems like it'd be really slow actually
const selfDividingNumbersLeetcode100 = (left, right) => {
    let store = [];
    let digit;
    let count;
    for (let i = left; i <= right; i++) {
        digit = i.toString().split('');
        count = 0;
        for (const d of digit) if (i % d === 0) count++;
        if (count === digit.length) store.push(parseInt(i));
    }
    return store;
}

var selfDividingNumbersLeetcodeSecond = function(left, right) {
    const res = [];
    for (let i = left; i <= right; i++) {
        if (i < 10) {
            res.push(i);
            continue;
        }
        if (i.toString().includes('0')) {
            continue;
        }
        let n = i;
        let isDividable = true;
        while (n) {
            let digit = n % 10;
            if (i % digit) {
                isDividable = false;
                break;
            }
            n = Math.floor(n / 10);
        }
        if (isDividable) {
            res.push(i);
        }
    }
}
    

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    selfDividingNumbers(1,22)
    selfDividingNumbers(1,3)
    selfDividingNumbers(105,220)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    selfDividingNumbersLeetcode100(1,22)
    selfDividingNumbersLeetcode100(1,3)
    selfDividingNumbersLeetcode100(105,220)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    selfDividingNumbersLeetcode100(1,22)
    selfDividingNumbersLeetcode100(1,3)
    selfDividingNumbersLeetcode100(105,220)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)