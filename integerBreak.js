// https://leetcode.com/problems/integer-break/

var integerBreakSwitch = function(n) {
    if (n < 4) {
        return n - 1
    }
    switch (n % 3) {
        case 0:
            return 3**(n/3)
        case 1:
            return 3**(Math.floor(n/3) - 1) * 4
        case 2:
            return 3**(Math.floor(n/3)) * 2
    }
};

var integerBreakSwitchNoFloor = function(n) {
    if (n < 4) {
        return n - 1
    }
    switch (n % 3) {
        case 0:
            return 3**(n/3)
        case 1:
            return 3**((n - 4)/3) * 4
        case 2:
            return 3**((n-2)/3) * 2
    }
};

var integerBreakIf = function(n) {
    if (n < 4) {
        return n - 1
    }
    
    if (n % 3 === 0) {
        return 3**(n/3)        
    } else if (n % 3 === 1) {
        return 3**(Math.floor(n/3) - 1) * 4
    } else if (n % 3 === 2) {
        return 3**(Math.floor(n/3)) * 2
    }
};

var integerBreakIfNoFloor = function(n) {
    if (n < 4) {
        return n - 1
    }
    
    if (n % 3 === 0) {
        return 3**(n/3)        
    } else if (n % 3 === 1) {
        return 3**((n-4)/3) * 4
    } else if (n % 3 === 2) {
        return 3**((n-2)/3) * 2
    }
};

// for (let i = 3; i < 59; i++) {
//     console.log(`} else if (n === ${i}) {`)
//     console.log(`return ${integerBreakSwitch(i)}`)
// }

// for (let i = 3; i < 59; i++) {
//     console.log(`} else if (n == ${i}) {`)
//     console.log(`return ${integerBreakSwitch(i)}`)
// }

// for (let i = 3; i < 59; i++) {
//     console.log(`} else if (n = ${i}) {`)
//     console.log(`return ${integerBreakSwitch(i)}`)
// }

// for (let i = 2; i < 59; i++) {
//     console.log(`case ${i}:`)
//     console.log(`return ${integerBreakSwitch(i)}`)
// }

var integerBreakAllAnswers = function(n) {
    if (n === 2) {
    return 1
    } else if (n === 3) {
    return 2
    } else if (n === 4) {
    return 4
    } else if (n === 5) {
    return 6
    } else if (n === 6) {
    return 9
    } else if (n === 7) {
    return 12
    } else if (n === 8) {
    return 18
    } else if (n === 9) {
    return 27
    } else if (n === 10) {
    return 36
    } else if (n === 11) {
    return 54
    } else if (n === 12) {
    return 81
    } else if (n === 13) {
    return 108
    } else if (n === 14) {
    return 162
    } else if (n === 15) {
    return 243
    } else if (n === 16) {
    return 324
    } else if (n === 17) {
    return 486
    } else if (n === 18) {
    return 729
    } else if (n === 19) {
    return 972
    } else if (n === 20) {
    return 1458
    } else if (n === 21) {
    return 2187
    } else if (n === 22) {
    return 2916
    } else if (n === 23) {
    return 4374
    } else if (n === 24) {
    return 6561
    } else if (n === 25) {
    return 8748
    } else if (n === 26) {
    return 13122
    } else if (n === 27) {
    return 19683
    } else if (n === 28) {
    return 26244
    } else if (n === 29) {
    return 39366
    } else if (n === 30) {
    return 59049
    } else if (n === 31) {
    return 78732
    } else if (n === 32) {
    return 118098
    } else if (n === 33) {
    return 177147
    } else if (n === 34) {
    return 236196
    } else if (n === 35) {
    return 354294
    } else if (n === 36) {
    return 531441
    } else if (n === 37) {
    return 708588
    } else if (n === 38) {
    return 1062882
    } else if (n === 39) {
    return 1594323
    } else if (n === 40) {
    return 2125764
    } else if (n === 41) {
    return 3188646
    } else if (n === 42) {
    return 4782969
    } else if (n === 43) {
    return 6377292
    } else if (n === 44) {
    return 9565938
    } else if (n === 45) {
    return 14348907
    } else if (n === 46) {
    return 19131876
    } else if (n === 47) {
    return 28697814
    } else if (n === 48) {
    return 43046721
    } else if (n === 49) {
    return 57395628
    } else if (n === 50) {
    return 86093442
    } else if (n === 51) {
    return 129140163
    } else if (n === 52) {
    return 172186884
    } else if (n === 53) {
    return 258280326
    } else if (n === 54) {
    return 387420489
    } else if (n === 55) {
    return 516560652
    } else if (n === 56) {
    return 774840978
    } else if (n === 57) {
    return 1162261467
    } else if (n === 58) {
    return 1549681956
    }
}

