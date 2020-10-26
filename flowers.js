// https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function(flowerbed, n) {
    let index = 0
    
    if (flowerbed.length === 1) {
        if (flowerbed[0] === 1 && n === 1) {
            return false
        }
        return true
    }
    
    if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
        n--
        flowerbed = flowerbed.slice(0, flowerbed.length-1)
    }
    
    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        n--
        index++
    }

    while (n > 0) {
       let works = false
        for (let i=index; i<flowerbed.length;i++) {
           if (flowerbed[i] === 0) {
               if (flowerbed[i+1] === 0 && flowerbed[i+2] === 0) {
                   index = i+2
                   works = true
                   flowerbed[i+1] === 1
                   n--
                   break
               }
           }
        }
        
        if (!works) {
            return false
        }
    }
    
    return true
};

var canPlaceFlowersLeetcode100 = function(flowerbed, n) {
    let i = 0;
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1 && flowerbed[i] != 1) {
                flowerbed[i] = 1; 
                count++;
        }
    }
    return count >= n;
};

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    canPlaceFlowers([0],1)
    canPlaceFlowers([1,0,0,0,1],1)
    canPlaceFlowers([1,0,0,0,1],2)
    canPlaceFlowers([1,0,0,0,1,0,0],2)
    canPlaceFlowers([1,0,0,1,0,0,0],2)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    canPlaceFlowersLeetcode100([0],1)
    canPlaceFlowersLeetcode100([1,0,0,0,1],1)
    canPlaceFlowersLeetcode100([1,0,0,0,1],2)
    canPlaceFlowersLeetcode100([1,0,0,0,1,0,0],2)
    canPlaceFlowersLeetcode100([1,0,0,1,0,0,0],2)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)