//https://leetcode.com/problems/concatenated-words/

input = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

function concatenator (array) {
    let hasOtherWords = []
    for(let i=0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[j].includes(array[i])) {
                hasOtherWords.push(array[j])
            }
        }
    }

    let finalWords = []
    let inOtherWords

    for (let i=0; i < hasOtherWords.length; i++) {
        inOtherWords = false
        for (let j=i+1; j < hasOtherWords.length; j++) {
            if (hasOtherWords[j].includes(hasOtherWords[i])) {
                inOtherWords = true
                break
            }
        }
        if (!inOtherWords) {
            finalWords.push(hasOtherWords[i])
        }
    }

    return finalWords
}

console.log(concatenator(input))