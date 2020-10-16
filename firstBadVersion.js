// https://leetcode.com/problems/first-bad-version/

console.log((1+4)/2 % 1 === 0.5)

// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         if (n === 1) {
//             return 1
//         } else {
//             let binaryTransverse = function(lowerBound,upperBound) {
//                 if (upperBound - lowerBound === 1) {
//                     if (!isBadVersion(lowerBound)) {
//                         return upperBound  
//                     } else {
//                         return lowerBound
//                     }
//                 }
                
//                 if (!isBadVersion(Math.floor((upperBound + lowerBound)/2))) {
//                     return binaryTransverse(Math.floor((upperBound + lowerBound)/2), upperBound)
//                 } else {
//                     return binaryTransverse(lowerBound, Math.floor((upperBound + lowerBound)/2))
//                 }
//             }

//             return binaryTransverse(1,n)
//         }
//     };
// };