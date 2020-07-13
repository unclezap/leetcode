// https://leetcode.com/problems/rank-teams-by-votes/
let votes1 = ["ABC","ACB","ABC","ACB","ACB"]
let votes2 = ["ABC"]
let votes3 = ["ABC","ACB","ABC","ACB","ACB","ABC"]
let votes4 = ["ACB","CBA","ACB","ABC","ACB","ABC"]
let votes5 = ["BCA", "ACB"]
let votes6 = ["ACB", "ABC"]
let votes7 = ["ABC", "ACB"]
let votes8 = ["WXYZ","XYZW"]
let votes9 = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
let votes10 = ["M","M","M","M"]

var rankTeams = function(votes) {
    if (votes.length === 1) {
        return votes[0]
    }
    
    teamHash = {}
    for (let i=0; i < votes[0].length; i++) {
        let miniHash = {}
        miniHash[votes[0][i]] = 1
        teamHash[i] = miniHash
    }

    for (let j=1; j < votes.length; j++) {
        for (let k=0; k < votes[j].length; k++) {
            if (teamHash[k][votes[j][k]]) {
                teamHash[k][votes[j][k]]++
            } else {
                teamHash[k][votes[j][k]] = 1
            }
        }
    }

    let answerString = ""
    let candidates
    let answerArray = []

    for (let m=0; m < votes[0].length; m++) {
        candidates = Object.keys(teamHash[m])
        candidates.sort((a, b) => {
            if (teamHash[m][b] === teamHash[m][a]) {
                for (let z=0; z < votes[0].length; z++) {
                    if ((teamHash[z][a] > teamHash[z][b]) || (teamHash[z][a] && !teamHash[z][b])) {
                        return -1
                    } else if ((teamHash[z][a] < teamHash[z][b]) || (!teamHash[z][a] && teamHash[z][b])) {
                        return 1
                    }
                }
                
                if ([a,b].sort()[0] === a) {
                    return -1
                } else {
                    return 1
                }
            } else if (teamHash[m][a] > teamHash[m][b]) {
                return -1
            } else {
                return 1
            }
        })
        answerArray.push(candidates)
    }
    let uniqueAnswerArray = [...new Set(answerArray.flat())]

    for (let i=0; i< uniqueAnswerArray.length; i++) {
        answerString += uniqueAnswerArray[i]
    }

    return answerString
};

console.log(rankTeams(votes1))
console.log("======")
console.log(rankTeams(votes2))
console.log("======")
console.log(rankTeams(votes3))
console.log("======")
console.log(rankTeams(votes4))
console.log("======")
console.log(rankTeams(votes5))
console.log("======")
console.log(rankTeams(votes6))
console.log("======")
console.log(rankTeams(votes7))
console.log("======")
console.log(rankTeams(votes8))
console.log("======")
console.log(rankTeams(votes9))
console.log("======")
console.log(rankTeams(votes10))
