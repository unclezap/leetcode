// https://leetcode.com/problems/reverse-words-in-a-string

var reverseWords = function(s) {
    words = s.split(' ')
       let returnArray = []
       
       for (let i= words.length - 1; i >= 0; i--) {
           if (words[i].length > 0) {
               returnArray.push(words[i])
           }
       }
       return returnArray.join(' ')
   };
   