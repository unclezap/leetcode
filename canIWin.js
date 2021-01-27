// https://leetcode.com/problems/can-i-win/

var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger*(maxChoosableInteger+1)/2 < desiredTotal) {
        return false
    }
    
    if (maxChoosableInteger + 1 === desiredTotal) {
        return false
    }
    
    let gauss = Math.floor(-1/2 + (1/4 + 2*desiredTotal)**0.5)
    // console.log(gauss)
    
    if (gauss+1 >= maxChoosableInteger && maxChoosableInteger % 2 === 0) {
        return false
    }
  
    return true    
};