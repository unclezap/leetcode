// arr = [1,2]

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i])
// }

n = 10

let array = [2]
for (let i=3; i < n; i +=2) {
    let prime =true

    for (let j=1; j < array.length; j++) {
        if (i % array[j] === 0) {
            prime = false
            break
        }
        
        if (array[j] ** 2 > i) {
            break
        }
    }
    if (prime) {
        array.push(i)
    }
}

console.log(array)

let hash = {1:5}
console.log(hash.size)



function weFoundFooBar() {
    return "Woo hoo!"
}

for (let i=0; i < arr1.length; i++) {
    if (arr1[i] === "foo") {
        for (let j=i; j <= i+3; j++) {
            if (arr2[j] === "bar") {
                return weFoundFooBar()                
            }
        }
    }
}

return "Oh no!"