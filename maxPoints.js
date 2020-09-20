// https://leetcode.com/problems/max-points-on-a-line/


let input3 = [[0,0],[1,1],[1,-1]]
let input4 = [[4,0],[4,-1],[4,5]]
let input5 = [[1,1],[1,1],[1,1]]
let input6 = [[0,-1],[0,3],[0,-4],[0,-2],[0,-4],[0,0],[0,0],[0,1],[0,-2],[0,4]]
let input7 = [[-54,-297],
[-36,-222],
[3,-2],
[30,53],
[-5,1],
[-36,-222],
[0,2],
[1,3],
[6,-47],
[0,4],
[2,3],
[5,0],
[48,128],
[24,28],
[0,-5],
[48,128],
[-12,-122],
[-54,-297],
[-42,-247],
[-5,0],
[2,4],
[0,0],
[54,153],
[-30,-197],
[4,5],
[4,3],
[-42,-247],
[6,-47],
[-60,-322],
[-4,-2],
[-18,-147],
[6,-47],
[60,178],
[30,53],
[-5,3],
[-42,-247],
[2,-2],
[12,-22]
,[24,28],
[0,-72],
[3,-4],
[-60,-322],
[48,128],
[0,-72],
[-5,3],
[5,5],
[-24,-172],
[-48,-272],
[36,78],
[-3,3]]
let input8 = [[-54,-297],[30,53],[54,153]]
//the gd floating-point error here wtf
let input9 = [[0,0],[94911151,94911150],[94911152,94911151]]
let input10 = [[0,0],[51,50],[52,51]]

// var maxPoints = function(points) {
//     if (points.length <= 2) {
//         return points.length
//     }
    
//     let max = 1
//     let count = 1

//     for (let i=0; i < points.length - 1; i++) {
//         for (let j=i+1; j < points.length; j++) {
//             let slope = (points[i][1] - points[j][1])/(points[i][0] - points[j][0])
//             let intercept = points[i][1] - slope*points[i][0]
//             // slope = slope.toFixed(13)
//             // intercept = intercept.toFixed(13)
//             count = 2

//             // console.log("slo", slope, "int", intercept)
//             if (slope === Infinity || slope === -Infinity) {
//                 for (let k=0; k < points.length; k++) {
//                     if (k !== i && k !== j) {
//                         if (points[k][0] === points[i][0]) {
//                             count++
//                         }
//                     }
//                 }
//             } else if (isNaN(slope)) {
//                 for (let k=0; k < points.length; k++) {
//                     if (k !== i && k !== j) {
//                         if (points[k][0] === points[i][0] && points[k][1] === points[i][1]) {
//                             count++
//                         }
//                     }
//                 }
//             } else {
//                 for (let k=0; k < points.length; k++) {
//                     if (k !== i && k !== j) {
//                         // console.log("calc", points[k][1], "=", slope * points[k][0] + intercept)
//                         if (points[k][1] === (slope * points[k][0] + intercept) && points[j][1] === (slope * points[j][0] + intercept) && points[i][1] === (slope * points[i][0] + intercept)) {
//                             // console.log(points[i], points[j], points[k])
//                             console.log(i,j,k, "calc", points[k][1], "=", slope * points[k][0] + intercept)
//                             console.log("slope", slope, "intercept", intercept)
//                             console.log("========")
//                             count++
//                         }
//                     }
//                 }
//             }
            
//             if (count > max) {
//                 max = count
//             }
//         }
//     }
    
//     return max
// };

var maxPoints = function(points) {
    if (points.length <= 2) {
        return points.length
    }
    
    let max = 1
    let count = 1

    for (let i=0; i < points.length - 1; i++) {
        for (let j=i+1; j < points.length; j++) {
            let slope = 1000000.0 *(points[i][1] - points[j][1])/(points[i][0] - points[j][0])
            let intercept = points[i][1] - slope*points[i][0]
            count = 2

            if (slope === Infinity || slope === -Infinity) {
                for (let k=0; k < points.length; k++) {
                    if (k !== i && k !== j) {
                        if (points[k][0] === points[i][0]) {
                            count++
                        }
                    }
                }
            } else if (isNaN(slope)) {
                for (let k=0; k < points.length; k++) {
                    if (k !== i && k !== j) {
                        if (points[k][0] === points[i][0] && points[k][1] === points[i][1]) {
                            count++
                        }
                    }
                }
            } else {
                for (let k=0; k < points.length; k++) {
                    if (k !== i && k !== j) {
                        console.log("int",intercept)
                        console.log(points[k][1] , (slope * points[k][0] + intercept))
                        if (points[k][1] === (slope * points[k][0] + intercept)) {
                            count++
                        }
                    }
                }
            }
            
            if (count > max) {
                max = count
            }
        }
    }
    
    return max
};

cconst maxPointsLeetcode100 = function(points) {
    const n = points.length;
    let max = 0;
    
    for (let i = 0; i < n; i += 1) {
      const [x1, y1] = points[i];
      // to avoid empty map gives a max value of -Infinity
      const map = new Map([['empty', 0]]); 
      let duplicate = 1;
      
      for (let j = i + 1; j < n; j += 1) {
        const [x2, y2] = points[j]
        
        if (x1 === x2 && y1 === y2) duplicate += 1;
        else {
          const slope = x1 === x2 ? 'Parallel' : 1000000.0 * (y1 - y2) / (x1 - x2);
          map.set(slope, (map.get(slope) || 0) + 1);
        }
      }
      const localMax = Math.max(...map.values()) + duplicate;
      max = Math.max(max, localMax);
    }
    
    return max;
  };

// console.log(maxPoints(input3))
// console.log(maxPoints(input4))
// console.log(maxPoints(input5))
// console.log(maxPoints(input6))
// console.log(maxPoints(input7))
// console.log(maxPoints(input8))
// console.log(maxPoints(input9))
console.log(maxPoints(input10))
// console.log(-72.00000000000001.toFixed(14))
53.00000000000004


