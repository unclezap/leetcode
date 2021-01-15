let text = 'Coding tests irritate a minority of people. One applicant said his resume should speak for itself. I have no time for that attitude—though I’m happy for the weeding help. Good programmers should welcome the opportunity to demonstrate they’re good at what they do. Heck, most programmers I know enjoy brain teasers anyway. They test themselves when no one’s looking.'

function wordLength (text) {
    let countHash = {}
    text = text.split(' ')

    for (let i=0; i<text.length;i++) {
        let count = 0
        for (let j=0;j<text[i].length;j++) {
            if (text[i][j].match(/^[A-Za-z]+$/)) {
                count++
            }
        }
        if (!countHash[count]) {
            countHash[count] = 1
        } else {
            countHash[count]++
        }
    }

    return countHash
}

console.log(wordLength(text))