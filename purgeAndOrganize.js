// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
array1 = [1,2,3,4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
array2 = [1, 4, 4, 4, 4, 4, 3, 2, 1, 2]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
array3 = [6, 7, 3, 2, 1]

function uniqueSort (array) {
    returnArray = []

    allThings = new Set()

    for (let i=0; i < array.length; i++) {
        if (!allThings.has(array[i])) {
            allThings.add(array[i])
            returnArray.push(array[i])
        }
    }
    return returnArray

}

function uniqueSortZeb (array) {
    return uniqueElements = [...new Set(array)]
}

console.log(uniqueSortZeb(array1))
console.log(uniqueSortZeb(array2))
console.log(uniqueSortZeb(array3))
