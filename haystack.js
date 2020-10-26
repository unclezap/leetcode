// https://leetcode.com/problems/implement-strstr/submissions/

var strStr = function(haystack, needle) {
    if (!haystack || !needle) {
        return 0
    } else {
        for (let i=0; i<haystack.length; i++) {
            if (haystack[i] === needle[0]) {
                let works = true
                for (let j=1; i<needle.length; j++) {
                    if (haystack[i+j] !== needle[j]) {
                        works = false
                        break
                    }
                }
                if (works) {
                    return i
                }
            }
        }
        return -1
    }
};