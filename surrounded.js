// https://leetcode.com/problems/surrounded-regions/

var solve = function(board) {
    
    let hashArray = []
    let allPositions = {}
    
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
                        
                        let up = [i-1,j]
                        if (allPositions[up]) {
                            for (let y=z+1;y<hashArray.length;y++) {
                                if (hashArray[y][up]) {
                                    for (let x=0;x<hashArray[y]['positions'].length;x++) {
                                        hashArray[z][hashArray[y]['positions'][x]] = true
                                        hashArray[z]['positions'].push(hashArray[y]['positions'][x])
                                    }
                                    if (i-1 === 0 || !hashArray[y]['pool']) {
                                        hashArray[z]['pool'] = false
                                    }
                                    hashArray.splice(y,1)
                                    break
                                }
                            }
                        }
                        
                        let left = [i,j-1]
                        if (allPositions[left]) {
                            for (let y=z+1;y<hashArray.length;y++) {
                                if (hashArray[y][left]) {
                                    for (let x=0;x<hashArray[y]['positions'].length;x++) {
                                        hashArray[z][hashArray[y]['positions'][x]] = true
                                        hashArray[z]['positions'].push(hashArray[y]['positions'][x])
                                    }
                                    if (j-1 === 0 || !hashArray[y]['pool']) {
                                        hashArray[z]['pool'] = false
                                    }
                             
                                    hashArray.splice(y,1)
                                    break
                                }
                            }
                        }
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
                allPositions[newCoord] = true
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

    return board
};

const solveLeetcode100=board=>{
    if(board===null || board.length===0 || board[0].length===0)  return;
    let rows=board.length, cols=board[0].length;
    
    let mark=(i,j)=>{
        if(i<0 || i>=rows || j<0 || j>=cols || board[i][j] !== 'O')  return;
        board[i][j] = 'A';
        
        mark(i-1, j);
        mark(i+1, j);
        mark(i, j-1);
        mark(i, j+1);
    };
    
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(i===0 || i===rows-1 || j===0 || j===cols-1){
                mark(i,j);
            }
        }
    }
    
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            // if(board[i][j] === 'O')  board[i][j] = 'X';
            if(board[i][j] === 'A')  {board[i][j] = 'O';continue;}
            board[i][j] = 'X'
        }
    }

    return board
};

var solveLeetcodeSecond = function(board) {
    if (board.length === 0)
      return []
    for(let col = 0; col < board[0].length; col++) {
      if (board[0][col] === 'O')
        dfs(0, col)
      if (board[board.length-1][col] === 'O')
        dfs(board.length-1, col)
    }
    for(let row = 0; row < board.length; row++) {
      if (board[row][0] === 'O')
        dfs(row, 0)
      if (board[row][board[row].length-1] === 'O')
        dfs(row, board[row].length-1)
    }
    
    for(let row = 0; row < board.length; row++) {
      for(let col = 0; col < board[0].length; col++) {
        if (board[row][col] === 'O')
          board[row][col] = 'X'
        else if (board[row][col] === '*')
          board[row][col] = 'O'
      }
    }
    return board
    function dfs(row, col) {
      if (row < 0 || col < 0 || row === board.length || col === board[0].length)
        return
      if (board[row][col] === 'O') {
        board[row][col] = '*'
        dfs(row+1, col)
        dfs(row-1, col)
        dfs(row, col+1)
        dfs(row, col-1)
      }
    }
  };

// // var solve = function(board) {
    
// //     let hashArray = []
    
// //     for (let i=0;i<board.length;i++) {
// //         for (let j=0;j<board[i].length;j++) {
// //             if (board[i][j] === "O") {
// //                 let newCoord = [i,j]
// //                 let connected = false
// //                 for (let z=0;z<hashArray.length;z++) {
// //                     if (hashArray[z][[i-1,j]] || hashArray[z][[i,j-1]]) {
// //                         if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
// //                             hashArray[z]['pool'] = false
// //                         }
// //                         hashArray[z][newCoord] = true
// //                         hashArray[z]['positions'].push(newCoord)
// //                         connected = true
// //                         break
// //                     }
// //                 }
// //                 if (!connected) {
// //                     let newHash = {
// //                         'pool': true,
// //                         'positions': [newCoord]
// //                     }
// //                     if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
// //                         newHash['pool'] = false
// //                     }
// //                     newHash[newCoord] = true
// //                     hashArray.push(newHash)
// //                 }
// //             }
// //         }
// //     }

