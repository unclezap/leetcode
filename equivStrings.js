https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('') ? true : false
};


//derp way of doing it
var arrayStringsAreEqualDerp = function(word1, word2) {
    let index2 = 0
    let pos2 = 0
    
    for (let i=0;i<word1.length;i++) {
        for (let j=0;j<word1[i].length;j++) {
            if (word1[i][j] !== word2[index2][pos2]) {
                return false
            }
            pos2++
            if (!word2[index2][pos2]) {
                index2++
                pos2 = 0
            }
            if (!word2[index2]) {
                if (j+1 === word1[i].length && i+1 === word1.length) {
                    return true
                }
                return false
            } else if (!word2[index2][pos2]) {
                if (j+1 === word1[i].length && i+1 === word1.length) {
                    return true
                }
                return false
            }
        }
    }
    
    if (!!word2[index2][pos2]) {
        return false
    } else {
        return true
    }
};

var arrayStringsAreEqualLeetcode100 = function(word1, word2) {

    if(word1.join('')===word2.join('')) return true;
    return false;
};

var arrayStringsAreEqualLeetcode2 = function(word1, word2) {
    return word1.join('') === word2.join('');
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    arrayStringsAreEqual(["ab", "c"],["a", "bc"])
    arrayStringsAreEqual(["a", "cb"],["ab", "c"])
    arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"])
    arrayStringsAreEqual(["abc", "d", "def"],["abcddefg"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    arrayStringsAreEqualDerp(["ab", "c"],["a", "bc"])
    arrayStringsAreEqualDerp(["a", "cb"],["ab", "c"])
    arrayStringsAreEqualDerp(["abc", "d", "defg"],["abcddefg"])
    arrayStringsAreEqualDerp(["abc", "d", "def"],["abcddefg"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    arrayStringsAreEqualLeetcode100(["ab", "c"],["a", "bc"])
    arrayStringsAreEqualLeetcode100(["a", "cb"],["ab", "c"])
    arrayStringsAreEqualLeetcode100(["abc", "d", "defg"],["abcddefg"])
    arrayStringsAreEqualLeetcode100(["abc", "d", "def"],["abcddefg"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    arrayStringsAreEqualLeetcode2(["ab", "c"],["a", "bc"])
    arrayStringsAreEqualLeetcode2(["a", "cb"],["ab", "c"])
    arrayStringsAreEqualLeetcode2(["abc", "d", "defg"],["abcddefg"])
    arrayStringsAreEqualLeetcode2(["abc", "d", "def"],["abcddefg"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)