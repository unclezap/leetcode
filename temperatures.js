// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function(T) {
    let results = []
    let count = 1
    let baseIndex = 0
    
    for (let i=1; i < T.length; i++) {
        if (T[i] > T[baseIndex]) {
            results.push(count)
            baseIndex++
            i = baseIndex
            count = 1
        } else {
            count++
        }
        
        if (i === T.length - 1) {
            if (results.length < T.length) {
                results.push(0)
                baseIndex++
                i = baseIndex - 1
                count = 0
            }
        }

    }
  
    return results
};