// //     for (let i=0;i<hashArray.length;i++) {
// //         if (hashArray[i]['pool']) {
// //             for (let j=0;j<hashArray[i]['positions'].length;j++) {
// //                 let flipCoord = hashArray[i]['positions'][j]
// //                 board[flipCoord[0]][flipCoord[1]] = 'X'
// //             }
// //         }
// //     }
// // };


// let board = [["O","O","O","O","X","X"],
// ["O","O","O","O","O","O"],
// ["O","X","O","X","O","O"],
// ["O","X","O","O","X","O"],
// ["O","X","O","X","O","O"],
// ["O","X","O","O","O","O"]]


// var solve = function(board) {
    
//     let hashArray = []
//     let allPositions = {}
    
//     for (let i=0;i<board.length;i++) {
//         for (let j=0;j<board[i].length;j++) {
//             if (board[i][j] === "O") {
//                 let newCoord = [i,j]
//                 let connected = false
//                 for (let z=0;z<hashArray.length;z++) {
//                     if (hashArray[z][[i-1,j]] || hashArray[z][[i,j-1]]) {
//                         if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
//                             hashArray[z]['pool'] = false
//                         }
//                         hashArray[z][newCoord] = true
//                         hashArray[z]['positions'].push(newCoord)
//                         connected = true
                        
//                         let up = [i-1,j]
//                         if (allPositions[up]) {
//                             for (let y=z+1;y<hashArray.length;y++) {
//                                 if (hashArray[y][up]) {
//                                     for (let x=0;x<hashArray[y]['positions'].length;x++) {
//                                         hashArray[z][hashArray[y]['positions'][x]] = true
//                                         hashArray[z]['positions'].push(hashArray[y]['positions'][x])
//                                         hashArray[y][hashArray[y]['positions'][x]] = false
//                                     }
//                                     // console.log(hashArray[z], 'hi')
//                                     // delete hashArray[y]
//                                     break
//                                 }
//                             }
//                             console.log('aaaa', hashArray)
//                             // hashArray[z]['positions'].push(up)
//                         }

//                         // let left = [i,j-1]
//                         // if (allPositions[left]) {
//                         //     if (!hashArray[z][left]) {
//                         //         hashArray[z][left] = true
//                         //         hashArray[z]['positions'].push(left)
//                         //     }
//                         // }
//                         break
//                     }
//                 }
//                 if (!connected) {
//                     let newHash = {
//                         'pool': true,                    'positions': [newCoord]
//                     }
//                     if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
//                         newHash['pool'] = false
//                     }
//                     newHash[newCoord] = true
//                     hashArray.push(newHash)
//                 }
//                 allPositions[newCoord] = true
//                     // console.log('==================')
//                 // }
//             }
//         }
//     }

// // console.log(allPositions)
//     console.log(hashArray)
//     for (let i=0;i<hashArray.length;i++) {
//         if (hashArray[i]['pool'] && hashArray[hashArray[i]['positions'][0]]) {
//             console.log('AAAAAA')
//             for (let j=0;j<hashArray[i]['positions'].length;j++) {
//                 let flipCoord = hashArray[i]['positions'][j]
//                 board[flipCoord[0]][flipCoord[1]] = 'X'
//             }
//         }
//     }

//     return board
// };

// console.log(solve(board))

// var solve = function(board) {
    
//     let hashArray = []
//     let allPositions = {}
    
//     for (let i=0;i<board.length;i++) {
//         for (let j=0;j<board[i].length;j++) {
//             if (board[i][j] === "O") {
//                 let newCoord = [i,j]
//                 let connected = false
//                 for (let z=0;z<hashArray.length;z++) {
//                     if (hashArray[z][[i-1,j]] || hashArray[z][[i,j-1]]) {
//                         if (i ===4 && j===0) {
//                         }
//                         if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
//                             hashArray[z]['pool'] = false
//                         }
//                         hashArray[z][newCoord] = true
//                         hashArray[z]['positions'].push(newCoord)
//                         connected = true
                        
