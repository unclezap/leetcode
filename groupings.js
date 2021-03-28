function groupTrips (arr) {
    let returnArr = []
    let groupArr = [arr[0]]

    for (let i=1;i<arr.length;i++) {
        while (arr[i] === groupArr[0]) {
            groupArr.push(arr[i])
            i++
        }
        if (groupArr.length > 2) {
            if (returnArr.length === 0 || groupArr[0] !== returnArr[returnArr.length - 1][0]) {
                returnArr.push(groupArr)
            } else {
                returnArr[returnArr.length - 1].push(...groupArr)
            }
        }
        groupArr = [arr[i]]
    }
    return returnArr
}

console.log(groupTrips([1,4,4,6,3,3,3,2,5,5,5,3,1]))
console.log(groupTrips([1,4,4,6,3,3,3,2,5,5,5,5]))
console.log(groupTrips([5,5,5,5]))
console.log(groupTrips([5,5]))
console.log(groupTrips([5]))
console.log(groupTrips([]))
console.log(groupTrips([2,2,2,1,2,2]))
console.log(groupTrips([2,2,2,1,2,2,2]))


// if (returnArr.length === 0 || groupArr[0] !== returnArr[returnArr.length - 1][0]) {
//     returnArr.push(groupArr)
// } else {
//     returnArr[returnArr.length - 1].push(...groupArr)
// }