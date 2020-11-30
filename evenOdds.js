https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function(A) {
    let evens = []
    let odds = []
    
    for (let i=0; i<A.length;i++) {
        if (A[i] % 2 === 0) {
            evens.push(A[i])
        } else {
            odds.push(A[i])
        }
    }

    return [...evens, ...odds]
};

var sortArrayByParityLeetcode100 = function(A) {
    for (let i = 0, j = 0; j < A.length; j++) {
      if (A[j] % 2 === 0) {
        swap(A, i++, j);
      }
    }
    return A;
  
    function swap(A, i, j) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  };

  var sortArrayByParityLeetcodeSecond = function(A) {
    let a1 = A.filter(el => el%2==0);
    let a2 = A.filter(el => el%2==1);
    return a1.concat(a2);
};

var sortArrayByParityLeetcodeThird = function(A) {
    var sorted = []
    A.forEach(e => {
        if(e % 2 == 0) {
            sorted.unshift(e)
        } else {
            sorted.push(e)
        }
    })
    return sorted
};

//very clever
var sortArrayByParityLeetcodeFourth = function(A) {
    let j = 0
    for (let i = 0; i < A.length; i++) {
      if (A[i] % 2 === 0) {
        [A[i], A[j]] = [A[j], A[i]]
        j++
      }
    }
    return A
  };

  console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    sortArrayByParity([3,1,2,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    sortArrayByParityLeetcode100([3,1,2,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    sortArrayByParityLeetcodeSecond([3,1,2,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    sortArrayByParityLeetcodeThird([3,1,2,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    sortArrayByParityLeetcodeFourth([3,1,2,4])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)