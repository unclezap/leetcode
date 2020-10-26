// https://leetcode.com/problems/length-of-last-word/submissions/

var lengthOfLastWord = function(s) {
    let end = s.length - 1
    
    if (s[end] === " ") {
        while (s[end] === " ") {
            end--
        }
        s = s.slice(0,end+1)
    }
    
    for (let i=end - 1; i >= 0; i--) {
        if (s[i] === " ") {
            return end - i
        }
    }

    return s.length
};

var lengthOfLastWordLeetcode100 = function(s) {
    let input = s.trim();
    let lastIndex = input.lastIndexOf(" ");
    let result="";
    if (input ==="") {return 0}
    else if (lastIndex+1 >= s.length) {
      result = input.substring(0, lastIndex)
    } else {
      result = input.substring(lastIndex+1,)
    }
    return result.length
};

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    lengthOfLastWord("Hello World")
    lengthOfLastWord("Hello World ")
    lengthOfLastWord("World ")
    lengthOfLastWord("World")
    lengthOfLastWord("a")
    lengthOfLastWord("a ")
    lengthOfLastWord("")
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    lengthOfLastWordLeetcode100("Hello World")
    lengthOfLastWordLeetcode100("Hello World ")
    lengthOfLastWordLeetcode100("World ")
    lengthOfLastWordLeetcode100("World")
    lengthOfLastWordLeetcode100("a")
    lengthOfLastWordLeetcode100("a ")
    lengthOfLastWordLeetcode100("")
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)