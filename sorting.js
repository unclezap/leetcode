const list = [23,4,42,15,16,8]

function bubbleSort (list) {
    let repeat = false
    let limit = list.length
    let defaultNext = Number.POSITIVE_INFINITY;

    for (let i=0;i<limit;i++) {
        let thisNumber = list[i]
        let nextNumber = i + i < limit ? list[i+1] : defaultNext

        if (nextNumber < thisNumber) {
            list[i] = nextNumber
            list[i+1] = thisNumber
            repeat = true
        }
    }

    if (repeat) bubbleSort(list)
}

// bubbleSort(list)
// console.log(list)

function mergeSort () {
    if (list.length <= 1) {
        return list
    }

    let middle = list.length/2
    let left = list.slice(0, middle)
    let right = list.slice(middle, list.length)

    return merge(mergeSort(left), mergeSort(right))

    function merge (left, right) {
        let result = []

        while (left.length || right.length) {
            if (left.length && right.length) {
                if (left[0] < right[0]) {
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
}

mergeSort(list)
console.log(list)