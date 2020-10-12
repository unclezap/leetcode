// https://leetcode.com/problems/shuffle-string/

var restoreString = function(s, indices) {
    let returnArray = []
    //turns out these lines are not necessary
    // for (let i=0; i < s.length-1; i++) {
    //     returnArray.push("")
    // }

    for (let i=0; i < s.length; i++) {
        returnArray[indices[i]] = s[i]
    }

    return returnArray.join('')
};

//only one to not use .join()
var restoreStringLeetcode100 = function(s, indices) {
    //     const ans = Array(s.length);
    //     indices.forEach((i1, i2) => ans[i1] = s[i2]);
    //     return ans.join('');
        
        let result = "";
        indices.forEach((_, i) => {
            result += s[indices.indexOf(i)];
        });
        return result;
    };

    var restoreStringLeetcodeSecond = function(s, indices) {
        let arr = new Array(indices.length);
        for (let i = 0; i < indices.length; i++) {
          const index = indices[i];
          arr[index] = s[i];
        }
        return arr.join("");
    };

    const restoreStringLeetcodeThird = function(s, indices) {
        const newStringArr = [];
        
        indices.forEach((index, i) => {
          newStringArr[index] = s[i];
        });     
        
        return newStringArr.join('');
      };

      var restoreStringLeetcodeFourth = function(s, indices) {
    
        let len = s.length;
        let result = [];
        
        for (let i=0; i<len; i++) {
            let letter = s[i];
            let index = indices[i];
            
            result[index] = letter;
        }
        
        result = result.join("");
        return result;
    };

    var restoreStringLeetcodeFifth = function(s, indices) {
        let result = [];
        
        indices.forEach((i,idx) => {
            result[i] = s[idx]
        });
        
        return result.join('')
    };

    var restoreStringLeetcodeSixth = function(s, indices) {
        let v = Array.from(s);
        for (i = 0; i < s.length; i++){
            v[indices[i]] = s[i];
        }
        return v.join("");
    };

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreString("codeleet",[4,5,6,7,0,2,1,3])
    restoreString("abc",[0,1,2])
    restoreString("aiohn", [3,1,4,2,0])
    restoreString("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreString("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreStringLeetcode100("codeleet",[4,5,6,7,0,2,1,3])
    restoreStringLeetcode100("abc",[0,1,2])
    restoreStringLeetcode100("aiohn", [3,1,4,2,0])
    restoreStringLeetcode100("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreStringLeetcode100("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreStringLeetcodeSecond("codeleet",[4,5,6,7,0,2,1,3])
    restoreStringLeetcodeSecond("abc",[0,1,2])
    restoreStringLeetcodeSecond("aiohn", [3,1,4,2,0])
    restoreStringLeetcodeSecond("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreStringLeetcodeSecond("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreStringLeetcodeThird("codeleet",[4,5,6,7,0,2,1,3])
    restoreStringLeetcodeThird("abc",[0,1,2])
    restoreStringLeetcodeThird("aiohn", [3,1,4,2,0])
    restoreStringLeetcodeThird("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreStringLeetcodeThird("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreStringLeetcodeFourth("codeleet",[4,5,6,7,0,2,1,3])
    restoreStringLeetcodeFourth("abc",[0,1,2])
    restoreStringLeetcodeFourth("aiohn", [3,1,4,2,0])
    restoreStringLeetcodeFourth("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreStringLeetcodeFourth("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreStringLeetcodeFifth("codeleet",[4,5,6,7,0,2,1,3])
    restoreStringLeetcodeFifth("abc",[0,1,2])
    restoreStringLeetcodeFifth("aiohn", [3,1,4,2,0])
    restoreStringLeetcodeFifth("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreStringLeetcodeFifth("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    restoreStringLeetcodeSixth("codeleet",[4,5,6,7,0,2,1,3])
    restoreStringLeetcodeSixth("abc",[0,1,2])
    restoreStringLeetcodeSixth("aiohn", [3,1,4,2,0])
    restoreStringLeetcodeSixth("aaiougrt", [4,0,2,6,7,3,1,5])
    restoreStringLeetcodeSixth("art", [1,0,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)