let number = 4
let copy = number
let reverse = 0

while (copy > 0) {
    reverse *= 10
    reverse += copy % 10
    copy -= copy % 10
    copy /= 10
}

if (number === reverse) {
    console.log(true)
} else {
    console.log(false)
}

console.log(reverse)


//             let product = (num - firstDif) * (num - secondDif)
//             let string = product.toString()
//             let reverse = string.split('').reverse().join('')
//             let palindrome = true
            
//             for (let j=0;j<string.length;j++) {
//                 if (string[j] !== reverse[j]) {
//                     palindrome = false
//                     break
//                 }
//             }
            
//             if (palindrome) {
//                 return product % 1337
//             }

// let products = {}

// for (let i=10;i>=1;i--) {
//     for (let j=10;j>=1;j--) {
//         products[i*j] = true
//     }
// }

// console.log(products)

// // 100
// // 90
// // 80
// // 70
// // 81

// // 25
// // 20
// // 15

// 10*10 = 100
// 10*9 = 90
// 9*9 = 81
// 10 * 8 = 80
// 9 * 8 = 72
// 10*7 = 70
// 8 * 8 = 64
// 9 * 7 = 63

// x 0 0
// x 0 -1
// x -1 -1
// x 0 -2
// x -1 -2
// x 0 -3
// x -2 -2
// x -1 -3
// 0 -4

// 0 0
// ==
// 0 -1
// ==
// -1 0
// +1 -1
// ==
// -1 0
// +1 -1
// ==
// -2 +1
// +1 -1
// +1 -1





// x * x
// ===
// x * (x-1)
// ===
// (x-1) * (x-1)
// (x) * (x-2)
// ===
// (x-1) * (x-2)
// (x) * (x - 3)
// ===
// (x - 2) * (x - 2)
// (x - 1) * (x - 3)
// (x) * (x - 4)
// ====
// (x - 2) * (x - 3)
// (x - 1) * (x - 4)
// (x) * (x - 5)
// ===
// (x - 3) * (x - 3)
// (x - 2) * (x - 4)
// (x - 1) * (x - 5)
// (x) * (x - 6)


// [10,10]
// [10,9]
// [9,9]
// []

// a * a
// a * b
// b * b
// a * c
// b * c
// a * d
// c * c
// b * d

// 81
// 64
// 49
// 36
// 25
// 16
// 9
