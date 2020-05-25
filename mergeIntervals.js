// https://leetcode.com/problems/merge-intervals/

let input = [[1,3],[2,6],[8,10],[15,18]]
let input2 = [[1,4],[4,5]]

function mergeIntervals (arrays) {
    
    arrays = arrays.flat()
    let filtered_points = [arrays[0]]
    let i = 1
    let j

    while (i < arrays.length - 1) {
        j = i + 1

        while (arrays[i] >= arrays[j]) {
            j++
        }

        filtered_points.push(arrays[j])

        i =  j
    }

    let k = 0
    return_arrays = []

    for (let k=0; k < filtered_points.length; k += 2) {
        return_arrays.push([filtered_points[k], filtered_points[k+1]])
    }

    return return_arrays
}

console.log(mergeIntervals(input))
console.log(mergeIntervals(input2))