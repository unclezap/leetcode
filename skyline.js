// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

var maxIncreaseKeepingSkyline = function(grid) {

    let rowMax = []
    
    for (let i=0;i<grid.length;i++) {
        rowMax.push(Math.max(...grid[i]))
    }
    
    let sum = 0
    
    for (let i=0;i<grid[0].length;i++) {
        let column = []
        for (let j=0;j<grid.length;j++) {
            column.push(grid[j][i])
        }
        for (let k=0;k<column.length;k++) {
            sum += Math.min(rowMax[k],Math.max(...column)) - column[k]
        }
    }
    
    return sum

    return maxTotal
};

var maxIncreaseKeepingSkylineLeetcode100 = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowMaxes = Array(m).fill(0);
    const colMaxes = Array(n).fill(0);
    
    for(let row = 0; row < m; row++) {
        for(let col = 0; col < n; col++) {
            rowMaxes[row] = Math.max(rowMaxes[row], grid[row][col]);
            colMaxes[col] = Math.max(colMaxes[col], grid[row][col]);
        }
    }
    
    let result = 0;
    
    for(let row = 0; row < m; row++) {
        for(let col = 0; col < n; col++) {
            const min = Math.min(rowMaxes[row], colMaxes[col]);
            result += Math.max(min - grid[row][col], 0);
        }
    }   
      
    return result
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])
    maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0],[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)


console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    maxIncreaseKeepingSkylineLeetcode100([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])
    maxIncreaseKeepingSkylineLeetcode100([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0],[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)