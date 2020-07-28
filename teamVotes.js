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

function rankTeamsLeetcode100(votes) {
    //const objCache = {};
    const numOfTeams = votes[0].length;
    const arrCache = {};
  
    for (let i = 0; i < votes.length; i++) {
      for (let j = 0; j < numOfTeams; j++) {
  
        const team = votes[i][j];
        // console.log(arrCache[team] in arrCache);
  
        if (arrCache[team] === undefined) {
          arrCache[team] = new Array(numOfTeams).fill(0);
        }
        arrCache[team][j]++
  
        /*
        if (!(team in objCache)) {
          objCache[team] = { [j]: 1 }
        } else {
          objCache[team][j] ? objCache[team][j]++ : objCache[team][j] = 1;
        }
        */
  
      }
    }
  
    /*
    const sorted2 = Object.keys(objCache).sort((a, b) => {
      for (let i = 0; i < numOfTeams; i++) {
        // console.log(a, objCache[a])
        // console.log(b, objCache[b])
        if (objCache[a][i] && objCache[b][i] && objCache[a][i] !== objCache[b][i]) {
          console.log(objCache[b][i], objCache[a][i])
          return objCache[b][i] - objCache[a][i];
        } else if (!objCache[a][i]) {
          console.log(objCache[b][i], objCache[a][i])
          return objCache[b][i] - 0;
        } else if (!objCache[b][i]) {
          console.log(objCache[b][i], objCache[a][i])
          return 0 - objCache[a][i];
        }
      }
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    })
    console.log(sorted2)
    */
  
    const sorted = Object.keys(arrCache).sort((a, b) => {
      // console.log(a, arrCache[a])
      // console.log(b, arrCache[b])
      for (let i = 0; i < numOfTeams; i++) {
        if (arrCache[a][i] !== arrCache[b][i]) {
          // reversed due to larger num = higher placement
          // console.log(a, b, i, arrCache[a][i], arrCache[b][i])
          return arrCache[b][i] - arrCache[a][i];
        }
      }
      // console.log(a, b, a < b)
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    })
  
    // console.log(objCache)
    // console.log(arrCache)
    // console.log(sorted.join(""))
    return sorted.join("")
  };

// console.log(rankTeams(votes1))
// console.log("======")
// console.log(rankTeams(votes2))
// console.log("======")
// console.log(rankTeams(votes3))
// console.log("======")
// console.log(rankTeams(votes4))
// console.log("======")
// console.log(rankTeams(votes5))
// console.log("======")
// console.log(rankTeams(votes6))
// console.log("======")
// console.log(rankTeams(votes7))
// console.log("======")
// console.log(rankTeams(votes8))
// console.log("======")
// console.log(rankTeams(votes9))
// console.log("======")
// console.log(rankTeams(votes10))

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    rankTeams(votes1)
    rankTeams(votes2)
    rankTeams(votes3)
    rankTeams(votes4)
    rankTeams(votes5)
    rankTeams(votes6)
    rankTeams(votes7)
    rankTeams(votes8)
    rankTeams(votes9)
    rankTeams(votes10)
}
end = Date.now()
timeElapsed = end - start
console.log(`zeb time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    rankTeamsLeetcode100(votes1)
    rankTeamsLeetcode100(votes2)
    rankTeamsLeetcode100(votes3)
    rankTeamsLeetcode100(votes4)
    rankTeamsLeetcode100(votes5)
    rankTeamsLeetcode100(votes6)
    rankTeamsLeetcode100(votes7)
    rankTeamsLeetcode100(votes8)
    rankTeamsLeetcode100(votes9)
    rankTeamsLeetcode100(votes10)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode time: ${timeElapsed} ms`)

//leetcode time faster by ~400ms