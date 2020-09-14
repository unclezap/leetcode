// console.log(100 << 3)
// console.log(256 << 3)
// console.log(100 * 8)
// console.log(256 * 8)
// // console.log(~01 )
// // console.log( 3 + 4)
// console.log(5739213 << 6)
// console.log(10101111001001011001101 << 6)
// console.log(5739213 * 64)
// console.log(~5)

// console.log((29 - 29%8)/8)
// console.log(29 >> 3)


console.log(25 ^ 4)
console.log("++++")
function xOr (x, y) {
    
    let i=0
    while (x > 2**i || y > 2**i) {
        i++
    }

    let sum = 0
    let xMod
    let yMod

    while (i >= 0) {
        if (x >= 2**i) {
            xMod = 2**i
            x -= 2**i
        } else {
            xMod = 0
        }
        
        if (y >= 2**i) {
            yMod = 2**i
            y -= 2**i
        } else {
            yMod = 0
        }

        if (xMod !== yMod) {
            sum += 2**i
        }
        i--
    }
    return sum
}

    console.log(xOr(25,4), 25^4)
    console.log(xOr(25,3), 25^3)
    console.log(xOr(29,3), 29^3)
    console.log(xOr(10569, 1235), 10569 ^ 1235)

    // while (i > 0) {
    //     if (x > 2**i && x % 2**i !== 0) {
    //         console.log("x", i, "hi")
    //         xMod = 2**i
    //     } else {
    //         xMod = 0
    //     }
    //     if (y > 2**i && y % 2**i) {
    //         console.log("y", i, "hi")
    //         yMod = 2**i
    //     } else {
    //         yMod = 0
    //     }
    
    //     if (xMod !== yMod) {
    //         sum += Math.max(xMod, yMod)
    //     }
    
    //     x -= xMod
    //     y -= yMod
    //     i--
    // }
    
    // return sum


    console.log(xOr(25,4), 25^4)
    console.log(xOr(25,3), 25^3)
    console.log(xOr(29,3), 29^3)
    console.log(xOr(10569, 1235), 10569 ^ 1235)


console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    25 ^ 4
    25 ^ 3
    29 ^ 3
    10569 ^ 1235
}
end = Date.now()
timeElapsed = end - start
console.log(`bitwise time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    xOr(25,4)
    xOr(25,3)
    xOr(29,3)
    xOr(10569, 1235)

}
end = Date.now()
timeElapsed = end - start
console.log(`addition time: ${timeElapsed} ms`)