// https://leetcode.com/problems/water-bottles/submissions/

var numWaterBottles = function(numBottles, numExchange) {
    let empties = 0
    let extra = 0
    let drinks = 0
    
    while (numBottles >= numExchange) {
        extra = numBottles % numExchange
        drinks += numBottles - extra
        numBottles = extra + Math.floor(numBottles/numExchange)
    }

    return drinks + numBottles
};