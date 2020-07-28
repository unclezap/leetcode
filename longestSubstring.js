// https://leetcode.com/problems/longest-substring-without-repeating-characters/

let str1 = "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

let str2 = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

let str3 = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

let str4 = " "
let str5 = "a"
let str6 = "aab"

var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length
    }

    let map = new Map()
    let max = 0
    let submax
    let start = 0
    let end = 0

    while (start < s.length && end < s.length) {
        if (!map.has(s[end])) {
            map.set(s[end])
            end++
            submax = map.size
            if (submax > max) {
                max = submax
            }
        } else {
            map.delete(s[start])
            start++
        }
    }
    return max
}

// var lengthOfLongestSubstring = function(s) {

//     if (s.length <= 1) {
//         return s.length
//     }

//     let set = new Set()
//     let max = 0
//     let submax
//     let i=0
//     let index = 0

//     while (i < s.length) {
//         if (!set.has(s[i])) {
//             set.add(s[i])
//             submax = set.size
//             if (submax > max) {
//                 max = submax
//             }
//         } else {
//             set.clear()
//             i = index
//             index++
//         }
//         i++
//     }
//     return max
// };

var lengthOfLongestSubstringLeetcode100 = function(s) {
    let answer = ""
    let maxlength = 0
    
    
    for(let x = 0; x < s.length; x++){
        let letter = s[x]
        let checker = true
        for(let y = 0; y < answer.length; y++){
            if(letter === answer[y]){
                checker = false
                break
            }
        }
        if(checker === true){
            answer = answer + letter
        }
        else{
            let indexx = answer.indexOf(letter)
            answer = answer.substring(indexx+1) + letter
        }
        maxlength = Math.max(answer.length, maxlength)
        
    }
    
    return maxlength
};

// console.log(lengthOfLongestSubstring(str1))
// console.log(lengthOfLongestSubstring(str2))
// console.log(lengthOfLongestSubstring(str3))
// console.log(lengthOfLongestSubstring(str4))
// console.log(lengthOfLongestSubstring(str5))
// console.log(lengthOfLongestSubstring(str6))

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    lengthOfLongestSubstring(str1)
    lengthOfLongestSubstring(str2)
    lengthOfLongestSubstring(str3)
    lengthOfLongestSubstring(str4)
    lengthOfLongestSubstring(str5)
    lengthOfLongestSubstring(str6)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    lengthOfLongestSubstringLeetcode100(str1)
    lengthOfLongestSubstringLeetcode100(str2)
    lengthOfLongestSubstringLeetcode100(str3)
    lengthOfLongestSubstringLeetcode100(str4)
    lengthOfLongestSubstringLeetcode100(str5)
    lengthOfLongestSubstringLeetcode100(str6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//zeb 26005ms
//leetcde 5881ms