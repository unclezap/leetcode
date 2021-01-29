// https://leetcode.com/problems/buddy-strings/

var buddyStrings = function(A, B) {
    if (A.length !== B.length || A.length < 2) {
        return false
    }
 
     let indices = []
     
     for (let i=0;i<A.length;i++) {
         if (A[i] !== B[i]) {
             indices.push(i)
             if (indices.length === 3) {
                 return false
             }
         }
     }
 
     if (indices.length === 2) {
         if (A[indices[0]] === B[indices[1]] && A[indices[1]] === B[indices[0]]) {
             return true
         } else {
             return false
         }
     }
 
     if (indices.length === 0) {
         if (A.length === 2 && A[0] === A[1]) {
             return true
         }
         let hash = {}
         for (let i=0;i<A.length;i++) {
             if (!hash[A[i]]) {
                hash[A[i]] = 1
             } else {
                return true
             }
         }
     }
     
     return false
 };

 var buddyStrings2 = function(A, B) {
    if (A.length !== B.length || A.length < 2) {
        return false
    }
 
     let indices = []
     
     for (let i=0;i<A.length;i++) {
         if (A[i] !== B[i]) {
            if (indices.length === 1) {
                if (A[indices[0]] !== B[i] || A[i] !== B[indices[0]]) {
                    return false
                }
            }
            if (indices.length === 2) {
                return false
            }
            indices.push(i)

         }
     }
 
     if (indices.length === 2) {
             return true
     }
 
     if (indices.length === 0) {
         if (A.length === 2 && A[0] === A[1]) {
             return true
         }
         let hash = {}
         for (let i=0;i<A.length;i++) {
             if (!hash[A[i]]) {
                hash[A[i]] = 1
             } else {
                return true
             }
         }
     }
     
     return false
 };

 var buddyStringsLeetcode100 = function(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    
    if (A === B) {
        const uniqueChars = new Set(A.split(''));
        
        // we can't swap two same chars are they are unique
        if (uniqueChars.size === A.length) {
            return false;
        }
        
        return true;
    }
    
    let diffIndices = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diffIndices.push(i);
            if (diffIndices.length > 2) {
                return false;
            } 
        }
    }
    
    if (A[diffIndices[0]] === B[diffIndices[1]] && A[diffIndices[1]] === B[diffIndices[0]]) {
        return true;
    }
    
    return false;
};

"ab"
"ba"
"ab"
"ab"
"aa"
"aa"
"aaaaaaabc"
"aaaaaaacb"
""
"aa"

console.log("=====")
start = Date.now()
for (u=0;u<20000000;u++) {
    buddyStrings("ab","ba")
    buddyStrings("ab","ab")
    buddyStrings("aa","aa")
    buddyStrings("aaaaabc","aaaaacb")
    buddyStrings("","ba")
    buddyStrings("aab","aab")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<20000000;u++) {
    buddyStrings2("ab","ba")
    buddyStrings2("ab","ab")
    buddyStrings2("aa","aa")
    buddyStrings2("aaaaabc","aaaaacb")
    buddyStrings2("","ba")
    buddyStrings2("aab","aab")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)


console.log("=====")
start = Date.now()
for (u=0;u<20000000;u++) {
    buddyStringsLeetcode100("ab","ba")
    buddyStringsLeetcode100("ab","ab")
    buddyStringsLeetcode100("aa","aa")
    buddyStringsLeetcode100("aaaaabc","aaaaacb")
    buddyStringsLeetcode100("","ba")
    buddyStringsLeetcode100("aab","aab")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)