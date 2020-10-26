// https://leetcode.com/problems/longest-common-prefix/submissions/

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    } else if (strs.length === 1) {
        return strs[0]
    }
    
    for (let i=0; i<strs[0].length;i++) {
        for (let j=1; j<strs.length;j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
};

var longestCommonPrefixLeetcode100 = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    const leastLength = strs.reduce((acc, str) => Math.min(acc, str.length), strs[0].length);
    var prefix = '';
    var i = 0;
    while (strs.every(s => s[i] === strs[0][i]) && i < leastLength) {
        prefix = prefix + strs[0][i];
        i++;
    }
    return prefix;
};

const longestCommonPrefixLeetcodeSecond = (strs) => {
    if (!strs.length) return "";
    if (strs.length === 1) return strs[0];
    let prefix = strs[0];
    strs.map((s,i)=>{
      while(s.indexOf(prefix)!=0){
        prefix = prefix.substring(0, prefix.length -1);
        if(prefix.length === 0) return "";
      }
    });
    return prefix;
  };

  var longestCommonPrefixLeetcodeThird = function (strs) {
    let result = '';

    if (strs.length && strs.every(function (str) {
        return str.length > 0
    })) {
        let j = 0
        strs.sort(function(a, b){
            return a.length - b.length
        });
        while (true) {
            let currentChar = null;

            let allMatched = strs.every(function (str, i) {
                if (str[j] === undefined) return false
                if (currentChar === null) {
                    currentChar = str[j]
                }
                return currentChar === str[j]

            })
            if (allMatched) {
                result += currentChar
            } else {
                break
            }
            j++
        }
    }
    return result;
};

const longestCommonPrefixLeetcodeFourth = (strs) => {
    if(!strs.length) return '';
    
  const firstStr = strs[0];
  let result = '';
  for (let i = 0; i < firstStr.length; i++) {
    if (strs.some(s => s[i] !== firstStr[i])) return result;
    else  result += firstStr[i];
  }
    
  return result;
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    longestCommonPrefix(["flower","flow","flight"])
    longestCommonPrefix([])
    longestCommonPrefix(["aflower","flow","flight"])
    longestCommonPrefix(["dog","racecar","car"])
    longestCommonPrefix(["dog"])
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    longestCommonPrefixLeetcode100(["flower","flow","flight"])
    longestCommonPrefixLeetcode100([])
    longestCommonPrefixLeetcode100(["aflower","flow","flight"])
    longestCommonPrefixLeetcode100(["dog","racecar","car"])
    longestCommonPrefixLeetcode100(["dog"])
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    longestCommonPrefixLeetcodeSecond(["flower","flow","flight"])
    longestCommonPrefixLeetcodeSecond([])
    longestCommonPrefixLeetcodeSecond(["aflower","flow","flight"])
    longestCommonPrefixLeetcodeSecond(["dog","racecar","car"])
    longestCommonPrefixLeetcodeSecond(["dog"])
}
end = Date.now()
timeElapsed = end - start
console.log(`second time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<10000000;u++) {
//     longestCommonPrefixLeetcodeThird(["flower","flow","flight"])
//     longestCommonPrefixLeetcodeThird([])
//     longestCommonPrefixLeetcodeThird(["aflower","flow","flight"])
//     longestCommonPrefixLeetcodeThird(["dog","racecar","car"])
//     longestCommonPrefixLeetcodeThird(["dog"])
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    longestCommonPrefixLeetcodeFourth(["flower","flow","flight"])
    longestCommonPrefixLeetcodeFourth([])
    longestCommonPrefixLeetcodeFourth(["aflower","flow","flight"])
    longestCommonPrefixLeetcodeFourth(["dog","racecar","car"])
    longestCommonPrefixLeetcodeFourth(["dog"])
}
end = Date.now()
timeElapsed = end - start
console.log(`fourth time: ${timeElapsed} ms`)

