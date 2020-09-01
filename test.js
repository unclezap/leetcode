console.log(1 == "1.0")

// let string = "abcd"
// // console.log(string.slice(1, 3))

// let array = [1,2,3]

// // console.log(array.reduce((total, value) => {return total + value}))
// array.shift()

// // console.log(array)
// let array2 = [3,30,34,5,9]

// // console.log(array2.sort())
// // console.log(array2)

// // var largestNumber = function(nums) {
// //     nums.sort()
// //     let string = ""
// //     for (let i=nums.length - 1; i > -1; i--) {
// //         // console.log(nums[i])
// //         string += nums[i]
// //     }
// //     return string
// // };

// //doesn't always work
// var largestNumber = function(nums) {

//     nums.sort((first, second) => {
//         if (first === second) {
//             return 0
//         }

//         first = first.toString()
//         second = second.toString()
//         let max = Math.min(first.length, second.length)
//         let outDigit = 0
//         let digit

//         for (let digit = 0; digit < max; digit++) {
//             // console.log('looping')
//             if (first[digit] > second[digit]) {
//                 return -1
//             } else if (first[digit] < second[digit]) {
//                 return 1
//             }
//             // console.log('ex')
//             outDigit++
//         }
//         if (first.length > second.length) {
//             if (first[outDigit] > second[outDigit - 1]) {
//                 // console.log(first, second, 'hi1')
//                 return -1
//             } else {
//                 // console.log(first, second, 'hi2', outDigit)
//                 return 1
//             }
//         } else if (first.length < second.length) {
//             if (first[outDigit - 1] > second[outDigit]) {
//                 // console.log(first, second, 'hi3')
//                 return -1
//             } else {
//                 // console.log(first, second, 'hi4')
//                 return 1
//             }
//         }
//         // console.log(first, second, 'hi5')
//         return 0
//     })

//     // return nums
//     let string = ""
//     for (let i=0; i < nums.length; i++) {
//         string += nums[i]
//     }
    
//     if (string[0] === '0') {
//         return '0'
//     }

//     return string
// };

// var largestNumberSimple = function(nums) {

//     nums.sort((first, second) => {
//         if (first === second) {
//             return 0
//         }

//         first = first.toString()
//         second = second.toString()
//         return (second + first) - (first + second)
//     })

//     let string = ""
//     for (let i=0; i < nums.length; i++) {
//         string += nums[i]
//     }
    
//     if (string[0] === '0') {
//         return '0'
//     }

//     return string
// };

// // console.log(largestNumber(array2))
// // console.log(largestNumber([3, 31,34]))
// // console.log(largestNumber([31, 3,34]))

// // [824,938,1399,5607,6973,5703,9609,4398,8247]
// // Output
// // "9609938824782469735703560743981399"
// // Expected
// // "9609938824824769735703560743981399"

// // Input
// // [121,12]
// // Output
// // "12112"
// // Expected
// // "12121"



// // if ("1"[1]) {
// //     console.log(true)
// // } else {
// //     console.log(false)
// // }
// // var maxVowels = function(s, k) {
// //     //make a hash of all the vowels
// //     let hash = {a: 1,
// //            e: 1,
// //            i:1,
// //            o:1,
// //            u:1}
    
// //     let max = 0
// //     let tempMax = 0
// //     let substring
    
// //     for (let i=-0; i )
    
// //     //go through the string and pick out every substring of length k
// //     for (let i=0; i < s.length - k + 1; i++) {
// //         substring = s.slice(i, i + k)
// //         tempMax = 0
// //         for (let j=0; j < substring.length; j++) {
// //             if (hash[substring[j]]) {
// //                 tempMax++
// //             }
// //         }
// //         if (tempMax > max) {
// //             max = tempMax
// //         }
// //     }
    
// //     return max
// //     //record the maximum number of vowels
// //     //return the maximum number
// // };
