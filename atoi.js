// https://leetcode.com/problems/string-to-integer-atoi/submissions/

let input1 = "42"
let input2 = ""
let input3 = "   -42"
let input4 = "4193 with words"
let input5 = "words and 987"
let input6 = "-91283472332"

var myAtoi = function(str) {
    let numHash = {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
    }
    
    let i=0
    while (str[i] === " ") {
        i++
    }
    
    if (str[i] === "-" || str[i] === "+" || numHash[str[i]]) {
        let sign = 1
        let j
    
        if (str[i] === "-") {
            sign = -1
            i++
        } else if (str[i] === "+") {
            i++
        }

        j=i
        
        while (numHash[str[j]]) {
            j++
        }

        if (sign * str.slice(i,j) > 2147483647) {
            return 2147483647
        } else if (sign * str.slice(i,j) < -2147483648) {
            return -2147483648
        } else {
            return sign * str.slice(i,j)
        }
    
    } else {
        return 0
    }
    
};

var myAtoiLeetcode100 = function(str) {
    const num = parseInt(str.replace(/ /,''), 10) || 0;
    if(num < -2147483648) return -2147483648;
    if(num > 2147483647) return 2147483647
    return num;
};

var myAtoiLeetcodeSecond = function(str) {
    let number = parseInt(str.trim().split(' ')[0], 10);
    if (isNaN(number)) {
      return 0;
    }
    if (number >= 2147483647) {
      return 2147483647; 
    }
    if (number <= -2147483648) {
      return -2147483648;
    }
    return number;
  };

  isNumber = char => {
    return (char >= '0' && char <= '9');
}

isSign = char => {
    return char === '-' || char === '+';
}

var myAtoiLeetcodeThird = function(str) {
    let result = '';

    str = str.trim('');

    let hasSign = false;

    if (!(isNumber(str[0]) || isSign(str[0]))) {
        return 0;
    } else {
        result += str[0];
    }

    if (isSign(str[0])) {
        hasSign = true;
    }

    for (let i = 1; i < str.length; i++) {
        const c = str[i];

        if (isNumber(c)) {
            result += c;
        } else {
            break;
        }
    }

    if (hasSign && result.length === 1) {
        return 0;
    }

    return Math.min(Math.max(result, -Math.pow(2, 31)), Math.pow(2, 31) - 1);
};

var myAtoiLeetcodeFourth = function(str) {
    
    let splitted = str.split(' ');
    
    let numbers = splitted.filter((e) => e!='');
    if(numbers.length <=0)
        return 0;
    
    if(!parseInt(numbers[0])) return 0;
    
    let num = parseInt(numbers[0]);
    let isNegative = Math.sign(num) == -1;
    return isNegative ? (num < -2147483648 ? -2147483648 : num) 
    : (num > 2147483647 ? 2147483647 : num); 
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    myAtoi(input1)
    myAtoi(input2)
    myAtoi(input3)
    myAtoi(input4)
    myAtoi(input5)
    myAtoi(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    myAtoiLeetcode100(input1)
    myAtoiLeetcode100(input2)
    myAtoiLeetcode100(input3)
    myAtoiLeetcode100(input4)
    myAtoiLeetcode100(input5)
    myAtoiLeetcode100(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    myAtoiLeetcodeSecond(input1)
    myAtoiLeetcodeSecond(input2)
    myAtoiLeetcodeSecond(input3)
    myAtoiLeetcodeSecond(input4)
    myAtoiLeetcodeSecond(input5)
    myAtoiLeetcodeSecond(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    myAtoiLeetcodeThird(input1)
    myAtoiLeetcodeThird(input2)
    myAtoiLeetcodeThird(input3)
    myAtoiLeetcodeThird(input4)
    myAtoiLeetcodeThird(input5)
    myAtoiLeetcodeThird(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    myAtoiLeetcodeFourth(input1)
    myAtoiLeetcodeFourth(input2)
    myAtoiLeetcodeFourth(input3)
    myAtoiLeetcodeFourth(input4)
    myAtoiLeetcodeFourth(input5)
    myAtoiLeetcodeFourth(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)