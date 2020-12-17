let arr = [3, 6, 2, 9, -1, 10]

const solution = (arr) => {
    if (arr.length <= 1) {
        return ''
    }
    // Type your solution here 
    let left = 0
    let right = 0
    let i = 0
    let step = 1

    while (i<arr.length) {
        for (let j=1; j<=step;j++) {
            if (i + j < arr.length) {
                left += arr[i + j]
            }
        }
        for (let j=step+1;j<=2*step;j++) {
            if (i + j < arr.length) {
                right += arr[i+j]
            }
        }
        
        i += 2*step
    }
    
    if (left > right) {
        return "Left"
    } else if (right > left) {
        return "right"
    } else {
        return ''
    }
};

console.log(solution(arr))