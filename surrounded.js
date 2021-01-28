// https://leetcode.com/problems/surrounded-regions/

var solve = function(board) {
    
    let hashArray = []
    
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            if (board[i][j] === "O") {
                let newCoord = [i,j]
                let connected = false
                for (let z=0;z<hashArray.length;z++) {
                    if (hashArray[z][[i-1,j]] || hashArray[z][[i,j-1]]) {
                        if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
                            hashArray[z]['pool'] = false
                        }
                        hashArray[z][newCoord] = true
                        hashArray[z]['positions'].push(newCoord)
                        connected = true
                        break
                    }
                }
                if (!connected) {
                    let newHash = {
                        'pool': true,
                        'positions': [newCoord]
                    }
                    if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
                        newHash['pool'] = false
                    }
                    newHash[newCoord] = true
                    hashArray.push(newHash)
                }
            }
        }
    }

    for (let i=0;i<hashArray.length;i++) {
        if (hashArray[i]['pool']) {
            for (let j=0;j<hashArray[i]['positions'].length;j++) {
                let flipCoord = hashArray[i]['positions'][j]
                board[flipCoord[0]][flipCoord[1]] = 'X'
            }
        }
    }
};

