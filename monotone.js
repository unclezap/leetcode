// https://leetcode.com/problems/flip-string-to-monotone-increasing/

//not working, need to split into individual bits

let input1 = "00110"
// Output: 1
// Explanation: We flip the last digit to get 00111.
// Example 2:

let input2 = "010110"
// Output: 2
// Explanation: We flip to get 011111, or alternatively 000111.
// Example 3:

let input3 = "00011000"
// Output: 2
// Explanation: We flip to get 00000000.

let input4 = "000"

var minFlipsMonoIncr = function(S) {
    let start = S.indexOf("1")

    if (start === -1 || start === S.length + 1) {
        return 0
    }

    let hash = {"0": 0,
                "1": 0}
    let count = 0

    for (let i = start; i < S.length; i++) {
        hash[S[i]]++
        if (S[i] === "0") {
            if (hash["0"] > hash["1"]) {
                count = hash["1"]
            } else {
                count = hash["0"]
            }
        }
    }

    return count
};

console.log(minFlipsMonoIncr(input1))
console.log(minFlipsMonoIncr(input2))
console.log(minFlipsMonoIncr(input3))
console.log(minFlipsMonoIncr(input4))

// console.log("00000".indexOf("1"), "00001".length)

console.log(minFlipsMonoIncr("1111101000110"))
console.log(minFlipsMonoIncr("0000010111001"))
console.log(minFlipsMonoIncr("00000100111001"))
console.log(minFlipsMonoIncr("0101100011"))