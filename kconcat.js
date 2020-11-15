// https://leetcode.com/problems/k-concatenation-maximum-sum/


//still working on this
var kConcatenationMaxSum = function(arr, k) {

    currentSum = 0
    maxSum = 0
    totalSum = 0
    
    for (let i=0; i<arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i]
        } else {
            currentSum += arr[i]
        }
        
        if (maxSum > currentSum) {
            maxSum = currentSum
        }
        
        totalSum += arr[i]
    }

    if (k === 1) {
        return maxSum
    }
    
    if (totalSum === maxSum) {
        return k * maxSum/2
    }
    

    nextArraySum = 0
    nextMax = 0

    for (let i=0; i<arr.length; i++) {
        nextArraySum += arr[i]

        if (nextArraySum > nextMax) {
            nextMax = nextArraySum
        }
    }

    if (totalSum < 0) {
        return maxSum + nextMax
    } else {
        //continue Kadane's!!!
        
        console.log(totalSum, nextMax)
        return totalSum * (k - 1) + nextMax
    }
}


//     currentSum = 0
//     maxSum = 0
//     totalSum = 0
//     startIndex = 0
//     endIndex = 0
//     bestStart = 0
//     bestEnd = 0
    
//     // while (k > 0) {
//     //     modArr.push(...arr)
//     //     k--
//     // }
    
//     for (let i=0; i< arr.length; i++) {
//         if (currentSum <=0) {
//             startIndex = i
//             endIndex = i
//             currentSum = arr[i]
//         } else {
//             currentSum += arr[i]
//             endIndex = i
//         }
        
//         if (currentSum > maxSum) {
//             maxSum = currentSum
//             bestStart = startIndex
//             bestEnd = endIndex
//         }
        
//         totalSum += arr[i]
//     }
//     console.log('hi', maxSum)
    
//     if (maxSum <=0) {
//         return 0
//     // } else if (bestStart === 0 && bestEnd === arr.length - 1) {
//         // return k * maxSum
//     }
    
//     if (k >1) {
//         if (totalSum > 0) {
//         currentSum = 0
//         maxSum = 0
        
//         for (let i=0; i<arr.length; i++) {
//             currentSum += arr[i]
//             if (currentSum > maxSum) {
//                 maxSum = currentSum
//             }
//             console.log(i, currentSum)
//         }
//         console.log('hi', maxSum)
        
//         return totalSum * (k - 1) + maxSum

//         } else {

//             for (let i=0; i < arr.length - 1; i++) {
//                 if (currentSum <=0) {
//                     currentSum = arr[i]
//                 } else {
//                     currentSum += arr[i]
//                 }

//                 if (currentSum > maxSum) {
//                     maxSum = currentSum
//                 }
//             }

//             return maxSum
//         }
    
//     } else {
//         return maxSum
//     }
    
// };

// //     if (Math.min(...arr) >= 0) {
// //         return k*arr.reduce((a,b) => a + b) % (10**9 + 7)
// //     }
    
// //     let first = 0
// //     let i=0
// //     while (arr[i] >=0) {
// //         first += arr[i]
// //         i++
// //     }
    
// //     let curr = 0
// //     let max = first
    
// //     for (let j=i+1; j<arr.length - 1; j++) {
// //         if (arr[j] >= 0) {
// //             curr += arr[j]
// //         } else {
// //             if (curr > max) {
// //                 max = curr
// //             }
// //             curr = 0
// //         }
// //     }
    
// //     if (arr[arr.length - 1] >= 0) {
// //         curr += arr[arr.length - 1]
// //         curr += first
// //     }
    
    
    
// //     return Math.max(curr, max, k*arr.reduce((a,b) => a + b)) % (10**9 + 7)    
