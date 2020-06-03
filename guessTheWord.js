var findSecretWord = function(wordlist, master) {
    hash = {}
    // console.log(wordlist[0])
    for (let j=0; j < wordlist.length; j++) {
        for (let i=0; i < wordlist[j].length; i++) {
            if (hash[wordlist[j][i]]) {
                // console.log(true)
                hash[wordlist[j][i]]++
            } else {
                // console.log(false)
                hash[wordlist[j][i]] = 1
            }
        }
    }
    console.log(hash)
    // master.guess(wordlist[0])
};

list = ["acckzz","ccbazz","eiowzz","abcczz"]

findSecretWord(list)