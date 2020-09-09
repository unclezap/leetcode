// https://leetcode.com/problems/find-the-closest-palindrome/submissions/

//failed - special cases illuminate why
// var nearestPalindromic = function(n) {
//     if (n == 11 || n == 10) {
//         return "9"
//     } else if (n == 100 || n == 101) {
//         return "99"
//     } else if (n == 99) {
//         return "101"
//     } else if (n == 999) {
//         return "1001"
//     } else if (n == 1000) {
//         return "999"
//     } else if (n == 10001) {
//         return "9999"
//     }
    
//     num = n.split("")
    
//     if (n < 99 && n > 11 && num[0] !== num[num.length - 1]) {
//         // console.log("hi", Math.abs(n - (n[0] + n[0])), Math.abs(n - 11 - (n[0]+n[0])))
//         if (Math.abs(n - (n[0] + n[0])) > Math.abs(n - 11 - (n[0] + n[0]))) {
//             // console.log("hi2")
//             return (parseInt(n[0] + n[0]) + 11).toString()
//         }
//     } else if (n < 999) {
//         // console.log("hi", Math.abs(n - (n[0] + n[1] + n[0])), Math.abs(n - 10 - (n[0] + n[1] + n[0])))
//         if (Math.abs(n - (n[0] + n[1] + n[0])) > Math.abs(n - 10 - (n[0] + n[1] + n[0]))) {
//             console.log("hi2")
//             return (parseInt(n[0] + n[1] + n[0]) + 10).toString()
//         }
//     }
    
//     let change = false
//     for (let i=0; i < Math.floor(num.length/2); i++) {
//         if (num[i] !== num[num.length - 1 - i]) {
//             num[num.length - 1 - i] = n[i]
//             change = true
//         }
//     }
    
//     if (!change) {
//         if (num.length % 2 !== 0) {
//             // console.log("here")
//             if (num[Math.floor(num.length/2)] > 0) {
//                 num[Math.floor(num.length/2)]--            
//             } else {
//                 num[Math.floor(num.length/2)]++
//             }
                
//         } else {
//             num[num.length/2 - 1]--
//             num[num.length/2]--
//         }
//     }
    
//     n = num.join("")
//     // console.log("yo", num)
//     return n
// };
