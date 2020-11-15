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
    return !(a && b) ? true : false
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
    return !(a || b) ? true : false
}

// console.log(NOR2(0,0))
// console.log(NOR2(1,0))
// console.log(NOR2(0,1))
// console.log(NOR2(1,1))
// console.log("ddddddd")

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

// console.log(AND(AND(1,1), AND(1,1)))
// //outputs true
// console.log(OR(AND(0,1), AND(1,1)))
// //outputs true
// console.log(XOR(AND(0,0), OR(1,0)))
// //outputs true

function ANDfromNOR(a,b) {
    return NOR(NOR(a,a), NOR(b,b))
}

function NANDfromNOR(a,b) {
    return NOR(
        NOR(NOR(a,a), NOR(b,b)),
        NOR(NOR(a,a), NOR(b,b))
    )
}

function ORfromNOR(a,b) {
    return NOR((NOR(a,b), NOR(a,b)))
}

function XORfromNOR(a,b) {
    return NOR(
        NOR(NOR(a,a), NOR(b,b)),
        NOR(a,b)
    )
}

function XNORfromNOR(a,b) {
    return NOR(
        NOR(a, NOR(a,b)),
        NOR(b, NOR(a,b))
    )
}


function NORfromNOR(a,b) {
    return NOR(
        NOR((NOR(a,b), NOR(a,b))),
        NOR((NOR(a,b), NOR(a,b)))
    )
}

// console.log(NORfromNOR(0,0))
// console.log(NORfromNOR(0,1))
// console.log(NORfromNOR(1,0))
// console.log(NORfromNOR(1,1))

function ANDfromNAND(a,b) {
    return NAND(NAND(a,b), NAND(a,b))
}

function NANDfromNAND(a,b) {
    return NAND(NAND(a,a), NAND(b,b))
}

// console.log(NANDfromNAND(0,0))
// console.log(NANDfromNAND(0,1))
// console.log(NANDfromNAND(1,0))
// console.log(NANDfromNAND(1,1))

function NANDfromNOR(a,b) {
    return NOR(
        NOR(NOR(a,a), NOR(b,b)),
        NOR(NOR(a,a), NOR(b,b))
    )
}

function NANDfromNANDfromNAND(a,b) {
    return NANDfromNAND(NANDfromNAND(a,a), NANDfromNAND(b,b))
}

function NANDfromNORfromNAND(a,b) {
    return NORfromNAND(
        NORfromNAND(NORfromNAND(a,a), NORfromNAND(b,b)),
        NORfromNAND(NORfromNAND(a,a), NORfromNAND(b,b))
    )
}

console.log(NANDfromNORfromNAND(0,0))
console.log(NANDfromNORfromNAND(0,1))
console.log(NANDfromNORfromNAND(1,0))
console.log(NANDfromNORfromNAND(1,1))


function ORfromNAND(a,b) {
    return NAND(NAND(a,a), NAND(b,b))
}

function NORfromNAND(a,b) {
    return NAND(
        NAND(NAND(a,a),NAND(b,b)),
        NAND(NAND(a,a),NAND(b,b))        
    )
}

function XORfromNAND(a,b) {
    return NAND(
        NAND(a, NAND(a,b)),
        NAND(b, NAND(a,b))
    )
}

function XNORfromNAND(a,b) {
    return NAND(
        NAND(NAND(a,a), NAND(b,b)),
        NAND(a,b)
    )
}

// console.log(NAND(0,0))
// console.log(NAND(0,1))
// console.log(NAND(1,0))
// console.log(NAND(1,1))
// console.log('NOR below:')
// console.log(NOR(0,0))
// console.log(NOR(0,1))
// console.log(NOR(1,0))
// console.log(NOR(1,1))
// console.log('---')

// console.log(NAND(0,0))
// console.log(NORfromNAND(0,0))
// console.log(NORfromNAND(0,1))
// console.log(NORfromNAND(1,0))
// console.log(NORfromNAND(1,1))

// console.log(XNORfromNAND(0,0))
// console.log(XNORfromNAND(0,1))
// console.log(XNORfromNAND(1,0))
// console.log(XNORfromNAND(1,1))

// console.log(XORfromNAND(0,0))
// console.log(XORfromNAND(0,1))
// console.log(XORfromNAND(1,0))
// console.log(XORfromNAND(1,1))

