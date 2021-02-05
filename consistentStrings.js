// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function(allowed, words) {
    
    let hash = {}
    
    for (let i=0;i<allowed.length;i++) {
        hash[allowed[i]] = 1    
    }
    
    let count = 0
    
    for (let i=0;i<words.length;i++) {
        let consistent = true
        for (let j=0;j<words[i].length;j++) {
            if (!hash[words[i][j]]) {
                consistent = false
                break
            }
        }
        if (consistent) {
            count++
        }
    }
    
    return count
};

var countConsistentStrings2 = function(allowed, words) {
    
    let set = new Set(allowed.split(''))
    
    let count = 0
    
    for (let i=0;i<words.length;i++) {
        let consistent = true
        for (let j=0;j<words[i].length;j++) {
            if (!set.has(words[i][j])) {
                consistent = false
                break
            }
        }
        if (consistent) {
            count++
        }
    }
    
    return count
};


const countConsistentStringsLeetcode100 = (allowed, words) => {
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
  
        if (!allowed.includes(char)) break;
        else if (j === word.length - 1) result.push(word)
      }
    }
  
    return result.length;
  };

  var countConsistentStringsLeetcode2 = function(allowed, words) {
    let count = words.length;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (allowed.indexOf(words[i][j]) == -1) {
                count--;
                break;
            }
        }
    }
    return count;
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])
    countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"])
    countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    countConsistentStrings2("ab",["ad","bd","aaab","baa","badab"])
    countConsistentStrings2("abc",["a","b","c","ab","ac","bc","abc"])
    countConsistentStrings2("cad",["cc","acd","b","ba","bac","bad","ac","d"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    countConsistentStringsLeetcode100("ab",["ad","bd","aaab","baa","badab"])
    countConsistentStringsLeetcode100("abc",["a","b","c","ab","ac","bc","abc"])
    countConsistentStringsLeetcode100("cad",["cc","acd","b","ba","bac","bad","ac","d"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    countConsistentStringsLeetcode2("ab",["ad","bd","aaab","baa","badab"])
    countConsistentStringsLeetcode2("abc",["a","b","c","ab","ac","bc","abc"])
    countConsistentStringsLeetcode2("cad",["cc","acd","b","ba","bac","bad","ac","d"])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)