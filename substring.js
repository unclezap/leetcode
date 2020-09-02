//https://leetcode.com/problems/longest-palindromic-substring/submissions/

let input1 = ""
let input2 = "babad"
let input3 = "cbbd"
let input4 = "abcdefedcba"
let input5 = "abbdefedcba"
let input6 = "abbdfedcbag"
let input7 = "abcdef"

// console.log(input3.substr(1,2))
// console.log("++++")

var longestPalindrome1 = function(s) {

    let substring
    let boolean
    
    for (let i=s.length; i > 0; i--) {
      for (let j=0; j <= s.length - i; j++) {
         substring = s.slice(j, j + i)
         boolean = true
          for (let k=0; k < Math.floor(substring.length/2); k++) {
              if (substring[k] !== substring[substring.length - 1 - k]) {
                  boolean = false
                  break
              }
          }
          if (boolean) {
              return substring
          }
      }
    }
    
    return ""
  };

  var longestPalindrome2 = function(s) {

    let boolean
    
    for (let i=s.length; i > 0; i--) {
      for (let j=0; j <= s.length - i; j++) {
        boolean = true
        if (j + i > s.length) {
            break
        }
        for (let k=0; k < Math.floor(i/2); k++) {
            if (s[j + k] !== s[j + i - k - 1]) {
                boolean = false
                break
            }
        }

        if (boolean) {
            return s.substr(j, i)
        }
      }
    }
    
    return ""
  };

  var longestPalindromeLeetcode100 = function (s) {
    let end = s.length - 1;
    let fl = 0; // final left index
    let fr = 0; // final right index
  
    for (let i = 0; i <= end; i++) {
      let l = i;
      let r = i;
  
      // expand the window to the right for repeating letters
      while (r < end && s[l] === s[r + 1]) {
        r++;
      }
  
      i = r;
  
      // expand outward, before the edges while it's still a palindrome
      while (0 <= l - 1 && r + 1 <= end && s[l - 1] === s[r + 1]) {
        l--;
        r++;
      }
  
      if (fr - fl < r - l) {
        fl = l;
        fr = r;
      }
    }
  
    return s.slice(fl, fr + 1);
  };

  var longestPalindromeLeetcodeSecond = function (string) {
    if (string.length < 2) return string;

    let maxStart = 0;
    let maxStop = 0;
    let maxDif = 0;

    for (let mid = 0; mid < string.length; mid++) {
        let leftPtr = mid - 1;
        let rightPtr = mid + 1;

        while (string[rightPtr] === string[mid]) rightPtr++;

        mid = rightPtr - 1;

        while (leftPtr >= 0 && rightPtr < string.length && string[leftPtr] === string[rightPtr]) {
            leftPtr--;
            rightPtr++;
        }

        if (maxDif < rightPtr - (leftPtr + 1)) {
            maxStart = leftPtr + 1;
            maxStop = rightPtr;
            maxDif = maxStop - maxStart;
        }
    }
    return string.slice(maxStart, maxStop);
}

var longestPalindromeLeetcodeThird = function(s) {
    let cur = '';
    
    for (let i = 0; i < s.length; i++) {
      // start l = i
      let l = i, r = i;

      // find "root", e.g. "bb" for "abba" when i === 1
      while (r + 1 < s.length && s[r + 1] === s[i]) {
        r++;
      }

      // check if it's possible to have longer palindrome than we already find
      // min(what we have at "root" sides) x 2 + (size of "root")    
      if (cur.length && cur.length >= Math.min(l, s.length - (r + 1)) * 2 + (r + 1 - l)) {
        break;
      }

      // expand while we can
      while (l > 0 && r < s.length - 1) {
        if (s[l - 1] !== s[r + 1]) {
          break;
        }

        l -= 1;
        r += 1;
      }

      if (r + 1 - l > cur.length) {
        cur = s.substring(l, r + 1);
      }
    }

    return cur;
    
};

var longestPalindromeLeetcodeFourth = function (string) {
    if (string.length < 2) return string;

    let maxStart = 0;
    let maxStop = 0;
    let maxDif = 0;

    for (let mid = 0; mid < string.length; mid++) {
        let leftPtr = mid - 1;
        let rightPtr = mid + 1;

        while (string[rightPtr] === string[mid]) rightPtr++;

        mid = rightPtr - 1;

        while (leftPtr >= 0 && rightPtr < string.length && string[leftPtr] === string[rightPtr]) {
            leftPtr--;
            rightPtr++;
        }

        if (maxDif < rightPtr - (leftPtr + 1)) {
            maxStart = leftPtr + 1;
            maxStop = rightPtr;
            maxDif = maxStop - maxStart;
        }
    }
    return string.slice(maxStart, maxStop);
}

