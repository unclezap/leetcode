// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/

var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)
    
    for (let i=0; i < candies.length; i++) {
        candies[i] = (candies[i] + extraCandies >= maxCandies)
    }
    
    return candies
};

var kidsWithCandies1 = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)
    let returnArray = []
    
    for (let i=0; i < candies.length; i++) {
        returnArray.push(candies[i] + extraCandies >= maxCandies)
    }
    
    return returnArray
};

var kidsWithCandiesLeetcode100 = function(candies, extraCandies) {
    const max = Math.max.apply(Math, candies);
    const res = new Array(candies.length);
    for (let i = 0; i < candies.length; i++) 
        res[i] = candies[i]+extraCandies >= max;
    return res;
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    kidsWithCandies([4,2,1,1,2], 1)
    kidsWithCandies([2,3,5,1,3], 3)
    kidsWithCandies([12,1,12], 10)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    kidsWithCandies1([4,2,1,1,2], 1)
    kidsWithCandies1([2,3,5,1,3], 3)
    kidsWithCandies1([12,1,12], 10)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    kidsWithCandiesLeetcode100([4,2,1,1,2], 1)
    kidsWithCandiesLeetcode100([2,3,5,1,3], 3)
    kidsWithCandiesLeetcode100([12,1,12], 10)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)