let array = ["c","c","1","b","z","b","a",'a']
let hash = {}
let count = 0

for (let i=0; i < array.length; i++) {
    if (!hash[array[i]]) {
        hash[array[i]] = true
        count++
    }
}
console.log(hash)
console.log("The number of unique values in the array is:", count)


// let hash = {}

// for (let i=0; i < array.length; i++) {
//     if (!hash[array[i]]) {
//         hash[array[i]] = true
//     }
// }

// console.log(hash)

// for (let i=0; i < array.length; i++) {
//     if (!map.has(array[i])) {
//         map.set(array[i], 1);
//     } else {
//         map.set(array[i], map.get(array[i]) + 1);
//     }
// }

// console.log(map)

// for (const [key, value] of map.entries()) {
//     console.log(key, value);
// }

// console.log("map size:", map.size)
