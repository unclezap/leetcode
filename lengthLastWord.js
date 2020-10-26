// https://leetcode.com/problems/length-of-last-word/submissions/

var lengthOfLastWord = function(s) {
    let end = s.length - 1
    
    if (s[end] === " ") {
        while (s[end] !== " ") {
            end--
        }
    }
    
    for (let i=end - 1; i >= 0; i--) {
        if (s[i] === " ") {
            return end - i
        }
    }

    return end
};