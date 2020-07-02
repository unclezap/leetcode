// https://leetcode.com/problems/keyboard-row/submissions/

let words1 = ["Hello", "Alaska", "Dad", "Peace"]

var findWords = function(words) {
    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    let goodWords = []
    let pos
    let isIn
    
    for (let i=0; i < words.length; i++) {
        if (rows[0].includes(words[i][0].toLowerCase())) {
            pos = 0
        } else if (rows[1].includes(words[i][0].toLowerCase())) {
            pos = 1
        } else {
            pos = 2
        }
        isIn = true
        
        for (let j=0; j < words[i].length; j++) {
            if (!rows[pos].includes(words[i][j].toLowerCase())) {
                isIn = false
                break
            }
        }
        
        if (isIn) {
            goodWords.push(words[i])
        }
    }
    
    return goodWords
};

console.log(findWords(words1))