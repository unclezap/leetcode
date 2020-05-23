//https://leetcode.com/problems/number-of-islands/

let grid1 = [["1","1","1","1","0"],
            ["1","1","0","0","0"],
            ["1","1","0","1","0"],
            ["0","0","1","1","0"]]

let grid2 = [["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]]

let grid3 = [["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]]

let testgrid = [["1","0"],["1","1"]]

let testgrid2 = [["1","1","0"],
                ["0","0","0"],
                ["0","0","1"]]

var numIslands = function(grid) {
    let onIsland = false
    let numIsles = 0
    for (let i=0; i<grid.length; i++) {
        onIsland = false
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i-1]) {
              if (grid[i-1][j] === "1") {
                  onIsland = true
              }  
            }
            if (grid[i+1]) {
                if (grid[i+1][j] === "1" && numIsles > 0) {

                    onIsland = true
                }
            } 
            if (grid[i][j] === "1") {
                if (!onIsland) {
                  numIsles++
                  onIsland = true
              }
          } else {
              onIsland = false
          }  
        }
    }
    return numIsles
};

// function numIslands2 (grid) {
//     let graph = {}
//     let onIsland = false
//     let numIsles = 0

//     for (let y = 0; y < grid.length; y++) {
//         for (let x = 0; x < grid[y].length; x++) {

//             if (grid[y][x] === "1") {
//                 if (!onIsland) {
//                     onIsland = true
//                     numIsles++
//                     graph[numIsles] = [[y,x]]
//                 } else {
//                     graph[numIsles].push([y,x])
//                 }
//             } else {
//                 onIsland = false
//             }            
        
//         }
//     }

//     // return graph
//     return Math.max(...Object.keys(graph).map(Number))
// }

// function numIslands3 (grid, y=0, x=-1, numIsles=0) {

//     function goLeft(y,x) {
//         x++
//         if (grid[y][x] === "1") {
//             goLeft(y,x)
//             goDown(y,x)
//             numIslands3(y,x)
//         }
//     }
//     function goDown(y,x) {
//         y++
//         if (y < grid.length) {
//             if (grid[y][x] === "1") {
//                 goLeft(y,x)
//                 goDown(y,x)
//                 numIslands3(grid,y,x)
//             }
//         }
//     }
    
//     if (y < grid.length && x < grid[y].length) {
//         goLeft(y,x)
//         goDown(y,x)
//     }

//     numIsles++
//     x++
//     if (y < grid.length && x < grid[y].length) {
//         numIslands3(grid,y,x,numIsles)
//     }
    
//     numIsles++
//     y++
//     if (y < grid.length && x < grid[y].length) {
//         numIslands3(grid,y,x,numIsles)
//     }

//     return numIsles
// }

// function numIslands4 (grid, y=0, x=0, numIsles=0) {
//     function goLeft(y,x) {
//         if (grid[y][x+1] === "1") {
//             x++
//             x = goLeft(y,x)
//             y = goDown(y,x)
//         }
//         return x
//     }
//     function goDown(y,x) {
//         if (grid[y+1]) {
//             if (grid[y+1][x] === "1") {
//                 y++
//                 x = goLeft(y,x)
//                 y = goDown(y,x)
//             }
//         }
//         return y
//     }

//     let endpoints = {}
//     for (let y = 0; y< grid.length; y++) {
//         for (let x = 0; x < grid[y].length; x++) {
//             if (grid[y][x] === "1") {
//                 endpoints[[goDown(y,x),goLeft(y,x)]] = 0
//             }
//         }
//     }
    
//     console.log(endpoints)
//     return Object.keys(endpoints).length
// }

// console.log("1 ==========")
console.log(numIslands(testgrid2))
console.log(numIslands(grid1))
console.log(numIslands(grid2))
console.log(numIslands(grid3))
// console.log(numIslands2(grid1))
// console.log(numIslands2(testgrid))
// console.log(numIslands3(grid1))
// console.log(numIslands3(testgrid2))
// console.log("4 ==============")
// console.log(numIslands4(testgrid2))
// console.log(numIslands4(grid1))
// console.log(numIslands4(grid2))
// console.log(numIslands4(grid3))
