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

console.log(lengthOfLongestSubstring(str1))
console.log(lengthOfLongestSubstring(str2))
console.log(lengthOfLongestSubstring(str3))
console.log(lengthOfLongestSubstring(str4))
console.log(lengthOfLongestSubstring(str5))
console.log(lengthOfLongestSubstring(str6))
