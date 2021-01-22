// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/submissions/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length < 2) {
        return 0
    }
    
    let minLow = 0
    let maxHigh = 1
    let profits = []
    
    for (let i=1;i<prices.length;i++) {
            minLow = i
        if (prices[i+1] < prices[minLow]) {
            while (prices[i+1] < prices[minLow] && i<prices.length - 2) {
                minLow++
                i++
            }
            minLow--
            maxHigh = minLow+1
        }
        if (prices[i] > prices[maxHigh] && i<prices.length - 1) {
            i++
            maxHigh++
        }
        maxHigh--
        profits.push(prices[maxHigh] - prices[minLow])
        console.log(profits, prices[i], prices[maxHigh],prices[minLow])
    }
    
    console.log(profits)
    
    profits.sort((a,b) => b - a)
    
    let profitSum = 0
    
    for (let i=0;i<k;i++) {
        if (profits[i] > 0) {
            profitSum += profits[i]
        }
    }
    
    return profitSum 
}

// [3,2,6,5,7,0,3]
// [3,2,6,0,5,7,3]
// var maxProfit = function(k, prices) {

//     if (prices.length < 2) {
//         return 0
//     }

//     let profits = []
//     let maxHigh = prices.length - 1
//     let minLow = prices.length - 2
//     let recorded = false
    
//     for (let i=prices.length - 2; i>=0;i--) {
//         if (prices[i] > prices[maxHigh]) {
//             profits.push(prices[maxHigh] - prices[minLow])
//             recorded = true
//             if (i > 0) {
//                 maxHigh = i
//                 minLow = i - 1
//                 recorded = false
//             }
//         } else if (prices[i] < prices[minLow]) {
//             minLow = i
//         }
//         console.log(i,prices[maxHigh], prices[minLow], profits)
//     }
//     if (recorded === false ) {
//         profits.push(prices[maxHigh] - prices[minLow])
//     }
//     profits.sort((a,b) => b - a)
    
//     let profitSum = 0
    
//     for (let i=0;i<k;i++) {
//         if (profits[i] > 0) {
//             profitSum += profits[i]
//         }
//     }
    
//     return profitSum 
    
// };

// start at end
// maxHigh goes until reaches a higher number
// maxLow goes until reaches a lower number, or maxHigh resets. If it does, then add prev Max High and maxLow difference to array

// 3
// 2*
// 6*
// 5
// 0*
// 3*


//   function maxSubarrayKadane(nums) {
//     currentSum = 0
//     maxSum = 0
//     startIndex = 0
//     endIndex = 0
//     bestStart = 0
//     bestEnd = 0

//     for (let i=0; i< nums.length; i++) {
//         if (currentSum <=0) {
//             startIndex = i
//             endIndex = i
//             currentSum = nums[i]
//         } else {
//             currentSum += nums[i]
//             endIndex = i
//         }
        
//         if (currentSum > maxSum) {
//             maxSum = currentSum
//             bestStart = startIndex
//             bestEnd = endIndex + 1
//         }
//     }
    
//     return nums.slice(bestStart, bestEnd)
// };

//     currentStartIndex = 0
//     currentEndIndex = 1
//     currentProfit = 0
//     profits = []
    
//     for (let i=1; i<prices.length;i++) {

//         if (prices[i] < prices[currentStartIndex]) {
//             currentStartIndex = i
//         }
//         if (prices[i] > prices[currentEndIndex]) {
//             currentEndIndex = i
//         }
//         profits.push(prices[i] - prices[currentStartIndex])
//     }
//     console.log(profits)
//     profits.sort((a,b) => b - a)
//     console.log(profits)
    
//     let profitSum = 0
    
//     for (let i=0;i<k;i++) {
//         profitSum += profits[i]
//     }
    
//     return profitSum
