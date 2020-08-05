// https://leetcode.com/problems/permutations/

let nums1 = [1,2,3]
let nums3 = [1,2,3,4,5]
let nums4 = [1,2,3,4,5,6,7,8,9,10]
let nums5 = [1,2]

var permute = function(nums) {
    let allArrays = []
    let miniArray = []
    
    var cut = function(items) {
        for (let i=0; i < items.length; i++) {
            let temp = items[i]
            miniArray.push(items.splice(i,1))
            
            if (items.length === 0) {
                allArrays.push(miniArray.slice())
            } else {
                cut(items)
            }
            items.splice(i,0,temp)
            miniArray.pop()
        }
    }
    
    cut(nums,[])
    
    return allArrays

};

var permuteFirst = function(nums) {
    let allArrays = []
    
    var cut = function(items, miniArray) {
        for (let i=0; i < items.length; i++) {
            let tempItems = items
            let tempMini = miniArray

            tempMini.push(tempItems.splice(i,1)[0])
            
            if (items.length === 0) {
                allArrays.push(miniArray.slice())
            } else {
                cut(tempItems,tempMini)
            }
        }
    }
    
    cut(nums,[])
    
    return allArrays

};

var permuteLeetcode100 = function(nums) {
    let results = [[nums.shift()]];

    while(nums.length) {
        const currentNum = nums.shift();
        let tmpResults = [];
        results.forEach(result => {
            let rIdx = 0;
            while(rIdx <= result.length) {
                const tmp = [...result];
                tmp.splice(rIdx, 0, currentNum);
                tmpResults.push(tmp);
                rIdx++;
            }
        })
        results = tmpResults;
    }

    return results;
};

console.log(permuteFirst(nums1))
// console.log(permuteFirst(nums3))
// console.log(permuteFirst(nums4))
// console.log(permuteFirst(nums5))

// console.log("=====")
// start = Date.now()
// for (u=0;u<1;u++) {
//     permute(nums1)
//     permute(nums3)
//     permute(nums4)
//     permute(nums5)
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`zeb time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<1;u++) {
//     permuteLeetcode100(nums1)
//     permuteLeetcode100(nums3)
//     permuteLeetcode100(nums4)
//     permuteLeetcode100(nums5)
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`leetcode time: ${timeElapsed} ms`)