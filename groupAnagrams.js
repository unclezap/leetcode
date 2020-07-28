// https://leetcode.com/problems/group-anagrams/

let strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
let strs2 = ["one", "noe", "eon"]
// ans = [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
//   ]

// var groupAnagrams = function(strs) {
//     let hashArray = []
//     let hash
//     let set = new Set()

//     for (let i=0; i < strs.length; i++) {
//         hash = {}
//         for (let j=0; j < strs[i].length; j++) {
//             if (hash[strs[i][j]]) {
//                 hash[j]++
//             } else {
//                 hash[strs[i][j]] = 1
//                 set.add(strs[i][j])
//             }
//         }
//         hashArray.push(hash)
//     }
//     let a1 = {b:1, a:1}
//     let a2 = {a:2}
//     let a11 = {a:1, b:1}

//     console.log(JSON.stringify(a1) === JSON.stringify(a11))
//     console.log(JSON.stringify(a1) === JSON.stringify(a2))

//     return hashArray
// };

var groupAnagrams = function(strs) {
    let primeLetters = {
        a:2,
        b:3,
        c:5,
        d:7,
        e:11,
        f:13,
        g:17,
        h:19,
        i:23,
        j:29,
        k:31,
        l:37,
        m:41,
        n:43,
        o:47,
        p:53,
        q:59,
        r:61,
        s:67,
        t:71,
        u:73,
        v:79,
        w:83,
        x:89,
        y:97,
        z:101
    }
    let productHash = {}
    let returnIndex = 1
    let returnArray = []
    let product

    for (let i=0; i< strs.length; i++) {
        product = 1
        for (let j=0; j < strs[i].length; j++) {
            product = product * primeLetters[strs[i][j]]
        }

        if (!productHash[product]) {
            productHash[product] = returnIndex
            returnIndex++            
            returnArray.push([strs[i]])
        } else {
            returnArray[productHash[product] - 1].push(strs[i])
        }
    }
    return returnArray
};

var groupAnagrams2 = function(strs) {
    if (!strs || strs.length == 0) return [];
    let key;
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        key = [...strs[i]].sort().join('');
        if (map.has(key)) {
            map.get(key).push(strs[i]);
        } else {
            map.set(key, [strs[i]]);
        }
    }
    return [...map.values()];
};

var groupAnagramsLeetcode100 = function(strs) {
    const group = new Map();
    const sortedStrs = strs.map(str => Array.from(str).sort().join(''));
    for (let i = 0; i < strs.length; i++){
        let sorted = sortedStrs[i];
        let original = strs[i];
        
        if (group.has(sorted)){
            group.set(sorted, [...group.get(sorted), original]);
        } 
        else {
            group.set(sorted, [original]);
        }
    }
    return [...group.values()]
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    groupAnagrams(strs1)
    groupAnagrams(strs2)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    groupAnagrams2(strs1)
    groupAnagrams2(strs2)
}
end = Date.now()
timeElapsed = end - start
console.log(`supposed 90% speed solution time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    groupAnagramsLeetcode100(strs1)
    groupAnagramsLeetcode100(strs2)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//first solution faster than leetcode by ~2300ms

// console.log(groupAnagrams(strs1))
// console.log(groupAnagrams(strs2))

// let hash = {}
// let returnIndex = 0
// let value = 55
// hash[value] = returnIndex
// console.log(hash)
// if (hash[value]) {
//     console.log("true")
// } else {
//     console.log("false")
// }