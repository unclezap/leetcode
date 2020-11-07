// https://leetcode.com/problems/powerful-integers/

var powerfulIntegers = function(x, y, bound) {
    if (bound < 2) {
        return []
    }

    if (x === 1 && y === 1) {
        return [2]
    }
    
    let j=0
    let returnArray = []

    if (x === 1) {
        while (y**j <= bound) {
            returnArray.push(1 + y**j)
            j++
        }
        
        return returnArray
    } else if (y === 1) {
        while (x**j <= bound) {
            returnArray.push(1 + x**j)
            j++
        }
        
        return returnArray
    }
    
    let i=-1
    let set = new Set()
    
    while (x**i + y**j <= bound) {
        i++
        while (x**i + y**j <= bound) {
            if (!set.has(x**i + y**j)) {
                set.add(x**i + y**j)
                returnArray.push(x**i + y**j)
            }
            j++
        }
        j=0
    }
    
    return returnArray
};

var powerfulIntegersLeetcode100 = function(x, y, bound) {
    const ints = []
  for (let i = 0; Math.pow(x, i) < bound; i++) {
    const xp = Math.pow(x, i)
    for (let j = 0; Math.pow(y, j) <= bound - xp; j++) {
      const int = xp + Math.pow(y, j)
      if (ints.indexOf(int) < 0) ints.push(int)
      if (y === 1) break
    }
    if (x === 1) break
  }
  
  return ints
};

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    powerfulIntegers(1,1,10)
    powerfulIntegers(2,1,10)
    powerfulIntegers(2,3,10)
    powerfulIntegers(3,5,997321)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    powerfulIntegersLeetcode100(1,1,10)
    powerfulIntegersLeetcode100(2,1,10)
    powerfulIntegersLeetcode100(2,3,10)
    powerfulIntegersLeetcode100(3,5,997321)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)
