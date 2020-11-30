// let list = [23,4,42,15,16,8]
// console.log(list)

function bubbleSort (list) {
    let repeat = false
    let limit = list.length
    let defaultNext = Number.POSITIVE_INFINITY;

    for (let i=0;i<limit;i++) {
        let thisNumber = list[i]
        let nextNumber = i + 1 < limit ? list[i+1] : defaultNext

        if (nextNumber < thisNumber) {
            list[i] = nextNumber
            list[i+1] = thisNumber
            repeat = true
        }
    }

    if (repeat) {
        return bubbleSort(list)
    } else {
        return list
    }
}

function mergeSort (list) {
    if (list.length <= 1) {
        return list
    }

    let middle = list.length/2
    let left = list.slice(0, middle)
    let right = list.slice(middle, list.length)

    return merge(mergeSort(left), mergeSort(right))    
}

function merge (left, right) {
    let result = []

    while (left.length || right.length) {
        if (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        } else if (left.length) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result
}

let arrayLength = [2,3,4,6,8,12,16,32,64,128]

for (let x=0;x<arrayLength.length;x++) {

    //creates a reference array of increasing digits
    let numsOrig = []
    for (let i=0; i<arrayLength[x];i++) {
        numsOrig.push(i)
    }
    
    let listOfLists = []
    
    //creates 100,000 randomized test arrays to sort
    let testArrays = 100000
    for (let i=0; i<testArrays; i++) {
        let list = []
        let nums = [...numsOrig]
        
        while (nums.length > 0) {
            let rand = Math.floor(nums.length*Math.random())
            list.push(nums[rand])
            nums.splice(rand,1)
        }
    
        listOfLists.push(list)
    }
    
    console.log("=====")
    start = Date.now()
    for (u=0;u<testArrays;u++) {
        let testList = listOfLists[u]
        mergeSort(testList)
    }
    end = Date.now()
    timeElapsedMerge = end - start
    console.log(`merge time for array of length ${arrayLength[x]}: ${timeElapsedMerge} ms`)
    
    console.log("=====")
    start = Date.now()
    for (u=0;u<testArrays;u++) {
        let testList = listOfLists[u]
        bubbleSort(testList)
    }
    end = Date.now()
    timeElapsedBubble = end - start
    console.log(`bubble time for array of length ${arrayLength[x]}: ${timeElapsedBubble} ms`)

    console.log(`RATIO: ${timeElapsedMerge/timeElapsedBubble}`)
}
//adsfasfa

// console.log("=====")
// start = Date.now()
// for (u=0;u<1000000;u++) {
//     let list = [23,4,42,15,16,8]
//     mergeSort(list)
//     list = [ 23, 4, 42, 15, 16, 8 ]
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`merge time: ${timeElapsed} ms`)







// console.log("=====")
// start = Date.now()
// for (u=0;u<1000000;u++) {
//     let list = [23,4,42,15,16,8]
//     bubbleSort(list)
//     list = [ 23, 4, 42, 15, 16, 8 ]
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`bubble time: ${timeElapsed} ms`)
