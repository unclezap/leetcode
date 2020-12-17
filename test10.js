let s = "nndNfd"

// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

const solution = (s) => { 
    if (s.length === 0) {
        return 0
    }

    let maxLength = 1
    let currLength = 0
    let currStart = 0
    let currHash = {}
    
    for (let i=0;i<s.length;i++) {
        if (!currHash[s[i]]) {
            currHash[s[i]] = true
            currLength++
            if (currLength > maxLength) {
                maxLength = currLength
            }
        } else {
            while (s[currStart] !== s[i]) {
                delete currHash[s[currStart]]
                currLength--
                currStart++
            }
            currStart++
        }
        
        if (currLength > maxLength) {
            maxLength = currLength
        }
    }
    
    return maxLength

// let maxLength = 1
    
//     for (let i=0;i<s.length;i++) {
//         let currLength = 1
//         let currHash = {}
//         currHash[s[i]] = true
        
//         for (let j=i+1;j<s.length;j++) {
//             if (!currHash[s[j]]) {
//                 currHash[s[j]] = true
//                 currLength++
//             } else {
//                 break
//             }
//         }
        
//         if (currLength > maxLength) {
//             maxLength = currLength
//         }
//     }
    
//     return maxLength

};

console.log(solution(s))

