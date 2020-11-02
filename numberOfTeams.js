// https://leetcode.com/problems/count-number-of-teams/submissions/

//first solution
var numTeams = function(rating) {
    if (rating.length < 3) {
        return 0
    }
    
    let count = 0
    
    for (let i=0; i < rating.length; i++) {
        for (let j=i+1; j < rating.length; j++) {
            for (let k=j+1; k < rating.length; k++) {
                if (((rating[i] < rating[j]) && (rating[j] < rating[k])) || ((rating[i] > rating[j]) && (rating[j] > rating[k]))) {
                    count++
                }
            }
        }
    }
    
    return count
};

//second solution
var numTeams2 = function(rating) {
    if (rating.length < 3) {
        return 0
    }
    
    let count = 0
    
    for (let i=0; i < rating.length; i++) {
        for (let j=i+1; j < rating.length; j++) {
            if (rating[i] > rating[j]) {
                for (let k=j+1; k<rating.length;k++) {
                    if (rating[j] > rating[k]) {
                        count++
                    }
                }
            } else {
                for (let k=j+1; k<rating.length;k++) {
                    if (rating[k] > rating[j]) {
                        count++
                    }
                }
            }
        }
    }
    
    return count
};

var numTeamsLeetcode100 = function(ratings) {
    let res = 0;
    
    for (let j = 1; j < ratings.length-1; j++) {
        let descLeft = 0;    
        let descRight = 0;    
        let ascLeft = 0;    
        let ascRight = 0;   
        
        for (let i = 0; i < j; i++) {
            if (ratings[i] < ratings[j]) ascLeft++
            if (ratings[i] > ratings[j]) descLeft++
        }
        
        for (let k = j+1; k < ratings.length; k++) {
            if (ratings[j] < ratings[k]) ascRight++
            if (ratings[j] > ratings[k]) descRight++
        }
        
        res += (ascRight*ascLeft) + (descRight*descLeft);
    }
    
    return res;
};

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    numTeams([2,5,3,4,1])
    numTeams([2,3,1])
    numTeams([1,2,3,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    numTeams2([2,5,3,4,1])
    numTeams2([2,3,1])
    numTeams2([1,2,3,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    numTeamsLeetcode100([2,5,3,4,1])
    numTeamsLeetcode100([2,3,1])
    numTeamsLeetcode100([1,2,3,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)