var longestPalindromeLeetcodeFifth = function(s) {
    if (!s || s.length <= 1) {
        return s;
    }
    
    let S = ('|' + s.split('').join('|') + '|').split('');
    let p = new Array(S.length);
    let c = 0, r = 0, m = 0, n = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (i > r) {
            p[i] = 0;
            m = i - 1;
            n = i + 1;
        } else {
            let i2 = c * 2 - i;
            if (p[i2] < r - i - 1) {
                p[i] = p[i2];
                m = -1; // This signals bypassing the while loop below. 
            } else {
                p[i] = r - i;
                n = r + 1;
                m = i * 2 - n;
            }
        }   
        
        while (m >= 0 && n < S.length && S[m] == S[n]) {
            p[i]++;
            m--;
            n++;
        }
        
        if (i + p[i] > r) {
            c = i;
            r = i + p[i];
        }
    }

    let len = 0;
    c = 0;
    
    for (let i = 1; i < S.length; i++) {
        if (len < p[i]) {
            len = p[i];
            c = i;
        }
    }
    
    let ss = S.slice(c - len, c + len + 1);
    return remove(ss).join('');
    
};

let remove = (arr) => {
    let output = [];
    for (let i = 0; i < (arr.length / 2) - 1; i++) {
        output[i] = arr[2*i + 1]
    }
    return output;
}

//   console.log(longestPalindrome1(input1))
//   console.log(longestPalindrome1(input2))
//   console.log(longestPalindrome1(input3))
//   console.log(longestPalindrome1(input4))
//   console.log(longestPalindrome1(input5))
//   console.log(longestPalindrome1(input6))
//   console.log(longestPalindrome1(input7))
//   console.log("====")

//   console.log(longestPalindrome2(input1))
//   console.log(longestPalindrome2(input2))
//   console.log(longestPalindrome2(input3))
//   console.log(longestPalindrome2(input4))
//   console.log(longestPalindrome2(input5))
//   console.log(longestPalindrome2(input6))
//   console.log(longestPalindrome2(input7))
//   console.log("====")

//   console.log(longestPalindromeLeetcode100(input1))
//   console.log(longestPalindromeLeetcode100(input2))
//   console.log(longestPalindromeLeetcode100(input3))
//   console.log(longestPalindromeLeetcode100(input4))
//   console.log(longestPalindromeLeetcode100(input5))
//   console.log(longestPalindromeLeetcode100(input6))
//   console.log(longestPalindromeLeetcode100(input7))

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindrome1(input1)
  longestPalindrome1(input2)
  longestPalindrome1(input3)
  longestPalindrome1(input4)
  longestPalindrome1(input5)
  longestPalindrome1(input6)
  longestPalindrome1(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindrome2(input1)
  longestPalindrome2(input2)
  longestPalindrome2(input3)
  longestPalindrome2(input4)
  longestPalindrome2(input5)
  longestPalindrome2(input6)
  longestPalindrome2(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindromeLeetcode100(input1)
  longestPalindromeLeetcode100(input2)
  longestPalindromeLeetcode100(input3)
  longestPalindromeLeetcode100(input4)
  longestPalindromeLeetcode100(input5)
  longestPalindromeLeetcode100(input6)
  longestPalindromeLeetcode100(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindromeLeetcodeSecond(input1)
  longestPalindromeLeetcodeSecond(input2)
  longestPalindromeLeetcodeSecond(input3)
  longestPalindromeLeetcodeSecond(input4)
  longestPalindromeLeetcodeSecond(input5)
  longestPalindromeLeetcodeSecond(input6)
  longestPalindromeLeetcodeSecond(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindromeLeetcodeThird(input1)
  longestPalindromeLeetcodeThird(input2)
  longestPalindromeLeetcodeThird(input3)
  longestPalindromeLeetcodeThird(input4)
  longestPalindromeLeetcodeThird(input5)
  longestPalindromeLeetcodeThird(input6)
  longestPalindromeLeetcodeThird(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindromeLeetcodeFourth(input1)
  longestPalindromeLeetcodeFourth(input2)
  longestPalindromeLeetcodeFourth(input3)
  longestPalindromeLeetcodeFourth(input4)
  longestPalindromeLeetcodeFourth(input5)
  longestPalindromeLeetcodeFourth(input6)
  longestPalindromeLeetcodeFourth(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
  longestPalindromeLeetcodeFifth(input1)
  longestPalindromeLeetcodeFifth(input2)
  longestPalindromeLeetcodeFifth(input3)
  longestPalindromeLeetcodeFifth(input4)
  longestPalindromeLeetcodeFifth(input5)
  longestPalindromeLeetcodeFifth(input6)
  longestPalindromeLeetcodeFifth(input7)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)