// https://leetcode.com/problems/median-of-two-sorted-arrays/

nums1 = [1, 3]
nums2 = [2]

// The median is 2.0
// Example 2:

nums3 = [1, 2]
nums4 = [3, 4]

// The median is (2 + 3)/2 = 2.5

nums5 = [1, 2]
nums6 = [2, 3]

// The median is 2

nums7 = [1,2,3]
nums8 = [1,3,5,7]

//The median is 3

function medianFinder(arr1, arr2) {
    let totalNumbers = arr1.length + arr2.length
    let medianIndex
    let odd
    if (totalNumbers % 2 === 0) {
        medianIndex = totalNumbers/2 - 1
        odd = false
    } else {
        medianIndex = totalNumbers/2 - 0.5
        odd = true
    }

    let arr1Count = 0
    let arr2Count = 0
    for (let i=0; i < medianIndex; i++) {
        if (arr1[arr1Count] < arr2[arr2Count]) {
            arr1Count++
        } else if (arr1[arr2Count] > arr2[arr2Count]) {
            arr2Count++
        } else {
            arr1Count++
            arr2Count++
            i++
        }
    }

    if (odd) {
        if (arr1[arr1Count] > arr2[arr2Count]) {
                return arr2[arr2Count]
            } else {
                return arr1[arr1Count]
            }
    } else {
        return (arr1[arr1Count] + arr2[arr2Count])/2
    }

}

console.log(medianFinder(nums1, nums2))
console.log(medianFinder(nums3, nums4))
console.log(medianFinder(nums5,nums6))
console.log(medianFinder(nums7, nums8))
