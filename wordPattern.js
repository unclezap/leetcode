// https://leetcode.com/problems/word-pattern/submissions/

//no tricks method
var wordPattern = function(pattern, s) {
    let hash = {}
    let set = new Set()
    let sIndex = 0
    let string
    
    for (let i=0; i < pattern.length; i++) {
        if (!hash[pattern[i]]) {
            string = ""
            while (sIndex < s.length && s[sIndex] !== " ") {
                string += s[sIndex]
                sIndex++
            }
            if (set.has(string) || string === "") {
                return false
            } else {
                set.add(string)
            }
            sIndex++
            hash[pattern[i]] = string
        } else {
            string = ""
            while (sIndex < s.length && s[sIndex] !== " ") {
                string += s[sIndex]
                sIndex++
            }
            sIndex++
            if (hash[pattern[i]] !== string) {
                return false
            }
        }
    }
    if (sIndex < s.length) {
        return false
    }
    return true
};

//better way
var wordPattern2 = function(pattern, s) {
    let sArray = s.split(' ')
    
    if (sArray.length !== pattern.length) {
        return false
    }
    
    let hash = {}
    let set = new Set()
    
    for (let i=0; i<pattern.length; i++) {
        if (!hash[pattern[i]]) {
            if (set.has(sArray[i])) {
                return false
            } else {
                set.add(sArray[i])
            }
            hash[pattern[i]] = sArray[i]
        } else {
            if (hash[pattern[i]] !== sArray[i]) {
                return false
            }
        }
    }
    
    return true
};

var wordPatternLeetcode100 = function(pattern, s) {
    const letters = pattern.split('');
    const uniqueLetters = [...new Set(letters)];
    const words = s.split(' ');
    const uniqueWords = [...new Set(words)];
    let patternMap = {};
            
    if (uniqueLetters.length !== uniqueWords.length || letters.length !== words.length) {
        return false;
    }
    
    //map each letter to an associated word
    uniqueLetters.forEach((letter, i) => patternMap[letter] = uniqueWords[i]);
    
    return letters.every((letter, i) => patternMap[letter] === words[i]);
};

var wordPatternLeetcodeSecond = function(pattern, s) {
    const patternArr = pattern.split('');
    const sArr = s.split(' ');
    
    if (patternArr.length !== sArr.length) {
        return false;
    }
    
    const patternDict = {};
    const sDict = {};
    
    for (let i = 0; i < sArr.length; i++) {
        if ((patternDict[patternArr[i]] && patternDict[patternArr[i]] !== sArr[i]) || (sDict[sArr[i]] && sDict[sArr[i]] !== patternArr[i])) {
            return false;
        }
        // if (sDict[sArr[i]] && sDict[sArr[i]] !== patternArr[i]) {
        //     return false;
        // }
        if (!patternDict[patternArr[i]]) {
            patternDict[patternArr[i]] = sArr[i];
        }
        if (!sDict[sArr[i]]) {
            sDict[sArr[i]] = patternArr[i];
        }
    }
    return true;
};

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    wordPattern("he", "unit")
    wordPattern("aaa", "aa aa aa aa")
    wordPattern("aaaa", "aa aa aa aa")
    wordPattern("abba", "dog cat cat dog")
    wordPattern("abba", "dog dog dog dog")
    wordPattern("abba", "dog cat cat")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    wordPattern2("he", "unit")
    wordPattern2("aaa", "aa aa aa aa")
    wordPattern2("aaaa", "aa aa aa aa")
    wordPattern2("abba", "dog cat cat dog")
    wordPattern2("abba", "dog dog dog dog")
    wordPattern2("abba", "dog cat cat")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    wordPatternLeetcode100("he", "unit")
    wordPatternLeetcode100("aaa", "aa aa aa aa")
    wordPatternLeetcode100("aaaa", "aa aa aa aa")
    wordPatternLeetcode100("abba", "dog cat cat dog")
    wordPatternLeetcode100("abba", "dog dog dog dog")
    wordPatternLeetcode100("abba", "dog cat cat")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    wordPatternLeetcodeSecond("he", "unit")
    wordPatternLeetcodeSecond("aaa", "aa aa aa aa")
    wordPatternLeetcodeSecond("aaaa", "aa aa aa aa")
    wordPatternLeetcodeSecond("abba", "dog cat cat dog")
    wordPatternLeetcodeSecond("abba", "dog dog dog dog")
    wordPatternLeetcodeSecond("abba", "dog cat cat")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)