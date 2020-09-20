//https://leetcode.com/problems/merge-sorted-array/



// var merge = function(nums1, m, nums2, n) {
//     let sort = []
    
//     for (let i=0; i < m + n; i++) {
//         console.log(i)
//         if (i % 2 === 0) {
//             sort.push(nums1.shift())
//         } else {
//             sort.push(nums2.shift())
//         }
//     }
//     return sort 
// };


let x = [1,"B",3,4,5]
console.log(x.slice(0,3))
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

var merge = function(nums1, m, nums2, n) {
    let j
    for (let i= m + n; i >0; i--) {
        if (Math.max(nums1.slice(0,m)) >= Math.max(nums2.slice(0,n))) {
            let x = Math.max(nums1.slice(0,m))
            nums[i] = x
            m--
            j=nums1.indexOf(x)
            nums1[j] = Math.min(nums1) - 1
        } else {
            let y = Math.max(nums2.slice(0,n))
            nums1[i] = y
            n--
            j=nums2.indexOf(y)
            nums2[j] = Math.min(nums2) - 1
        }
    }
    
    return nums1
};