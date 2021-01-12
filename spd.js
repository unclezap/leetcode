let input1 = [1,2,3,4,5]
let input2 = [1,2,3,4,5,6,7,8,9,10]

function speedDemon0(arr) {
    let sum = 0

    return sum
}

function speedDemon1(arr) {
    let sum = 0

    for (let i=0;i<arr.length-1;i++) {
        sum += arr[i]
    }

    return sum
}

function speedDemon2(arr) {
    let sum = 0

    for (let i=0;i<arr.length-1;i++) {
        for (let j=0;j<arr.length-1;j++) {
            sum += arr[i] + arr[j]
        }
    }

    return sum
}

function speedDemon3(arr) {
    let sum = 0

    for (let i=0;i<arr.length-1;i++) {
        for (let j=0;j<arr.length-1;j++) {
            for(let k=0;k<arr.length-1;k++) {
                sum += arr[i] + arr[j] + arr[k]
            }
        }
    }

    return sum
}

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon0(input1)
}
end = Date.now()
timeElapsed1 = end - start
console.log(`input1 time: ${timeElapsed1} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon0(input2)
}
end = Date.now()
timeElapsed2 = end - start
console.log(`input2 time: ${timeElapsed2} ms`)
console.log('+++++')
console.log(`speedDemon0 input2 to input1 ratio: ${timeElapsed2/timeElapsed1}`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon1(input1)
}
end = Date.now()
timeElapsed1 = end - start
console.log(`input1 time: ${timeElapsed1} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon1(input2)
}
end = Date.now()
timeElapsed2 = end - start
console.log(`input2 time: ${timeElapsed2} ms`)
console.log('+++++')
console.log(`speedDemon1 input2 to input1 ratio: ${timeElapsed2/timeElapsed1}`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon2(input1)
}
end = Date.now()
timeElapsed1 = end - start
console.log(`input1 time: ${timeElapsed1} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon2(input2)
}
end = Date.now()
timeElapsed2 = end - start
console.log(`input2 time: ${timeElapsed2} ms`)
console.log('+++++')
console.log(`speedDemon2 input2 to input1 ratio: ${timeElapsed2/timeElapsed1}`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon3(input1)
}
end = Date.now()
timeElapsed1 = end - start
console.log(`input1 time: ${timeElapsed1} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    speedDemon3(input2)
}
end = Date.now()
timeElapsed2 = end - start
console.log(`input2 time: ${timeElapsed2} ms`)
console.log('+++++')
console.log(`speedDemon3 input2 to input1 ratio: ${timeElapsed2/timeElapsed1}`)

function slowDemon(arr) {
    let sum = 0

    for (let i=0; i<arr.length;i++) {
        for (let )
    }
}