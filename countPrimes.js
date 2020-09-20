// https://leetcode.com/problems/count-primes/submissions/

let n1 = 10
let n2 = 10000
let n3 = 499979
let n4 = 999983

var countPrimesNumbers = function(n) {
    if (n <= 2) {
        return 0
    } else if (n < 4) {
        return 1
    } else if (n === 4) {
        return 2
    }
     
    let array = [2, 3]
    for (let i=5; i < n; i +=2) {
        let prime = true
        
        for (let j=3;j**2 <= i; j +=2) {
            if (i % j === 0) {
                prime = false
                break
            }
        }
        if (prime) {
            array.push(i)
        }
    }
     return array.length
 };

 var countPrimesPrimes = function(n) {
    if (n <= 2) {
        return 0
    } else if (n < 4) {
        return 1
    } else if (n === 4) {
        return 2
    }
     
    let array = [2, 3]
    for (let i=5; i < n; i +=2) {
        let prime =true

        for (let j=1; j < array.length; j++) {
            if (i % array[j] === 0) {
                prime = false
                break
            }
            
            if (array[j] ** 2 > i) {
                break
            }
        }
        if (prime) {
            array.push(i)
        }
    }
     return array.length
 };

 var countPrimesLeetcode100 = function(n) {
    var isPrime = new Uint8Array(n);
    for (var i = 2; i < n; i++) {
      isPrime[i] = true;
   }
   for (var i = 2; i * i < n; i++) {
          if (!isPrime[i]) continue;
          for (var j = i * i; j < n; j += i) {
             isPrime[j] = false;
          }
       }
   var count = 0;
   for (var i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
   return count;
};

var countPrimesLeetcodeSecond = function(n) {
    var temp = new Uint8Array(n);
    var arr  = [];
    for (var i = 2; i < n; i++) {
        if(!temp[i-1]) {
            arr.push(i);
            for (var j = i * i; j < n; j+=i) {
                temp[j-1] = true;
            }
        }
    }
    return arr.length;
};

var countPrimesLeetcodeThird = function (n) {
    let count = 0;
    let signs = new Uint8Array(n);
  
    for (let i = 2; i < n; i++) {
      if (!signs[i - 1]) {
        count++;
        for (let j = i * i; j <= n; j += i) {
          signs[j - 1] = true;
        }
      }
    }
    return count;
  };

  const countPrimesLeetcodeFourth = function(n) {
    let isPrime = new Uint8Array(n);
  
    for (let i = 2; i < n; i++) {
      isPrime[i] = true;
    }
  
    // Loop's ending condition is i * i < n instead of i < sqrt(n)
    // to avoid calling expensive function sqrt(n)
    for (let i = 0; i * i < n; i++) {
      if (!isPrime[i]) continue;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  
    let count = 0;
    for (let i = 2; i < n; i++) {
      if (isPrime[i]) count++;
    }
  
    return count;
  };

//   console.log(countPrimesNumbers(n1))
//   console.log(countPrimesNumbers(n2))
//   console.log(countPrimesNumbers(n3))
//   console.log(countPrimesNumbers(n4))
//   console.log("+++++")
//   console.log(countPrimesPrimes(n1))
//   console.log(countPrimesPrimes(n2))
//   console.log(countPrimesPrimes(n3))
//   console.log(countPrimesPrimes(n4))
//   console.log("+++++")
//   console.log(countPrimesLeetcode100(n1))
//   console.log(countPrimesLeetcode100(n2))
//   console.log(countPrimesLeetcode100(n3))
//   console.log(countPrimesLeetcode100(n4))
//   console.log("+++++")
//   console.log(countPrimesLeetcodeSecond(n1))
//   console.log(countPrimesLeetcodeSecond(n2))
//   console.log(countPrimesLeetcodeSecond(n3))
//   console.log(countPrimesLeetcodeSecond(n4))
//   console.log("+++++")
//   console.log(countPrimesLeetcodeThird(n1))
//   console.log(countPrimesLeetcodeThird(n2))
//   console.log(countPrimesLeetcodeThird(n3))
//   console.log(countPrimesLeetcodeThird(n4))
//   console.log("+++++")
//   console.log(countPrimesLeetcodeFourth(n1))
//   console.log(countPrimesLeetcodeFourth(n2))
//   console.log(countPrimesLeetcodeFourth(n3))
//   console.log(countPrimesLeetcodeFourth(n4))
//   console.log("+++++")

console.log("=====")
start = Date.now()
for (u=0;u<10;u++) {
  countPrimesNumbers(n1)
  countPrimesNumbers(n2)
  countPrimesNumbers(n3)
  countPrimesNumbers(n4)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10;u++) {
  countPrimesPrimes(n1)
  countPrimesPrimes(n2)
  countPrimesPrimes(n3)
  countPrimesPrimes(n4)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10;u++) {
  countPrimesLeetcode100(n1)
  countPrimesLeetcode100(n2)
  countPrimesLeetcode100(n3)
  countPrimesLeetcode100(n4)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10;u++) {
  countPrimesLeetcodeSecond(n1)
  countPrimesLeetcodeSecond(n2)
  countPrimesLeetcodeSecond(n3)
  countPrimesLeetcodeSecond(n4)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10;u++) {
  countPrimesLeetcodeThird(n1)
  countPrimesLeetcodeThird(n2)
  countPrimesLeetcodeThird(n3)
  countPrimesLeetcodeThird(n4)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10;u++) {
  countPrimesLeetcodeFourth(n1)
  countPrimesLeetcodeFourth(n2)
  countPrimesLeetcodeFourth(n3)
  countPrimesLeetcodeFourth(n4)
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)
  