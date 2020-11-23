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

bubbleSort(list)
console.log(list)