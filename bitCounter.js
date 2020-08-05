// https://leetcode.com/problems/counting-bits/

var countBits = function(num) {
    let array = []
    let base = [0,1,1,2]
    let count = 0
    let flip = 0
    for (let i=0; i <= num; i++) {
        array.push(base[i%4] + flip)
        count++
        if (count > 3) {
            count = 0
            if (flip === 0) {
                flip = 1
            } else {
                flip = 0
            }
        }
    }

    return array
};

console.log(countBits(2))
console.log(countBits(5))
console.log(countBits(8))

0// 0|| 0
1// 1|| 1
1// 2|| 10
2// 3|| 11
===

1// 4|| 100
2// 5|| 101
2// 6|| 110
3// 7|| 111

1// 8|| 1000
2// 9|| 1001
2// 10|| 1010
3// 11|| 1011
===
2// 12|| 1100
3// 13|| 1101
3// 14|| 1110
4// 15|| 1111
==
1// 16|| 10000
2// 17|| 10001
2// 18|| 10010
3// 19|| 10101
==
2//20 ||10100
3//21 ||10101
3//22 ||10110
4//23 ||10111

2//24 ||11000
3//25 ||11001
3//26 ||11010
4//27 ||11011

3//28 ||11100
4//29 ||11101
4//30 ||11110
5//31 ||11111

1//32 ||100000