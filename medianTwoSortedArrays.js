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

nums15 = [1,2]
nums16 = [-1,3]

//median is 1.5

nums17 = [3, 4]
nums18 = []

function medianFinderFixed(arr1, arr2) {
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

    let fullArray = []
    for (let i=0; i < medianIndex + 2; i++) {

        if (arr1[0] <= arr2[0]) {
            fullArray.push(arr1.shift())
        }
        if (arr1[0] >= arr2[0]) {
            fullArray.push(arr2.shift())
        }
        if (arr1.length === 0) {
            fullArray.push(arr2.shift())
        }
        if (arr2.length === 0) {
            fullArray.push(arr1.shift())
        }
    }

    if (odd) {
        return fullArray[medianIndex]
    } else {
        return (fullArray[medianIndex] + fullArray[medianIndex + 1])/2
    }
}

// function medianFinder(arr1, arr2) {
//     let totalNumbers = arr1.length + arr2.length
//     let medianIndex
//     let odd

//     if (totalNumbers % 2 === 0) {
//         medianIndex = totalNumbers/2 - 1
//         odd = false
//     } else {
//         medianIndex = totalNumbers/2 - 0.5
//         odd = true
//     }

//     if (arr1.length === 0) {
//         if (odd) {
//             return arr2[medianIndex]
//         } else {
//             return (arr2[medianIndex] + arr2[medianIndex + 1])/2
//         }
//     } else if (arr2.length === 0) {
//         if (odd) {
//             return arr1[medianIndex]
//         } else {
//             return (arr1[medianIndex] + arr1[medianIndex + 1])/2
//         }
//     }

//     let arr1Count = 0
//     let arr2Count = 0

//     for (let i=0; i < medianIndex; i++) {
//         if (arr1[arr1Count] < arr2[arr2Count]) {
//             arr1Count++
//         } else if (arr1[arr2Count] > arr2[arr2Count]) {
//             arr2Count++
//         } else {
//             arr1Count++
//             arr2Count++
//             i++
//         }
//     }

//     if (odd) {
//         if (arr1[arr1Count] > arr2[arr2Count]) {
//                 console.log("hi1")
//                 return arr2[arr2Count]
//             } else {
//                 console.log("hi2")
//                 return arr1[arr1Count]
//             }
//     } else {
//         console.log("hi3")
//         return (arr1[arr1Count] + arr2[arr2Count])/2
//     }
// }

function findMedianSortedArraysLeetcode100(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const totalLen = len1 + len2;
    let idx1 = 0;
    let idx2 = 0;
    let cur;
    let last;
  
    while (idx1 + idx2 <= totalLen / 2) {
      if (cur !== undefined) {
        last = cur;
      }
  
      let el1 = nums1[idx1];
      let el2 = nums2[idx2];
  
      if (idx1 >= len1) {
        cur = el2;
        idx2++;
      } else if (idx2 >= len2) {
        cur = el1;
        idx1++;
      } else if (el1 < el2) {
        cur = el1;
        idx1++;
      } else {
        idx2++;
        cur = el2;
      }
    }
  
  
    return totalLen % 2 === 0 ? (last + cur) / 2 : cur;
  };

// console.log(medianFinder(nums1, nums2))
// console.log(medianFinder(nums3, nums4))
// console.log(medianFinder(nums5,nums6))
// console.log(medianFinder(nums7, nums8))
// console.log(medianFinder(nums9,nums10))
// console.log(medianFinder(nums11, nums12))
// console.log(medianFinder(nums13, nums14))
// console.log(medianFinder(nums15, nums16))

// console.log(medianFinderFixed(nums1, nums2))
// console.log(medianFinderFixed(nums3, nums4))
// console.log(medianFinderFixed(nums5,nums6))
// console.log(medianFinderFixed(nums7, nums8))
// console.log(medianFinderFixed(nums9,nums10))
// console.log(medianFinderFixed(nums11, nums12))
// console.log(medianFinderFixed(nums13, nums14))
// console.log(medianFinderFixed(nums15, nums16))
// console.log(medianFinderFixed(nums17, nums18))

// let array = [1,2,3]
// let newArray = []

// newArray.push(array.shift())
// console.log(array, "array")
// console.log(newArray, "newArray")

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    medianFinderFixed(nums1, nums2)
    medianFinderFixed(nums3, nums4)
    medianFinderFixed(nums5,nums6)
    medianFinderFixed(nums7, nums8)
    medianFinderFixed(nums9,nums10)
    medianFinderFixed(nums11, nums12)
    medianFinderFixed(nums13, nums14)
    medianFinderFixed(nums15, nums16)
    medianFinderFixed(nums17, nums18)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    findMedianSortedArraysLeetcode100(nums1, nums2)
    findMedianSortedArraysLeetcode100(nums3, nums4)
    findMedianSortedArraysLeetcode100(nums5,nums6)
    findMedianSortedArraysLeetcode100(nums7, nums8)
    findMedianSortedArraysLeetcode100(nums9,nums10)
    findMedianSortedArraysLeetcode100(nums11, nums12)
    findMedianSortedArraysLeetcode100(nums13, nums14)
    findMedianSortedArraysLeetcode100(nums15, nums16)
    findMedianSortedArraysLeetcode100(nums17, nums18)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//leetcode better by ~600 ms