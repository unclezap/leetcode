let words1 = ["cat","bt","hat","tree"]
let chars1 = "atach"
let words2 = ["caaat","bt","hat","tree"]
let chars2 = "atach"
let words3 = ["hello","world","leetcode"]
let chars3 = "welldonehoneyr"

var countCharactersSlower = function(words, chars) {

    let isIn
    let sum = 0
    let charsHash = {}

    for (let i=0; i < chars.length; i++) {
        if (charsHash[chars[i]]) {
            charsHash[chars[i]]++
        } else {
            charsHash[chars[i]] = 1
        }
    }

    for (let i = 0; i < words.length; i++) {
        isIn = true
        wordsHash = {}
        for (let j=0; j < words[i].length; j++) {
            if (wordsHash[words[i][j]]) {
                wordsHash[words[i][j]]++
                if (wordsHash[words[i][j]] > charsHash[words[i][j]]) {
                    isIn = false
                    break
                }
            } else {
                if (!charsHash[words[i][j]]) {
                    isIn = false
                    break
                } else {
                    wordsHash[words[i][j]] = 1
                }
            }
        }
        if (isIn) {
            sum += words[i].length
        }
    }

    return sum
};

var countCharacters = function(words, chars) {

    let isIn
    let sum = 0
    let charsHash = {}

    for (let i=0; i < chars.length; i++) {
        if (charsHash[chars[i]]) {
            charsHash[chars[i]]++
        } else {
            charsHash[chars[i]] = 1
        }
    }
    
    for (let i = 0; i < words.length; i++) {
        isIn = true
        
        for (let j=0; j < words[i].length; j++) {
            if (!charsHash[words[i][j]]) {
                isIn = false
                break
            }
        }

        if (isIn) {
            wordHash = {}
            for (let z = 0; z < words[i].length; z++) {
                if (wordHash[words[i][z]]) {
                    wordHash[words[i][z]]++
                    if (wordHash[words[i][z]] > charsHash[words[i][z]]) {
                        isIn = false
                        break
                    }
                } else {
                    wordHash[words[i][z]] = 1
                }
            }
            
            if (isIn) {
                sum += words[i].length
            }
        }    
    }

    return sum
};


console.log(countCharacters(words1, chars1))
console.log(countCharacters(words2, chars2))
console.log(countCharacters(words3, chars3))

console.log(countCharactersSlower(words1, chars1))
console.log(countCharactersSlower(words2, chars2))
console.log(countCharactersSlower(words3, chars3))

// let test1 = {a:4, b:5}
// let test2 = {a:5, b:6}
// for (var k in test1) {
//     console.log(k)
// }

var countCharactersSlowerFaster = function(words, chars) {

    let isIn
    let sum = 0
    let charsHash = {}

    for (let i=0; i < chars.length; i++) {
        if (charsHash[chars[i]]) {
            charsHash[chars[i]]++
        } else {
            charsHash[chars[i]] = 1
        }
    }

    for (let i = 0; i < words.length; i++) {
        isIn = true
        wordsHash = {}
        for (let j=0; j < words[i].length; j++) {
            if (!charsHash[words[i][j]]) {
                isIn = false
                break
            } else {
                if (wordsHash[words[i][j]]) {
                    wordsHash[words[i][j]]++
                    if (wordsHash[words[i][j]] > charsHash[words[i][j]]) {
                        isIn = false
                        break
                    }
                } else {
                    wordsHash[words[i][j]] = 1
                }
            }
        }
        if (isIn) {
            sum += words[i].length
        }
    }

    return sum
};

console.log(countCharactersSlowerFaster(words1, chars1))
console.log(countCharactersSlowerFaster(words2, chars2))
console.log(countCharactersSlowerFaster(words3, chars3))