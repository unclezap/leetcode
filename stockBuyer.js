//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {

    min = prices[0]
    max = prices[1]
    difference = max - min

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            console.log("min", i)
            min = prices[i]
            max = prices[i + 1]
        }
        //putting this here allows you to get a difference of zero in the case of only-decreasing stocks
        if (prices[i] > max) {
            console.log("max", i)
            max = prices[i]
        }
        if (max - min > difference) {
            console.log("change", i)
            difference = max - min
        }
    }
    console.log(min, max)
    return difference
}
    
let input = [7, 3,9,5,1,3,4, 8]
let input2 = [7,6,4,3,1]
let input3 = [1,2, -1, 10, 0, 11]

console.log(maxProfit(input))
console.log(maxProfit(input2))
console.log(maxProfit(input3))
        