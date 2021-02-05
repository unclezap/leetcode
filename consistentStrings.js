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