// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

let deck1 = [1]
//false
let deck2 = [1,1,2,2,2,2]
//true
let deck3 = [1,1,1]
//true
let deck4 = [1,2,3,4,4,3,2,1]
//true
let deck5 = [1,1,1,2,2,2,3,3]
//false
let deck6 = [1,1]
//true
let deck7 = [0,0,0,0,0,1,1,1,1,1]
//true

var hasGroupsSizeX = function(deck) {
    if (deck.length === 1) {
        return false
    }
    
    let hash = {}
    let array = []
    let index = 1
    
    for (let i=0; i < deck.length; i++) {
        if (hash[deck[i]]) {
            array[hash[deck[i]] - 1]++
        } else {
            hash[deck[i]] = index
            array.push(1)
            index++
        }
    }

    let nums = Object.keys(hash)
    let max
    let divides

    if (Math.min(...array) < 4) {
        if (Math.min(...array) === 1) {
            return false
        } else {
            max = 3
        }
    } else {
        max = Math.min(...array)/2
    }

    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < array.length; j++) {
            if (array[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    divides = true
    for (let j=0; j < nums.length; j++) {
        if (nums[j] % Math.min(...array) !== 0) {
            return false
        }
    }

    return true
};

// console.log(hasGroupsSizeX(deck1))
// console.log(hasGroupsSizeX(deck2))
// console.log(hasGroupsSizeX(deck3))
// console.log(hasGroupsSizeX(deck4))
// console.log(hasGroupsSizeX(deck5))
// console.log(hasGroupsSizeX(deck6))
console.log(hasGroupsSizeX(deck7))
