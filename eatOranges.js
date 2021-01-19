
//orig version
var minDays = function(n) {
    
    let tracker = [n]
    let count = 1
    let lastEnd = 0

    for (let i=0;i<tracker.length;i++) {
        if (tracker[i] === 1) {
            console.log(tracker.length)
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

