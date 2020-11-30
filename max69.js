// https://leetcode.com/problems/maximum-69-number/

var maximum69Number  = function(num) {
    let power = 1
    let digits = []
    
    while (10**power < num) {
        digits.push((num % 10**power))
        num-= num % 10**power
        power++
    }
    
    digits.push(num % 10**power)
    
    for (let i=digits.length - 1; i >= 0; i--) {
        if (digits[i]/10**(power-1) === 6) {
            digits[i] *= 1.5
            return digits.reduce((a,b) => {return a+b})
        }
        power--
    }

    return digits.reduce((a,b) => {return a+b})
};

//simple one liner

var maximum69NumberLeetcode100  = function(num) {
    return `${num}`.replace('6',9)
};

//changes data type tho
var maximum69NumberLeetcodeSecond  = function(num) {
    let str = num + ""
    for(let i=0; i< str.length; i++){
        if(str[i] =='6')
            return str.substring(0,i) + "9" + str.substring(i+1,str.length)
    }
    return num
};

//clever way to simplify things
var maximum69NumberLeetcodeThird  = function(num) {
    let lvlOfSix = -1;
    let temp = num;
    let curLvl = -1;
    while(temp > 0) {
        curLvl++;
        if((temp - 6) % 10 == 0) {
            lvlOfSix = curLvl;
        }
        temp = Math.floor(temp / 10)
    }
    
    
    return num + Math.floor(3 * (10**lvlOfSix));
};

//again, sort of cheaty
var maximum69NumberLeetcodeFourth  = function(num) {
    
    let x = num.toString().split('');
    let index = x.indexOf("6")
    
    if (index >= 0  ){
        x[index] = "9"
    }
    
   return Number(x.join(''))
};


console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maximum69Number(9)
    maximum69Number(9669)
    maximum69Number(9996)
    maximum69Number(9999)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maximum69NumberLeetcode100(9)
    maximum69NumberLeetcode100(9669)
    maximum69NumberLeetcode100(9996)
    maximum69NumberLeetcode100(9999)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maximum69NumberLeetcodeSecond(9)
    maximum69NumberLeetcodeSecond(9669)
    maximum69NumberLeetcodeSecond(9996)
    maximum69NumberLeetcodeSecond(9999)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maximum69NumberLeetcodeThird(9)
    maximum69NumberLeetcodeThird(9669)
    maximum69NumberLeetcodeThird(9996)
    maximum69NumberLeetcodeThird(9999)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maximum69NumberLeetcodeFourth(9)
    maximum69NumberLeetcodeFourth(9669)
    maximum69NumberLeetcodeFourth(9996)
    maximum69NumberLeetcodeFourth(9999)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)