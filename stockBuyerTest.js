let input = [7, 3,9,5,2,3,4,1, 8]
let input2 = [7,6,4,3,1]
let input3 = [1,2, -1, 10, 0, 11]

function thirdMaxProfit(prices) {
    min = prices[0]
    max = prices[1]
    difference = max - min
    for (let i = 1; i < prices.length - 1 ; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        if (prices[i+1] - min > difference) {
            difference = prices[i+1] - min
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

console.log("third")
console.log(thirdMaxProfit(input))
console.log(thirdMaxProfit(input2))
console.log(thirdMaxProfit(input3))

console.log("min/max")
console.log(maxProfit(input))
console.log(maxProfit(input2))
console.log(maxProfit(input3))

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    thirdMaxProfit(input)
    thirdMaxProfit(input2)
    thirdMaxProfit(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    maxProfit(input)
    maxProfit(input2)
    maxProfit(input3)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)