var integerBreakAllAnswersDoubleEquals = function(n) {
    if (n == 2) {
    return 1
    } else if (n == 3) {
    return 2
    } else if (n == 4) {
    return 4
    } else if (n == 5) {
    return 6
    } else if (n == 6) {
    return 9
    } else if (n == 7) {
    return 12
    } else if (n == 8) {
    return 18
    } else if (n == 9) {
    return 27
    } else if (n == 10) {
    return 36
    } else if (n == 11) {
    return 54
    } else if (n == 12) {
    return 81
    } else if (n == 13) {
    return 108
    } else if (n == 14) {
    return 162
    } else if (n == 15) {
    return 243
    } else if (n == 16) {
    return 324
    } else if (n == 17) {
    return 486
    } else if (n == 18) {
    return 729
    } else if (n == 19) {
    return 972
    } else if (n == 20) {
    return 1458
    } else if (n == 21) {
    return 2187
    } else if (n == 22) {
    return 2916
    } else if (n == 23) {
    return 4374
    } else if (n == 24) {
    return 6561
    } else if (n == 25) {
    return 8748
    } else if (n == 26) {
    return 13122
    } else if (n == 27) {
    return 19683
    } else if (n == 28) {
    return 26244
    } else if (n == 29) {
    return 39366
    } else if (n == 30) {
    return 59049
    } else if (n == 31) {
    return 78732
    } else if (n == 32) {
    return 118098
    } else if (n == 33) {
    return 177147
    } else if (n == 34) {
    return 236196
    } else if (n == 35) {
    return 354294
    } else if (n == 36) {
    return 531441
    } else if (n == 37) {
    return 708588
    } else if (n == 38) {
    return 1062882
    } else if (n == 39) {
    return 1594323
    } else if (n == 40) {
    return 2125764
    } else if (n == 41) {
    return 3188646
    } else if (n == 42) {
    return 4782969
    } else if (n == 43) {
    return 6377292
    } else if (n == 44) {
    return 9565938
    } else if (n == 45) {
    return 14348907
    } else if (n == 46) {
    return 19131876
    } else if (n == 47) {
    return 28697814
    } else if (n == 48) {
    return 43046721
    } else if (n == 49) {
    return 57395628
    } else if (n == 50) {
    return 86093442
    } else if (n == 51) {
    return 129140163
    } else if (n == 52) {
    return 172186884
    } else if (n == 53) {
    return 258280326
    } else if (n == 54) {
    return 387420489
    } else if (n == 55) {
    return 516560652
    } else if (n == 56) {
    return 774840978
    } else if (n == 57) {
    return 1162261467
    } else if (n == 58) {
    return 1549681956
    }
}

// var integerBreakAllAnswersOneEquals = function(n) {
//     if (n = 2) {
//     return 1
//     } else if (n = 3) {
//     return 2
//     } else if (n = 4) {
//     return 4
//     } else if (n = 5) {
//     return 6
//     } else if (n = 6) {
//     return 9
//     } else if (n = 7) {
//     return 12
//     } else if (n = 8) {
//     return 18
//     } else if (n = 9) {
//     return 27
//     } else if (n = 10) {
//     return 36
//     } else if (n = 11) {
//     return 54
//     } else if (n = 12) {
//     return 81
//     } else if (n = 13) {
//     return 108
//     } else if (n = 14) {
//     return 162
//     } else if (n = 15) {
//     return 243
//     } else if (n = 16) {
//     return 324
//     } else if (n = 17) {
//     return 486
//     } else if (n = 18) {
//     return 729
//     } else if (n = 19) {
//     return 972
//     } else if (n = 20) {
//     return 1458
//     } else if (n = 21) {
//     return 2187
//     } else if (n = 22) {
//     return 2916
//     } else if (n = 23) {
//     return 4374
//     } else if (n = 24) {
//     return 6561
//     } else if (n = 25) {
//     return 8748
//     } else if (n = 26) {
//     return 13122
//     } else if (n = 27) {
//     return 19683
//     } else if (n = 28) {
//     return 26244
//     } else if (n = 29) {
//     return 39366
//     } else if (n = 30) {
//     return 59049
//     } else if (n = 31) {
//     return 78732
//     } else if (n = 32) {
//     return 118098
//     } else if (n = 33) {
//     return 177147
//     } else if (n = 34) {
//     return 236196
//     } else if (n = 35) {
//     return 354294
//     } else if (n = 36) {
//     return 531441
//     } else if (n = 37) {
//     return 708588
//     } else if (n = 38) {
//     return 1062882
//     } else if (n = 39) {
//     return 1594323
//     } else if (n = 40) {
//     return 2125764
//     } else if (n = 41) {
//     return 3188646
//     } else if (n = 42) {
//     return 4782969
//     } else if (n = 43) {
//     return 6377292
//     } else if (n = 44) {
//     return 9565938
//     } else if (n = 45) {
//     return 14348907
//     } else if (n = 46) {
//     return 19131876
//     } else if (n = 47) {
//     return 28697814
//     } else if (n = 48) {
//     return 43046721
//     } else if (n = 49) {
//     return 57395628
//     } else if (n = 50) {
//     return 86093442
//     } else if (n = 51) {
//     return 129140163
//     } else if (n = 52) {
//     return 172186884
//     } else if (n = 53) {
//     return 258280326
//     } else if (n = 54) {
//     return 387420489
//     } else if (n = 55) {
//     return 516560652
//     } else if (n = 56) {
//     return 774840978
//     } else if (n = 57) {
//     return 1162261467
//     } else if (n = 58) {
//     return 1549681956
//     }
// }

