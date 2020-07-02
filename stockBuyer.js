//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//all solutions improve on leetcode's big o complexity of O(n^2), bringing it down to O(n)

//showed an error with input 6 - need to investigate
// [
//     4, 2, 3,  4,  6,  7,  7,
//     6, 6, 6,  7,  8,  8,  6,
//     8, 7, 9, 11, 13, 13, 15
//   ]
//gave result of 11 when everyone else game 13 (correct)
function originalMaxProfit(prices) {
    min = prices[0]
    max = prices[1]
    difference = max - min
    for (let i = 1; i < prices.length - 1; i++) {
        if (prices[i] < min) {
            min = prices[i]
        //this is why - doesn't let the 15 become the max
            max = prices[i + 1]
        }
        if (prices[i] > max) {
            max = prices[i]
        }
        if (max - min > difference) {
            difference = max - min
        }
    }
    return difference
}

//almost as fast as leetcode
function secondMaxProfit(prices) {
    min = prices[0]
    max = prices[1]
    difference = max - min
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        max = prices[i+1]
        if (max - min > difference) {
            difference = max - min
        }
    }
    if (difference < 0) {
        difference = 0
    }
    return difference
}

//even faster than Min/Max??!?!
function thirdMaxProfit(prices) {
    min = prices[0]
    max = prices[1]
    difference = max - min
    for (let i = 1; i < prices.length - 1 ; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        max = prices[i+1]
        if (max - min > difference) {
            difference = max - min
        }
    }
    if (difference < 0) {
        difference = 0
    }
    return difference
}

//about 3.5x faster than original, 2x faster than leetcode
function maxProfit(prices) {
    min = prices[0]
    max = prices[1]
    difference = max - min
    for (let i = 1; i < prices.length - 1; i++) {
        min = Math.min(min, prices[i])
        difference = Math.max(difference, (prices[i+1] - min))
    }
    if (difference < 0) {
        difference = 0
    }
    return difference
}

// difference = Math.max(difference, Math.min(min, prices[i+1] - prices[i]))


let input = [7, 3,9,5,2,3,4,1, 8, 7]
let input2 = [7,6,4,3,1]
let input3 = [1,2, -1, 10, 0, 11]
let input4 = [2,1,7,5,1,12,14, 15, 3, 2, 1, 8, 9, 12, 11, 10, 7, 13]
let input5 = []
for (let k=0; k < 40; k++) {
    input5.push(Math.ceil(20 * Math.random()))
}
// console.log(input5)
let input6 = []
let x = Math.ceil(6 * Math.random())
input6.push(x)
let y
for (let k = 0; k < 20; k++) {
    y = Math.ceil(5 * Math.random()) - 3
    x += y
    if (x <= 0) {
        x = 1
    }
    input6.push(x)
}
console.log(input6)

function maxProfitLeetCodeSolution(prices) {
    let maxprofit = 0;
    let profit
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            profit = prices[j] - prices[i];
            if (profit > maxprofit)
                maxprofit = profit;
        }
    }
    return maxprofit;
}

// console.log("original")
// console.log(originalMaxProfit(input))
// console.log(originalMaxProfit(input2))
// console.log(originalMaxProfit(input3))
// console.log(originalMaxProfit(input4))
// console.log(originalMaxProfit(input5))
console.log(originalMaxProfit(input6))
// console.log("===")

// console.log("second")
// console.log(secondMaxProfit(input))
// console.log(secondMaxProfit(input2))
// console.log(secondMaxProfit(input3))
// console.log(secondMaxProfit(input4))
// console.log(secondMaxProfit(input5))
console.log(secondMaxProfit(input6))

// console.log("third")
// console.log(thirdMaxProfit(input))
// console.log(thirdMaxProfit(input2))
// console.log(thirdMaxProfit(input3))
// console.log(thirdMaxProfit(input4))
// console.log(thirdMaxProfit(input5))
console.log(thirdMaxProfit(input6))

// console.log("min/max")
// console.log(maxProfit(input))
// console.log(maxProfit(input2))
// console.log(maxProfit(input3))
// console.log(maxProfit(input4))
// console.log(maxProfit(input5))
console.log(maxProfit(input6))

// console.log("leetcode")
// console.log(maxProfitLeetCodeSolution(input))
// console.log(maxProfitLeetCodeSolution(input2))
// console.log(maxProfitLeetCodeSolution(input3))
// console.log(maxProfitLeetCodeSolution(input4))
// console.log(maxProfitLeetCodeSolution(input5))
console.log(maxProfitLeetCodeSolution(input6))

// console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    // originalMaxProfit(input)
    // originalMaxProfit(input2)
    // originalMaxProfit(input3)
    // originalMaxProfit(input4)
    // originalMaxProfit(input5)
    originalMaxProfit(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`original time: ${timeElapsed} ms`)

// console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    // secondMaxProfit(input)
    // secondMaxProfit(input2)
    // secondMaxProfit(input3)
    // secondMaxProfit(input4)
    // secondMaxProfit(input5)
    secondMaxProfit(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`second time: ${timeElapsed} ms`)

// console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    // thirdMaxProfit(input)
    // thirdMaxProfit(input2)
    // thirdMaxProfit(input3)
    // thirdMaxProfit(input4)
    // thirdMaxProfit(input5)
    thirdMaxProfit(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

// console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    // maxProfit(input)
    // maxProfit(input2)
    // maxProfit(input3)
    // maxProfit(input4)
    // maxProfit(input5)
    maxProfit(input6)

}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

// console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    // maxProfitLeetCodeSolution(input)
    // maxProfitLeetCodeSolution(input2)
    // maxProfitLeetCodeSolution(input3)
    // maxProfitLeetCodeSolution(input4)
    // maxProfitLeetCodeSolution(input5)
    maxProfitLeetCodeSolution(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leet time: ${timeElapsed} ms`)
