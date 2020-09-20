// https://leetcode.com/problems/perfect-number/submissions/

var checkPerfectNumber = function(num) {
    if (num < 6) {
        return false
    }
      
      let sum = 1
      
      for (let i=2; i<= num/2; i++) {
          if (num % i === 0) {
              sum += i
          }
      }
    
      return sum === num
  };