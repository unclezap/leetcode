//https://leetcode.com/problems/longest-palindromic-substring/submissions/

let input1 = ""
let input2 = "babad"
let input3 = "cbbd"
let input4 = "abcdefedcba"
let input5 = "abbdefedcba"
let input6 = "abbdfedcbag"

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

//   console.log(longestPalindrome1(input1))
//   console.log(longestPalindrome1(input2))
//   console.log(longestPalindrome1(input3))
//   console.log(longestPalindrome1(input4))
//   console.log(longestPalindrome1(input5))
//   console.log(longestPalindrome1(input6))

//   console.log(longestPalindromeLeetcode100(input1))
//   console.log(longestPalindromeLeetcode100(input2))
//   console.log(longestPalindromeLeetcode100(input3))
//   console.log(longestPalindromeLeetcode100(input4))
//   console.log(longestPalindromeLeetcode100(input5))
//   console.log(longestPalindromeLeetcode100(input6))

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
  longestPalindrome1(input1)
  longestPalindrome1(input2)
  longestPalindrome1(input3)
  longestPalindrome1(input4)
  longestPalindrome1(input5)
  longestPalindrome1(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
  longestPalindromeLeetcode100(input1)
  longestPalindromeLeetcode100(input2)
  longestPalindromeLeetcode100(input3)
  longestPalindromeLeetcode100(input4)
  longestPalindromeLeetcode100(input5)
  longestPalindromeLeetcode100(input6)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

