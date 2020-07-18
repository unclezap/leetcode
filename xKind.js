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
let deck8 = [0,0,0,0,0,1,1,2,3,4]
//false

var mapHasGroupsSizeX2 = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let map = new Map()

    deck.forEach((number) => {
        let times = map.get(number)
        map.set(number, times ? times+1: 1) 
    })

    let max
    let divides

    if (Math.min(...map.values()) < 4) {
        if (Math.min(...map.values()) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...map.values())/2
    }

    for (let i=2; i <= max; i++) {
        divides = true
        map.forEach((value) => {
            if (value % i !== 0 ) {
                divides = false
            }
        })
        if (divides) {
            return true
        }
    }

    divides = true
    map.forEach(value => {
        if (value % Math.min(...map.values()) !== 0) {
            divides = false
        }
    })

    return divides
}

var hashHasGroupsSizeX2 = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let hash = {}
    deck.forEach((number) => {
        if (hash[number]) {
            hash[number]++
        } else {
            hash[number] = 1
        }
    })

    let max
    let divides

    if (Math.min(...Object.values(hash)) < 4) {
        if (Math.min(...Object.values(hash)) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...Object.values(hash))/2
    }


    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < Object.values(hash).length; j++) {
            if (Object.values(hash)[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    for (let j=0; j < Object.values(hash).length; j++) {
        if (Object.values(hash)[j] % Math.min(...Object.values(hash)) !== 0) {
            return false
        }
    }

    return true
}

var hashHasGroupsSizeX2WithVariable = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let hash = {}
    deck.forEach((number) => {
        if (hash[number]) {
            hash[number]++
        } else {
            hash[number] = 1
        }
    })

    let max
    let divides
    let values = Object.values(hash)

    if (Math.min(...values) < 4) {
        if (Math.min(...values) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...values)/2
    }


    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < values.length; j++) {
            if (values[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    for (let j=0; j < Object.values(hash).length; j++) {
        if (values[j] % Math.min(...values) !== 0) {
            return false
        }
    }

    return true
}



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
    for (let j=0; j < array.length; j++) {
        if (array[j] % Math.min(...array) !== 0) {
            return false
        }
    }

    return true
};

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hasGroupsSizeX(deck1)
hasGroupsSizeX(deck2)
hasGroupsSizeX(deck3)
hasGroupsSizeX(deck4)
hasGroupsSizeX(deck5)
hasGroupsSizeX(deck6)
hasGroupsSizeX(deck7)
hasGroupsSizeX(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`first algo time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
mapHasGroupsSizeX2(deck1)
mapHasGroupsSizeX2(deck2)
mapHasGroupsSizeX2(deck3)
mapHasGroupsSizeX2(deck4)
mapHasGroupsSizeX2(deck5)
mapHasGroupsSizeX2(deck6)
mapHasGroupsSizeX2(deck7)
mapHasGroupsSizeX2(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`hashmap time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hashHasGroupsSizeX2(deck1)
hashHasGroupsSizeX2(deck2)
hashHasGroupsSizeX2(deck3)
hashHasGroupsSizeX2(deck4)
hashHasGroupsSizeX2(deck5)
hashHasGroupsSizeX2(deck6)
hashHasGroupsSizeX2(deck7)
hashHasGroupsSizeX2(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`hash time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hashHasGroupsSizeX2WithVariable(deck1)
hashHasGroupsSizeX2WithVariable(deck2)
hashHasGroupsSizeX2WithVariable(deck3)
hashHasGroupsSizeX2WithVariable(deck4)
hashHasGroupsSizeX2WithVariable(deck5)
hashHasGroupsSizeX2WithVariable(deck6)
hashHasGroupsSizeX2WithVariable(deck7)
hashHasGroupsSizeX2WithVariable(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`hash with variable time: ${timeElapsed} ms`)