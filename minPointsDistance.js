// https://leetcode.com/problems/minimum-time-visiting-all-points/submissions/

var minTimeToVisitAllPoints = function(points) {
    let steps = 0
    
    for (let i=1;i<points.length;i++) {
        steps += Math.max(Math.abs(points[i][0] - points[i-1][0]),Math.abs(points[i][1] - points[i-1][1]))
    }
     
     return steps
 };