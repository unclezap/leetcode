let array1 = [0,1,2,3,4,5,6]
let array2 = ['A','B','C','D','E','F','G']

console.log("slice 2,4", array1.slice(2,4))
console.log("slice 0,5", array1.slice(0,5))

console.log("splice 2,4", array1.splice(2,4, "two", "three", "four", "five"))
console.log("look at the array - it goes for 4 rather than ending at index 4 ->", array1)

console.log(array2.splice(6, 1, "H", "I"))
console.log("look at the array - the G is gone and now there's an H and an I",array2)