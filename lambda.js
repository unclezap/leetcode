// console.log((x => x))
// let y = 33
// let z = 5

// console.log(function such(x){return x}(z))
// console.log((x => y)(z))
// // // console.log(such(y))
// // console.log(such()(z))

// console.log((
//     function(a, b)
//     {
//        return a + b;
//     }
//  )(10, 20))

//  let b = 3
//  const fn = ((a,b) => b)(1,5)
//  console.log('fn', fn)

//  console.log((x => (y => x + y)(1))(5,))

// const fir = (y => y)
// const sec = (x => fir(x))
// console.log(sec(fir)(2))

// console.log((x => y => x + y)(2)(3))
// console.log((x => x)(y => 5)())

let True = (x => y => x)
let False = (x => y => y)
// // console.log(True(true)(false))
// // console.log(False(true)(false))
let If = (x => y => z => x(y)(z))
// console.log(If(True)(false)("oops..."))
// console.log(If(False)("oops")("FALSE"))

let calculate = f => f(x => x + 1)(0)
let zero = f => x => x
let one = f => x => f(x)
let two = f => x => f(f(x))
let three = f => x => f(f(f(x)))
// console.log((f => f(x => x+1))(0))
// console.log('hi',zero(1))
// console.log(calculate(zero))
// console.log(calculate(one))
// console.log(calculate(two))
// console.log(calculate(three))

let Omega = x => x(x)
// console.log(Omega(Omega))

let Y = f => (x => x(x))(x => f(y => x(x)(y)))

let fibonacci = f => n => n <= 1 ? n : f(n - 1) + f(n - 2)
let yFib = Y(fibonacci)
console.log(yFib(9))