// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let depth = 0
    let maxDepth = 0
    
    for (let i=0;i<s.length;i++) {
        if (s[i] === "(") {
            depth++
            if (depth > maxDepth) {
                maxDepth = depth
            }
        } else if (s[i] === ")") {
            depth--
        }
    }
    
    return maxDepth
};

var maxDepth2 = function(s) {
    let depth = 0
    let maxDepth = 0
    
    for (let i=0;i<s.length;i++) {
        if (s[i] === "(") {
            depth++
        } else if (s[i] === ")") {
            if (depth > maxDepth) {
                maxDepth = depth
            }
            depth--
        }
    }
    
    return maxDepth
};

var maxDepthLeetcode100 = function(s) {
    let count = 0;
    let maxCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
            maxCount = Math.max(count, maxCount);
        } else if (s[i] === ")") {
            count--;
        }
    }
    return maxCount;
};

var maxDepthLeetcode2 = function(s) {
    var max = 0;
    var balance = 0;
    for (var i = 0; i < s.length; i++) {
//         if (s[i] == '(') {
//             max++
//             balance++
//         }
        
//         else if (s[i] == )
        switch (s[i]) {
            case '(':
                balance++;
                break;
            case ')':
                if (balance > max) {
                    max = balance;
                }
                balance--;
                break;
        }
            
    }
    
    if (balance == 0) {
        return max
    }
    
    return 0;
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxDepth("(1+(2*3)+((8)/4))+1")
    maxDepth("(1)+((2))+(((3)))")
    maxDepth("1+(2*3)/(2-1)")
    maxDepth("1")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxDepth2("(1+(2*3)+((8)/4))+1")
    maxDepth2("(1)+((2))+(((3)))")
    maxDepth2("1+(2*3)/(2-1)")
    maxDepth2("1")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxDepthLeetcode100("(1+(2*3)+((8)/4))+1")
    maxDepthLeetcode100("(1)+((2))+(((3)))")
    maxDepthLeetcode100("1+(2*3)/(2-1)")
    maxDepthLeetcode100("1")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxDepthLeetcode2("(1+(2*3)+((8)/4))+1")
    maxDepthLeetcode2("(1)+((2))+(((3)))")
    maxDepthLeetcode2("1+(2*3)/(2-1)")
    maxDepthLeetcode2("1")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)




