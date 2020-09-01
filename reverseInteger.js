// https://leetcode.com/problems/reverse-integer/submissions/

var reverse = function(x) {
    
    
    let y = 0
    let reverse = 1
    
    if (x < 0) {
        reverse = -1
    }
    
    x *= reverse
    
    while (x > 0) {
        y *= 10
        y += x % 10
        x = Math.floor(x/10)
    }
    
    if (y*reverse >= 2147483647 || y*reverse <= -2147483648) {
        return 0
    } else {
        return y*reverse        
    }

};

var reverseLeetcode100 = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

var reverseLeetcodeSecondBest = function(x) {
    let sign = "";
    x = x.toString();
    if(x[0] == "-")
    {
        sign = "-";
        x = x.substr(1);
    }
    let ans = sign;
    for(let i = 1; i <= x.length; i++)
        ans += x[x.length - i];
    if(parseInt(ans) > 2147483647 || parseInt(ans) < -2147483648)
        return 0;
    return ans;
};

var reverseLeetcodeThirdBest = function(x) {
    let sum = 0;
    const isNegative = x < 0;
    if(isNegative)
        x = x * (-1);
    while(x > 0){
        const r = x % 10;
        sum = sum * 10 + r;
        x = Math.floor(x / 10)
    }
    if(isNegative)
        sum = sum * (-1);
    
    if(sum < -Math.pow(2,31) || sum > Math.pow(2, 31) - 1)
        return 0;
    else
        return sum;
};

var reverseLeetcodeFourthBest = function(x) {
    if (x % 10 === 0) {
        x = x / 10
    }
    var negativeCheck = false;
    if (x < 0) {
        negativeCheck = true;
    } 
    var xString = "" + Math.abs(x) + "";
    var result = "";
    
    for (var i = xString.length - 1; i >= 0; i --) {
        result = result + xString[i]
    }
    result = parseInt(result)
    if (result > (Math.pow(2, 31) - 1)) {
        return 0
    }
    if (negativeCheck) {
        return (0 - result)
    }
    else return result
};

var reverseLeetcodeFifthBest = function(x) {
    
    let reversedStr = x.toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr)*Math.sign(x);
    if(reversedNum > Math.pow(2, 31)){
        return 0
    } else if (reversedNum < (-1*Math.pow(2,31))){
               return 0
               }
    return reversedNum    
    
};


let input1 = 123
let input2 = -1079
let input3 = 1534236469

console.log(reverse(input1))
console.log(reverse(input2))
console.log(reverse(input3))
console.log(reverseLeetcode100(input1))
console.log(reverseLeetcode100(input2))
console.log(reverseLeetcode100(input3))

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    reverse(input1)
    reverse(input2)
    reverse(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    reverseLeetcode100(input1)
    reverseLeetcode100(input2)
    reverseLeetcode100(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    reverseLeetcodeSecondBest(input1)
    reverseLeetcodeSecondBest(input2)
    reverseLeetcodeSecondBest(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 2nd time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    reverseLeetcodeThirdBest(input1)
    reverseLeetcodeThirdBest(input2)
    reverseLeetcodeThirdBest(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 3rd time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    reverseLeetcodeFourthBest(input1)
    reverseLeetcodeFourthBest(input2)
    reverseLeetcodeFourthBest(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 4th time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    reverseLeetcodeFifthBest(input1)
    reverseLeetcodeFifthBest(input2)
    reverseLeetcodeFifthBest(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 5th time: ${timeElapsed} ms`)