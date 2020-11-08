function AND(a, b) {
    return a && b ? true : false
}

// console.log(AND(false, false))
// //outputs false
// console.log(AND(false, true))
// //outputs false
// console.log(AND(true, false))
// //outputs false
// console.log(AND(true, true))
// //outputs true
// console.log(AND(0,0))
// //outputs false
// console.log(AND(0,1))
// //outputs false
// console.log(AND(1,0))
// //outputs false
// console.log(AND(1,1))
// //outputs true

function NAND(a, b) {
    return !a && !b ? false : true
}

// console.log('=====')
// console.log(NAND(false, false))
// //outputs true
// console.log(NAND(false, true))
// //outputs true
// console.log(NAND(true, false))
// //outputs true
// console.log(NAND(true, true))
// //outputs false
// console.log(NAND(0,0))
// //outputs true
// console.log(NAND(0,1))
// //outputs true
// console.log(NAND(1,0))
// //outputs true
// console.log(NAND(1,1))
//outputs false

function NAND2(a, b) {
    return !AND(a, b)
}

// console.log('=====')
// console.log(NAND2(false, false))
// //outputs true
// console.log(NAND2(false, true))
// //outputs true
// console.log(NAND2(true, false))
// //outputs true
// console.log(NAND2(true, true))
// //outputs false
// console.log(NAND2(0,0))
// //outputs true
// console.log(NAND2(0,1))
// //outputs true
// console.log(NAND2(1,0))
// //outputs true
// console.log(NAND2(1,1))
//outputs false

function OR(a, b) {
    return a || b ? true : false
}

function NOR(a, b) {
    return !OR(a, b)
}

function NOR2(a, b) {
    return !a || !b ? true : false
}

// console.log(NOR2(0,0))
// console.log(NOR2(1,0))
// console.log(NOR2(0,1))
// console.log(NOR2(1,1))

function XOR(a, b) {
    return a^b ? true : false
}

function XNOR(a, b) {
    return !XOR(a, b)
}

function XNOR2(a, b) {
    return !(a^b) ? true : false
}

// console.log(XNOR2(0,0))
// console.log(XNOR2(1,0))
// console.log(XNOR2(0,1))
// console.log(XNOR2(1,1))

console.log(AND(AND(1,1), AND(1,1)))
//outputs true
console.log(OR(AND(0,1), AND(1,1)))
//outputs true
console.log(XOR(AND(0,0), OR(1,0)))
//outputs true