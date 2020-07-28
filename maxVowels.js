let s = "abciiidef"
let k = 3

let s2 = "aeiou"
let k2 = 2

let s3 = "leetcode"
let k3 = 3

let s4 = "leetcode"
let k4 = 3

let s5 = "rhythms"
let k5 = 4

let s6 = "tryhard"
let k6 = 4

var maxVowels = function(s, k) {
    //make a hash of all the vowels
    let hash = {a: 1,
           e: 1,
           i:1,
           o:1,
           u:1}
    
    let max = 0
    let tempMax = 0
    let substring
    
    //go through the string and pick out every substring of length k
    for (let i=0; i < s.length - k + 1; i++) {
        substring = s.slice(i, i + k)
        tempMax = 0
        for (let j=0; j < substring.length; j++) {
            if (hash[substring[j]]) {
                tempMax++
            }
        }
        if (tempMax > max) {
            max = tempMax
        }
    }
    
    return max
    //record the maximum number of vowels
    //return the maximum number
};

var maxVowelsLeetcode100 = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const prevVowel = [];  
    let output = 0;
    let currentVowels = 0;
    
    for(let i = 0; i < s.length; i++){
        if (output === k) {
            return output;
        }
        if (i >= k){
            currentVowels -= prevVowel[i-k];
        }
        if(vowels.has(s[i])){
            currentVowels += 1;   
            prevVowel.push(1);
            if (i<k) {
                output +=1 
            }
            else {
                output = Math.max(output, currentVowels);
            }
           //output = i < k ?  currentVowels : Math.max(output, currentVowels);     
        }
        else {
            prevVowel.push(0);
        }
    }
    return output;
};

var maxVowelsLeetcodeNext = function(s, k) {
    let set = "aeiou";
    let count = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++){
        if (set.indexOf(s[i]) > -1){
            count++;
        }
        if (i >= k - 1){
            res = Math.max(res, count);
            //window size full, now moving left
            if (set.indexOf(s[i - k + 1]) > -1){
                count--;
            }
        }
    }
    return res;
};

// console.log(maxVowels(s,k))
// console.log(maxVowels(s2,k2))
// console.log(maxVowels(s3,k3))
// console.log(maxVowels(s4,k4))
// console.log(maxVowels(s5,k5))
// console.log(maxVowels(s6,k6))

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxVowels(s,k)
    maxVowels(s2,k2)
    maxVowels(s3,k3)
    maxVowels(s4,k4)
    maxVowels(s5,k5)
    maxVowels(s6,k6)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxVowelsLeetcode100(s,k)
    maxVowelsLeetcode100(s2,k2)
    maxVowelsLeetcode100(s3,k3)
    maxVowelsLeetcode100(s4,k4)
    maxVowelsLeetcode100(s5,k5)
    maxVowelsLeetcode100(s6,k6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxVowelsLeetcodeNext(s,k)
    maxVowelsLeetcodeNext(s2,k2)
    maxVowelsLeetcodeNext(s3,k3)
    maxVowelsLeetcodeNext(s4,k4)
    maxVowelsLeetcodeNext(s5,k5)
    maxVowelsLeetcodeNext(s6,k6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 4ms slower time: ${timeElapsed} ms`)

//leetcode 4ms slower time is fastest; leetcode 100 time slowest; my time 1s slower than next time