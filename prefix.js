// https://leetcode.com/contest/weekly-contest-190/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

input1 = "i love eating burger"
input2 = "this problem is an easy problem"
input3 = "i am tired"
input4 = "i use triple pillow"
input5 = "hello from the other side"
input6 = "   hello from the tother side"
input7 = " hello from the other"
input8 = "hello from    the other side"


function prefix (sentence, prefix) {
    //to make sure it's a prefix, not just part of a word
    prefixWithSpace = " " + prefix

    if (sentence.match(prefixWithSpace)) {
        //this is just to see if the sentence starts with 1+ spaces
        let j = 0
        while (sentence[j] === " ") {
            j++ 
        }

        let words = 1
        for (let i = j; i < sentence.match(prefix).index; i++) {
            //second half of the && is to see if there's multiple spaces inbetween words
            if (sentence[i] === " " && sentence[i+1] !== " ") {
                words++
            }
        }
        return words
    } else {
        return -1
    }

}

console.log(prefix(input1, "burg"))
console.log(prefix(input2, "pro"))
console.log(prefix(input3, "you"))
console.log(prefix(input4, "pill"))
console.log(prefix(input5, "they"))
console.log(prefix(input6, "oth"))
console.log(prefix(input6, "hel"))
console.log(prefix(input7, "hel"))
console.log(prefix(input8, "oth"))