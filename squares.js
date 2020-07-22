var numSquares = function(n) {
    let i=1
    squares = []
    
    while (i**2 <= n) {
        squares.unshift(i**2)
        i++
    }

    if (squares[squares.length - 1] === n) {
        return 1
    }
    if (n < 4) {
        return n
    }

    let sum
    let nums = []
    let max = 2
    let base = 1

    console.log(squares)
    for (let i=0; i < squares.length; i++) {
        nums.push(squares[i])
        sum = nums.reduce((total=0, num) => {return total + num})
        
        if (nums.length > max) {
            // console.log("hit", nums)
            nums = []
            sum = 0
            base++
            i = base
            if (base >= squares.length -1) {
                // console.log("d")
                base = 0
                i = 0
                max++
            }
        }

        if (sum === n) {
            // console.log('======', n, '=========')
            return nums.length
        } else if (sum < n) {
            i--
        } else if (sum > n) {
            nums.pop()
        }
        console.log(nums)
    }
};

// console.log(numSquares(12), "twelve")
// console.log(numSquares(13))
// console.log(numSquares(16))
// 1 = 1
// console.log(numSquares(1))
// 2 = 1 + 1
// console.log(numSquares(2))
// 3 = 1 + 1 + 1
// console.log(numSquares(3))
// 4 = 4
// console.log(numSquares(4))
// 5 = 4 + 1
// console.log(numSquares(5))
// 6 = 4 + 1 + 1
// console.log(numSquares(6))
// 7 = 4 + 1 + 1 + 1
// console.log(numSquares(7))
// 8 = 4 + 4
// console.log(numSquares(8))
// 9 = 9
// console.log(numSquares(9))
// 10 = 9 + 1
// console.log(numSquares(10))
// 11 = 9 + 1 + 1
// console.log(numSquares(11), "ele")
// 12 = 4 + 4 + 4
// 13 = 9 + 4
// 14 = 9 + 4 + 1
// 15 = 9 + 4 + 1 + 1
// 16 = 16
// console.log(numSquares(16))
// 17 = 16 + 1
// console.log(numSquares(17))
// 18 = 9 + 9
console.log(numSquares(18))
// 19 = 16 + 1 + 1 + 1
// 20 = 16 + 4
// 21 = 16 + 4 + 1
// 22 = 9 + 9 + 4
// console.log(numSquares(22))
