https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    let alt = 0
    let maxAlt = 0
    for (let i=0;i<gain.length;i++) {
        alt += gain[i]
        maxAlt = Math.max(alt,maxAlt)
    }
    return maxAlt
};

var largestAltitudeLeetcode100 = function(gain) {

    let high = 0;
    let runTotal = 0;
        
    let hof = each => {
      runTotal = runTotal + each;
      if (runTotal > high){high = runTotal}
    }
    let loop = gain.forEach(hof)
    
    return high
    
    };

    var largestAltitudeLeetcode2 = function(gain) {
        let highest = 0;
        let current = 0;
        gain.forEach((altitude) => {
            current += altitude;
            if (current > highest) {
                highest = current;
            }
        });
        
        return highest;
    };

    


console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    largestAltitude([-5,1,5,0,-7])
    largestAltitude([-4,-3,-2,-1,4,3,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    largestAltitudeLeetcode100([-5,1,5,0,-7])
    largestAltitudeLeetcode100([-4,-3,-2,-1,4,3,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    largestAltitudeLeetcode2([-5,1,5,0,-7])
    largestAltitudeLeetcode2([-4,-3,-2,-1,4,3,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)