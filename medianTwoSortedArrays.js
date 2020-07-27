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

nums9 = [1,3]
nums10 = [2,4]

//The median is 2.5

nums11 = []
nums12 = [1]

//median is 1

nums13 = []
nums14 = [2,3]

// median is 2.5

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

    if (arr1.length === 0) {
        if (odd) {
            return arr2[medianIndex]
        } else {
            return (arr2[medianIndex] + arr2[medianIndex + 1])/2
        }
    } else if (arr2.length === 0) {
        if (odd) {
            return arr1[medianIndex]
        } else {
            return (arr1[medianIndex] + arr1[medianIndex + 1])/2
        }
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
console.log(medianFinder(nums9,nums10))
console.log(medianFinder(nums11, nums12))
console.log(medianFinder(nums13, nums14))