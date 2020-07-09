// https://leetcode.com/problems/lexicographical-numbers/

var lexicalOrder = function(n) {
    let returnArray = []

    var goDeeper = function(n, i) {
        let tens = 0
        while (n >= i * 10**tens) {
            returnArray.push(i * 10**tens)
            tens++
        }
        tens--
        return tens
    }

    for (let it=1; i<10; i++) {
        let tens = goDeeper(n, i)
        input = i * 10**(tens - 1)
        while (tens > 0) {
            for (let j=1; j < 10; j++) {
                input = i * 10**tens + j
                returnArray.push(input)
            }
        }
    }

    // for (let i=1; i < 10; i++) {
    //     let tens = goDeeper(i)
    //     while (tens > 0) {
    //         for (let j=1; j < 10; j++) {
    //             input = i * 10**tens + j
    //             returnArray.push(input)
    //         }
    //         input++
    //         input = input/10
    //     }
    // }
        
}

// var lexicalOrder = function(n) {
//     let returnArray = []
//     if (n < 10) {
//         for (let i=1; i <=n; i++) {
//             returnArray.push(i)
//         }
//         return returnArray
//     }
//     let tens
//     let base

//     for (let i=1; i < 10; i++) {
//         tens = 0
//         while (n >= i * 10**tens) {
//             returnArray.push(i * 10**tens)
//             tens++
//         }
//         while (tens > 0) {
//             tens--
//             base = 10**tens * i
//             // max = 10**tens - 1
//             for (let i=1; i < 10; i++) {
//                 if (base + i <= n) {
//                     returnArray.push(base + i)
//                 }
//             }
//         }
//     }
//     return returnArray
// }

// var lexicalOrder = function(n, returnArray=[], number=1, tens=0) {
//     // console.log(returnArray.length)
//     // if (returnArray.length < 10) {
//     //     console.log(returnArray)
//     // }
//     if (returnArray.length === n) {
//         console.log(returnArray)
//         return returnArray
//     }
//     if (number * 10**tens < n) {
//         // returnArray.push(number * 10**tens)
//         tens++
//     } else {
//         for (let i=0; i < 10; i++) {
//             if (number + i <= n) {
//                 returnArray.push(number + i)
//             }
//         }
//         number = number * 10**(tens - 1) + 1
//         //if the number minus the tens is > 10, reset the number to the next single digit
//         tens = 0
//     }
//     lexicalOrder(n, returnArray, number, tens)
// }

// digit++
// if (digit === 10) {
//     digit = 0
// }



// var lexicalOrder = function(n) {
//     returnArray = []

//     if (n < 10) {
//         for (let i=1; i < n + 1; i++) {
//             returnArray.push(i)
//         }
//         return returnArray
//     }

//     for (let i=1; i<10; i++) {
//         let tens = 0
//         while (n > 10**tens) {
//             tens++
//         }
//     }


//     return returnArray
// }


// var lexicalOrder = function(n) {
//     returnArray = []
//     if (n < 10) {
//         for (let i=1; i < n + 1; i++ ) {
//             returnArray.push(i)
//         }
//     } else if (n < 100) {
//         for (let i=1; i < Math.floor(n/10); i++) {
//             returnArray.push(i)
//             for (let j=0; j <= 9; j++) {
//                 returnArray.push(10 * i + j)
//             }
//         }
//         if (n/10 > Math.floor(n/10)) {
//             returnArray.push(Math.floor(n/10))
//             for (let j=(10*Math.floor(n/10)); j <= n; j++) {
//                 returnArray.push(j)
//             }
//         }
//         for (let k = Math.floor(n/10) + 1; k < 10; k++) {
//             returnArray.push(k)
//         }
//     }
    
//     return returnArray
// };

// var lexicalOrder = function(n) {
//     returnArray = []
//     let tens
    
//     if (n < 10) {
//         for (let i=1; i <=n; i++) {
//             returnArray.push(i)
//         }
//     } else {
//         for (let i=1; i<10; i++) {
//             returnArray.push(i)
//             tens = 1
//             while (10**tens < n) {
//                 // returnArray.push(10**tens * 1)
//                 tens++
//             }
//             tens--
//             while (tens > 0) {
//                 for (let wTens = 0; wTens < tens; wTens++) {
//                     for (let j=0; j < 10; j++) {
//                         if (10**tens * i + 10**wTens * j <= n) {
//                             returnArray.push(10**tens * i + 10**wTens * j)
//                         }
//                     }
//                 }
//                 tens--
//             }
//         }

//         // tens = 1
//         //     while (10**tens< n) {
//         //         // returnArray.push(10**tens * i)
//         //         tens++
//         //     }
//         // for (let i=1; i < 10; i++) {
//         //     returnArray.push(i)
//         //     // for (let j=1; j <= tens; j++) {
//         //     //     if (10**j * i <= n) {
//         //     //         returnArray.push(10**j * i)
//         //     //         for (let k=1; k < 10; k++) {
//         //     //             returnArray.push(10**j * i + k)
//         //     //         }
//         //     //     }
//         //     // }

//         //     while
//         //     // let wTens = tens
//         //     // while ( wTens > 0) {
//         //     //     for (let j=1; j < n; j++) {
//         //     //         if (10**wTens * i + j <= n) {
//         //     //             returnArray.push(10**wTens * i + j)
//         //     //         }
//         //     //     }
//         //     //     wTens--
//         //     // }

//         // }
//     }

    // console.log(tens)
    // for (let i=1; i<10; i++) {
    //     // returnArray.push(i)
    //     for (let tens=0; tens < n/10; tens++) {
    //         returnArray.push(10 * tens + i)
    //     }
    // }

//     return returnArray
// }

// console.log(lexicalOrder(1))
// console.log(lexicalOrder(7))
// console.log(lexicalOrder(10))
console.log(lexicalOrder(13))
// console.log(lexicalOrder(22))
// console.log(lexicalOrder(100))
// console.log(lexicalOrder(101))
// console.log(lexicalOrder(113))
// console.log(lexicalOrder(23))
// console.log(lexicalOrder(1000))
// console.log(lexicalOrder(1012))

// 1, 10, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 11, 110, 111, 112

//for 1-9
    //add zeros until you can't add any more
    //add 1-9
    //

// 1
//     10
//         100
//         101..109
//     11
//         110
//         111..119

// 1
//     10
//         100
//             1000
//             1001..1009
//         101
//             1010
//             1011..1019
//         102
//             1020

// 1, 10, 100, 1000, 1001-1009, 101, 1010-1012, 102-199, 1020-1029

// 1
//     10
//         100
//             1000 - 1009
//         101
//             1010 - 1019
//         ...
//     11
//         110
//             1100-1109
//         111
            

// 1 
//     10 
//         100 tens increments
//         101 - 109    for 1-10 loop
//     11  tens decrements; digit increments
//         110 tens increments
//         111 - 119 
//     12
//         120
//         121-119
    