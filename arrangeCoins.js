// https://leetcode.com/problems/arranging-coins/

var arrangeCoins = function(n) {
    let k = 0
    
    while (n >= 0) {
        k++
        n -= k
    }
    
    return k-1
};

var arrangeCoinsLeetcode100 = function(n) {
    if (n == 0) return 0;
    if (n <= 2) return 1;
    return Math.floor((-1 + (Math.sqrt(1 + 4 * (n * 2))))/2);
};

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    arrangeCoins(5)
    arrangeCoins(8)
    arrangeCoins(0)
    arrangeCoins(3)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    arrangeCoinsLeetcode100(5)
    arrangeCoinsLeetcode100(8)
    arrangeCoinsLeetcode100(0)
    arrangeCoinsLeetcode100(3)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)