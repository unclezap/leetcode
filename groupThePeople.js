// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

var groupThePeople = function(groupSizes) {
    let returnArray = []
    let hash = {}
    let index = -1
    
    for (let i=0; i < groupSizes.length; i++) {
        if (!hash[groupSizes[i]] && hash[groupSizes[i]] !== 0) {
            index++
            hash[groupSizes[i]] = index
            returnArray.push([i])
        } else {
            if (returnArray[hash[groupSizes[i]]].length >= groupSizes[i]) {
                index++
                hash[groupSizes[i]] = index
                returnArray.push([i])
            } else {
                returnArray[hash[groupSizes[i]]].push(i)
            }
        }
    }
    
    return returnArray
};

var groupThePeopleLeetcode100 = function(groupSizes) {
    
    const groups = {};
    
    for (let i = 0; i < groupSizes.length; ++i) {
        
        const size = groupSizes[i];
        const group = groups[size] = groups[size] || [[]];
        const last = group[group.length - 1];
        
        if (last.length < size) {
            last.push(i);
        } else {
            group.push([i]);
        }
    }
    
    return Object.values(groups).flat();
};

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    groupThePeople([3,3,3,3,3,1,3])
    groupThePeople([2,1,3,3,3,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000000;u++) {
    groupThePeople([3,3,3,3,3,1,3])
    groupThePeople([2,1,3,3,3,2])
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)