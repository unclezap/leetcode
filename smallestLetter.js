// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

var nextGreatestLetter = function(letters, target) {
    let hash = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    }
    
    let min = 26
    let answer = ''
  
    let globalMin = 26
    let backup = ''
    
    
    for (let i=0; i<letters.length; i++) {
        if (hash[letters[i]] > hash[target] && hash[letters[i]] < min) {
            answer = letters[i]
            min = hash[letters[i]]
        }
        
        if (hash[letters[i]] < globalMin) {
            globalMin = hash[letters[i]]
            backup = letters[i]
        }
    }
      if (answer === '') {
          return backup
      } else {
          return answer
      }
  };

  //the reason binary search is faster is that the characters are sorted, d'oh
  var nextGreatestLetterLeetcode100 = function(letters, target) {
    const index = binarySearch(letters, target)
    return letters[index]
};

function binarySearch(arr, target){
  let l = 0, r = arr.length-1
  while(l < r){
    const mid = Math.floor((r+l)/2)    
    if(arr[mid]===target && arr[mid+1] !== target){
      //target if found but not the same as next
      //return plus one
      return mid+1
    }else if(target >= arr[mid]){
      l = mid+1
    }else{
      r = mid
    }
  }
  // if index is last and target is greater than or equal to index
  // return the first index
  if(arr[l] <= target && l === arr.length-1) return 0
  return l
}

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    nextGreatestLetter(["c", "f", "j"], "a")
    nextGreatestLetter(["c", "f", "j"], "c")
    nextGreatestLetter(["c", "f", "j"], "d")
    nextGreatestLetter(["c", "f", "j"], "g")
    nextGreatestLetter(["c", "f", "j"], "j")
    nextGreatestLetter(["c", "f", "j"], "k")
    nextGreatestLetter(["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],"y")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)


console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    nextGreatestLetterLeetcode100(["c", "f", "j"], "a")
    nextGreatestLetterLeetcode100(["c", "f", "j"], "c")
    nextGreatestLetterLeetcode100(["c", "f", "j"], "d")
    nextGreatestLetterLeetcode100(["c", "f", "j"], "g")
    nextGreatestLetterLeetcode100(["c", "f", "j"], "j")
    nextGreatestLetterLeetcode100(["c", "f", "j"], "k")
    nextGreatestLetterLeetcode100(["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],"y")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)