//                         let up = [i-1,j]
//                         if (allPositions[up]) {
//                             for (let y=z+1;y<hashArray.length;y++) {
//                                 if (hashArray[y][up]) {
//                                     for (let x=0;x<hashArray[y]['positions'].length;x++) {
//                                         hashArray[z][hashArray[y]['positions'][x]] = true
//                                         hashArray[z]['positions'].push(hashArray[y]['positions'][x])
//                                     }
//                                     if (i-1 === 0) {
//                                         hashArray[z]['pool'] = false
//                                     }
//                                     hashArray.splice(y,1)
//                                     break
//                                 }
//                             }
//                         }
                        
//                         let left = [i,j-1]
//                         if (allPositions[up]) {
//                             for (let y=z+1;y<hashArray.length;y++) {
//                                 if (hashArray[y][left]) {
//                                     for (let x=0;x<hashArray[y]['positions'].length;x++) {
//                                         hashArray[z][hashArray[y]['positions'][x]] = true
//                                         hashArray[z]['positions'].push(hashArray[y]['positions'][x])
//                                     }
//                                     if (j-1 === 0) {
//                                         hashArray[z]['pool'] = false
//                                     }
//                                     hashArray.splice(y,1)
//                                     break
//                                 }
//                             }
//                         }

//                         // let left = [i,j-1]
//                         // if (allPositions[left]) {
//                         //     if (!hashArray[z][left]) {
//                         //         hashArray[z][left] = true
//                         //         hashArray[z]['positions'].push(left)
//                         //     }
//                         // }
//                         break
//                     }
//                 }
//                 if (!connected) {
//                     let newHash = {
//                         'pool': true,                    'positions': [newCoord]
//                     }
//                     if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
//                         newHash['pool'] = false
//                     }
//                     newHash[newCoord] = true
//                     hashArray.push(newHash)
//                 }
//                 allPositions[newCoord] = true
//             }
//         }
//     }

//     for (let i=0;i<hashArray.length;i++) {
//         if (hashArray[i]['pool']) {
//             for (let j=0;j<hashArray[i]['positions'].length;j++) {
//                 let flipCoord = hashArray[i]['positions'][j]
//                 board[flipCoord[0]][flipCoord[1]] = 'X'
//             }
//         }
//     }
// };

let board = [["X","O","X","X","O","O","X","O","X","X","X","X","O","X","O","X","X","X","X","O"],
["O","X","O","O","X","O","X","O","X","X","X","X","X","X","O","X","X","O","X","X"],
["X","O","O","X","O","X","O","X","O","X","X","O","X","X","X","O","O","X","X","O"],
["O","X","X","O","O","X","X","O","X","X","X","X","O","O","X","O","O","O","X","X"],
["X","X","O","X","O","O","X","O","O","O","X","O","X","O","X","X","X","O","X","X"],
["O","O","O","O","X","O","X","X","O","O","X","O","O","X","O","X","X","X","X","O"],
["X","O","X","X","X","X","O","X","X","O","X","X","O","X","X","X","O","O","X","O"],
["O","X","X","O","O","O","X","O","O","X","O","X","X","X","O","O","X","X","O","X"],
["O","O","O","O","X","X","O","X","O","O","X","X","O","X","O","O","X","O","X","O"],
["O","O","X","X","X","O","X","O","X","O","X","X","X","O","X","X","X","X","X","O"],
["X","O","X","O","X","X","X","O","X","X","X","O","X","O","X","O","X","O","X","X"],
["O","O","X","X","X","X","O","X","X","X","O","X","O","O","O","X","X","X","O","X"],
["X","X","X","O","O","O","O","O","X","X","O","X","X","X","O","X","X","X","X","O"],
["O","O","X","X","X","O","O","X","O","O","X","X","X","X","X","X","O","X","X","O"],
["O","O","O","X","X","O","O","O","O","X","X","O","X","O","O","X","X","X","X","X"],
["O","X","X","X","O","X","O","O","X","X","X","X","X","O","X","X","X","O","O","X"],
["O","O","O","O","X","X","X","X","O","O","O","O","X","O","O","O","O","X","X","O"],
["X","X","X","X","X","X","X","X","X","X","O","X","X","O","X","X","X","X","X","X"],
["O","X","O","O","X","O","O","X","X","X","X","X","X","O","X","O","X","X","X","X"],
["O","O","X","X","X","X","X","O","O","O","X","X","X","X","X","X","O","X","X","O"]]

let board2 = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    // solve(board)
    solve(board2)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    // solveLeetcode100(board)
    solveLeetcode100(board2)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    // solveLeetcodeSecond(board)
    solveLeetcodeSecond(board2)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)