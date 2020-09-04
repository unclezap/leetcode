// https://leetcode.com/problems/valid-parentheses/submissions/

let s1 = "()"
let s2 = "()[]{}"
let s3 = "(]"
let s4 = "([)]"
let s5 = "({[(()())]})"

var isValid = function(s) {
    let parCount = 0
    let squigCount = 0
    let bracketCount = 0
    let lastBracket = []
    
    for (let i=0; i < s.length;i++) {
    
        if (s[i] === "(") {
            parCount++
            lastBracket.push("(")
        } else if (s[i] === "{") {
            squigCount++
            lastBracket.push("{")
        } else if (s[i] === "[") {
            bracketCount++
            lastBracket.push("[")
        } else {
            
            if (s[i] === ")") {
                if (parCount < 1 || lastBracket.pop() !== "(") {
                    return false
                }
                parCount--
            } else if (s[i] === "}") {
                if (squigCount < 1 || lastBracket.pop() !== "{") {
                    return false
                }
                squigCount--
            } else {
                if (bracketCount < 1 || lastBracket.pop() !== "[") {
                    return false
                }
                bracketCount--
            }
            
        }
    }
    if (parCount === 0 && squigCount === 0 && bracketCount === 0) {
        return true
    }
    return false
};

var isValid2 = function(s) {

    let lastBracket = []
    
    for (let i=0; i < s.length;i++) {
    
            if (s[i] === ")") {
                if (lastBracket.pop() !== "(") {
                    return false
                }
            } else if (s[i] === "}") {
                if (lastBracket.pop() !== "{") {
                    return false
                }
            } else if (s[i] === "]") {
                if (lastBracket.pop() !== "[") {
                    return false
                }
            } else {
                lastBracket.push(s[i])
            }
    }

    if (lastBracket.length === 0) {
        return true
    }

    return false
};

var isValid3 = function(s) {
    let hashValues = {
        "(" : 1,
        ")" : -1,
        "{" : 2,
        "}" : -2,
        "[" : 3,
        "]" : -3
    }

    let lastBracket = []

    for (let i=0; i < s.length; i++) {
        if (hashValues[s[i]] > 0) {
            lastBracket.push(s[i])
        } else {
            if (hashValues[s[i]] + hashValues[lastBracket.pop()] !== 0) {
                return false
            }
        }
    }
    if (lastBracket.length === 0) {
        return true
    }
    return false
}

var isValidLeetcode100 = function(s) {
    const stack = [];
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            // opens
            case '(':
            case '{':
            case '[':
                stack.push(s[i]);
                break;
            case ')':
                if (stack.pop() !== '(')
                    return false;
                break;
            case '}':
                if (stack.pop() !== '{')
                    return false;
                break;
            case ']':
                if (stack.pop() !== '[')
                    return false;
                break;
        }
    }
    return stack.length === 0;
};

var isValidLeetcodeSecond = function(s) {
    // Set up overkill optimizations
    const lefts = {
        '(': true,
        '{': true,
        '[': true
    };

    const rights = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    let stack = [];
    for (let char of s) {
        if (lefts[char]) {
            stack.push(char);
        } else {
            let test = stack.pop();
            if (test != rights[char]) {
                return false;
            }
        }
    }
    
    return !stack.length;
};

var isValidLeetcodeThird = function(s) {
    const stack = [];
    const openingChars = '({[';
    const matchingMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (openingChars.includes(char)) {
            stack.push(char)
        } else {
            const lastParens = stack.pop();
            if (matchingMap[lastParens] != char) {
                return false
            }
        }
    }
    
    return stack.length === 0;
};

var isValidLeetcodeFourth = function(s) {
    const stack = [];
    const openingChars = '({[';
    const matchingMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (openingChars.includes(char)) {
            stack.push(char)
        } else {
            const lastParens = stack.pop();
            if (matchingMap[lastParens] != char) {
                return false
            }
        }
    }
    
    return stack.length === 0;
};

const closeMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  var isValidLeetcodeFifth = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        stack.push(s[i]);
      } else if (!stack.length || closeMap[stack.pop()] !== s[i]) {
        return false;
      }
    }
    return stack.length === 0;
  };

// console.log(isValid(s1))
// console.log(isValid(s2))
// console.log(isValid(s3))
// console.log(isValid(s4))
// console.log(isValid(s5))
// console.log("+++")
// console.log(isValid2(s1))
// console.log(isValid2(s2))
// console.log(isValid2(s3))
// console.log(isValid2(s4))
// console.log(isValid2(s5))
// console.log("+++")
// console.log(isValid3(s1))
// console.log(isValid3(s2))
// console.log(isValid3(s3))
// console.log(isValid3(s4))
// console.log(isValid3(s5))

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValid(s1)
isValid(s2)
isValid(s3)
isValid(s4)
isValid(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb1 time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValid2(s1)
isValid2(s2)
isValid2(s3)
isValid2(s4)
isValid2(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb2 time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValid3(s1)
isValid3(s2)
isValid3(s3)
isValid3(s4)
isValid3(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb3 time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValidLeetcode100(s1)
isValidLeetcode100(s2)
isValidLeetcode100(s3)
isValidLeetcode100(s4)
isValidLeetcode100(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValidLeetcodeSecond(s1)
isValidLeetcodeSecond(s2)
isValidLeetcodeSecond(s3)
isValidLeetcodeSecond(s4)
isValidLeetcodeSecond(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 2nd time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValidLeetcodeThird(s1)
isValidLeetcodeThird(s2)
isValidLeetcodeThird(s3)
isValidLeetcodeThird(s4)
isValidLeetcodeThird(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 3rd time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValidLeetcodeFourth(s1)
isValidLeetcodeFourth(s2)
isValidLeetcodeFourth(s3)
isValidLeetcodeFourth(s4)
isValidLeetcodeFourth(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 4th time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
isValidLeetcodeFifth(s1)
isValidLeetcodeFifth(s2)
isValidLeetcodeFifth(s3)
isValidLeetcodeFifth(s4)
isValidLeetcodeFifth(s5)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 5th time: ${timeElapsed} ms`)