var integerBreakAllAnswersSwitch = function(n) {
switch (n) {
case 2:
return 1
case 3:
return 2
case 4:
return 4
case 5:
return 6
case 6:
return 9
case 7:
return 12
case 8:
return 18
case 9:
return 27
case 10:
return 36
case 11:
return 54
case 12:
return 81
case 13:
return 108
case 14:
return 162
case 15:
return 243
case 16:
return 324
case 17:
return 486
case 18:
return 729
case 19:
return 972
case 20:
return 1458
case 21:
return 2187
case 22:
return 2916
case 23:
return 4374
case 24:
return 6561
case 25:
return 8748
case 26:
return 13122
case 27:
return 19683
case 28:
return 26244
case 29:
return 39366
case 30:
return 59049
case 31:
return 78732
case 32:
return 118098
case 33:
return 177147
case 34:
return 236196
case 35:
return 354294
case 36:
return 531441
case 37:
return 708588
case 38:
return 1062882
case 39:
return 1594323
case 40:
return 2125764
case 41:
return 3188646
case 42:
return 4782969
case 43:
return 6377292
case 44:
return 9565938
case 45:
return 14348907
case 46:
return 19131876
case 47:
return 28697814
case 48:
return 43046721
case 49:
return 57395628
case 50:
return 86093442
case 51:
return 129140163
case 52:
return 172186884
case 53:
return 258280326
case 54:
return 387420489
case 55:
return 516560652
case 56:
return 774840978
case 57:
return 1162261467
case 58:
return 1549681956
}
}

// for (let i=0; i < 14; i++) {
//     console.log(integerBreakAllAnswersSwitch(i))
// }

// for (let i=0; i < 14; i++) {
//     console.log(integerBreakAllAnswersOneEquals(i))
// }

//haha just answers is faster



// console.log("=====")
// start = Date.now()
// for (u=0;u<100000000;u++) {
//     for (let i=2; i < 14; i++) {
//         integerBreakSwitch(i)
//     }
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`switch time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    for (let i=2; i < 14; i++) {
        integerBreakIf(i)
    }
}
end = Date.now()
timeElapsed = end - start
console.log(`if time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<100000000;u++) {
//     for (let i=2; i < 14; i++) {
//         integerBreakSwitchNoFloor(i)
//     }
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`switch no floor time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<100000000;u++) {
//     for (let i=2; i < 14; i++) {
//         integerBreakIfNoFloor(i)
//     }
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`if no floor time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    for (let i=2; i < 14; i++) {
        integerBreakAllAnswers(i)
    }
}
end = Date.now()
timeElapsed = end - start
console.log(`all answers time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    for (let i=2; i < 14; i++) {
        integerBreakAllAnswersDoubleEquals(i)
    }
}
end = Date.now()
timeElapsed = end - start
console.log(`all answers two equals time: ${timeElapsed} ms`)

// console.log("=====")
// start = Date.now()
// for (u=0;u<100000000;u++) {
//     for (let i=2; i < 14; i++) {
//         integerBreakAllAnswersOneEquals(i)
//     }
// }
// end = Date.now()
// timeElapsed = end - start
// console.log(`all answers one equals time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000000;u++) {
    for (let i=2; i < 14; i++) {
        integerBreakAllAnswersSwitch(i)
    }
}
end = Date.now()
timeElapsed = end - start
console.log(`all answers switch time: ${timeElapsed} ms`)

// 2
// 1 * 1 = 1
// ===
// 3
// 2 * 1 = 2
// ===
// 4
// 2 * 2 = 4
// 3 * 1 = 3
// ===
// 5
// 2 * 3 = 6
// 4 * 1 = 4
// ===
// 6
// 2 * 2 * 2 = 8
// 3 * 3 = 9
// ===
// 7
// 2 * 2 * 3 = 12
// ===
// 8
// 2 * 2 * 2 * 2 = 16
// 3 * 3 *  2 = 18
// 4 * 4 = 16
// ===
// 9
// 3 * 3 * 3 = 27
// 2 * 2 * 2 * 3 = 24
// 5 * 4 = 20
// ===
// 10
// 2 * 2 * 2 * 2 * 2 = 32
// 3 * 3 * 4 = 36
// ===
// 11
// 2 ^4 * 3 = 48
// 3^3 * 2 = 54
// ===
// 12
// 2 ^ 6 = 64
// 3 ^ 4 = 81
// ===
// 13
// 3 ^ 3 * 4 = 112
// 2^5 * 3 = 96
// ===
// 20
// 7 * 7 * 3 * 3 = 441
// 2 ^ 10 = 1024
// 3 ^ 6 
