//https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/
//orig version
var minDays = function(n) {
    
    let tracker = [n]
    let count = 1
    let lastEnd = 0

    for (let i=0;i<tracker.length;i++) {
        if (tracker[i] === 1) {
            return count
        }
        
        if (tracker[i] % 3 === 0) {
            tracker.push(tracker[i]/3)
        }
        
        if (tracker[i] % 2 === 0) {
            tracker.push(tracker[i]/2)
        }
        
        tracker.push(tracker[i]-1)
        
        if (i === lastEnd) {
            count++
            lastEnd = tracker.length - 1
        }
    }
}

//optimized for Leetcode memory limits
var minDaysMemory = function(n) {
    
    let tracker = [n]
    let count = 1
    let lastEnd = 0
    let hash = {}

    for (let i=0;i<tracker.length;i++) {
        if (tracker[i] === 1) {
            return count
        }

        if (tracker[i] % 3 === 0) {
            if (!hash[tracker[i]/3]) {
                tracker.push(tracker[i]/3)
                hash[tracker[i]/3] = 1                
            }
        }
        
        if (tracker[i] % 2 === 0) {
            if (!hash[tracker[i]/2]) {
                tracker.push(tracker[i]/2)
                hash[tracker[i]/2] = 1
            }
        }
        
        if (!hash[tracker[i]-1]) {
            tracker.push(tracker[i]-1)
            hash[tracker[i]-1] = 1
        }

        if (i === lastEnd) {
            count++
            lastEnd = tracker.length - 1
        }
    }
}

//second optimization
var minDays3 = function(n) {
    
    let tracker = [n]
    let count = 1
    let lastEnd = 0
    let hash = {}

    for (let i=0;i<=lastEnd;i++) {
        if (tracker[i] === 1) {
            return count
        }

        if (tracker[i] % 3 === 0) {
            if (!hash[tracker[i]/3]) {
                tracker.push(tracker[i]/3)
                hash[tracker[i]/3] = 1                
            }
        }

        if (tracker[i] % 2 === 0) {
            if (!hash[tracker[i]/2]) {
                tracker.push(tracker[i]/2)
                hash[tracker[i]/2] = 1
            }
        }

        tracker.push(tracker[i]-1)
        hash[tracker[i]-1] = 1

        if (i === lastEnd) {
            count++
            lastEnd = tracker.length - 1
        }
    }
}

//doesn't work
// var minDaysSet = function(n) {
//     if (n < 3) {
//         return n
//     }

//     let set = new Set([n])

//     let i = 0
//     let count = 1
//     let lastEnd = 0
//     let size = 1
    
//     set.forEach(function(num) {
//         if (num === 1) {
//             set = new Set()
//         }
        
//         if (num % 3 === 0) {
//             set.add(num/3)
//             size++
//         }
        
//         if (num % 2 === 0) {
//             set.add(num/2)
//             size++
//         }
        
//         set.add(num-1)
//         size++
        
//         if (i === lastEnd) {
//             count++
//             lastEnd = size - 1
//         }
//         i++
//     })
    
//     return count
// }


var minDaysLeetcode100 = function(n) {
    if(!n) return 0;
    
    if(n===1) return 1;
    
    const dp = new Map();
    
    return dfs(n, dp);
};

function dfs(n, dp) {
    if(n<=1) return n;
    
    if(dp.has(n)) return dp.get(n);
    
    dp.set(n, Math.min((n%2 + dfs(Math.floor(n/2), dp)), (n%3 + dfs(Math.floor(n/3), dp)))+1);
    
    return dp.get(n);
}


var minDaysSet = function(n) {
    if (n < 3) {
        return n
    }
    let set = new Set([n])
    let count = 0
    let inc = 0
    let lastEnd = 0
    let total = 0
    let hash = {}

    set.forEach(function(i) {
        if (i === 1) {
            set = new Set()
        }
        
        if (i % 3 === 0) {
            set.add(i/3)
            total++
        }
        
        if (i % 2 === 0) {
            set.add(i/2)
            total++
        }
        
        set.add(i-1)
        total++
        
        if (inc === lastEnd) {
            lastEnd = total
            count++
        }
        inc++
    })
    
    return count
}

//waaaaay too slow
// console.log("=====")
// start = Date.now()
// for (u=0;u<10;u++) {
//     minDays(10)
//     minDays(6)
//     minDays(1)
//     minDays(56)
//     minDays(2000)
//     minDays(2457214)
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000;u++) {
    minDaysMemory(10)
    minDaysMemory(6)
    minDaysMemory(1)
    minDaysMemory(56)
    minDaysMemory(2000)
    minDaysMemory(2457214)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000;u++) {
    minDays3(10)
    minDays3(6)
    minDays3(1)
    minDays3(56)
    minDays3(2000)
    minDays3(2457214)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000;u++) {
    minDaysLeetcode100(10)
    minDaysLeetcode100(6)
    minDaysLeetcode100(1)
    minDaysLeetcode100(56)
    minDaysLeetcode100(2000)
    minDaysLeetcode100(2457214)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)