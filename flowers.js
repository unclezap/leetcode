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