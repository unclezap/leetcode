let obj = [{ 'city-and-state': 'Boston, MA', zip: '12345-1234' }]
console.log(obj[0])
// console.log(typeof obj === "object")

// obj.forEach((key) => {console.log(key)})

// let key = "first-name"

// console.log(key.split('-'))

// let array = [1,2,3,4,5]
// array.splice(0,1)
// // console.log(array)

// let array1 = [0,0,1]
// // array1.splice(0,1)
// // console.log(array1)

// // var moveZeroes = function(nums) {
// //     let count = 0
// //     for (let i=0; i < nums.length; i++) {
// //         if (nums[i] === 0) {
// //             nums.splice(i,1)
// //             i--
// //             count++
// //         }
// //     }
// //     for (let i=0; i < count; i++) {
// //         nums.push(0)
// //     }
// //     return nums
// // };

// var moveZeroes = function(nums) {
//     let count = 0
//     let max = nums.length
//     for (let i=0; i < max; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i,1)
//             nums.push(0)
//             i--
//             count++
//         }
//     }
//     // for (let i=0; i < count; i++) {
//     //     nums.push(0)
//     // }
//     return nums
// };

// console.log(moveZeroes(array1))