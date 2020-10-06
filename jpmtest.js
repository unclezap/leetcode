    //apparently it's just https://leetcode.com/problems/decode-ways/
    
    lines = ['12','123','1224','1234','1324', '13225']
    let answers = []
    // for (let i=0; i< lines.length; i++) {
    //     let cases = 1
    //     let extraCases = 0
    //     let prev = false
        
    //     for (var j=lines[i].length - 2; j>=0; j--) {
    //       if (lines[i][j] == 1 || lines[i][j] == 2) {
    //         cases *= 2
    //         extraCases *= 2

    //         if (j !== 0) {
    //             if (lines[i][j-1] == 1 || lines[i][j-1] == 2) {
    //                 extraCases +=2
    //                 j--
    //                 cases--
    //             }
    //         }
    //       }
    //     }
    //     answers.push(cases + extraCases)
    // }

    for (let i=0; i< lines.length; i++) {
        let cases = 1
        let extraCases = 0
        let prev = false

        for (let j=0; j < lines[i].length - 1; j++) {
            if (lines[i][j] == 1 || lines[i][j] == 2) {
                if (lines[i][j-1] == 1 || lines[i][j-1] == 2) {
                    if (!prev) {
                        cases *= 2
                        prev = false
                    } else {
                        prev == true
                    }
                    cases++
                } else {
                    cases *= 2
                }
            }
        }
        answers.push(cases)
    }

    console.log(answers)


    // 1 2 2 4
    // 1 2 24
    // 1 22 4
    // 12 2 4
    // // 12 24

    // 1 2 3 4
    // 12 3 4
    // 1 23 4




    // 1 3 2 4
    // 1 3 24
    // 13 2 4
    // 13 24

    // 1 3 2 2 5
    // 13 2 2 5
    // 13 22 5
    // 13 2 25
    // 1 3 22 5
    // 1 3 2 25

    //1 3 2 2 5
    //1 3 2 25
    //1 3 22 5
    //13 2 25
    //13 22 5
    //13 2 2 5

    2222
    2 2 2 2
    22 2 2
    2 22 2
    2 2 22
    22 22


    2 2 2 2
    2 2 22
    2 22 2
    22 2 2
    22 22

    2 2 2 2 2
    2 2 2 22
    2 2 22 2
    2 22 2 2
    2 22 22
    22 2 2 2
    22 2 22
    22 22 2

    123123
    1 2 3 1 2 3
    1 2 3 1 23
    1 2 3 12 3
    1 23 1 2 3
    1 23 1 23
    1 23 12 3
    12 3 1 2 3
    12 3 1 23
    12 3 12 3

    var numDecodings = function(s) {
        if (s[0] == 0) {
            return 0        
        }
    
        if (s[s.length - 1] == 0) {
            if (s[s.length - 2] > 2) {
                return 0
            }
        }
            
        let cases = 1
        let lock = false
        let extraCases = 0
        
        for (let i=s.length - 2; i >= 0; i--) {
            switch (parseInt(s[i])) {
                case 0:
                    if (s[i-1] > 2 || s[i-1] == 0) {
                        return 0
                    }
                    break;
                case 2:
                    if (s[i+1] > 6) {
                        break;
                    }
                case 1:
                    if (!lock) {
                        if (s[i+1] == 0) {
                            if (i > 0) {
                                extraCases--
                            }
                        } else {
                            cases *= 2
                        }
                        lock = true
                    } else {
                        // extraCases++
                        if (cases > 2) {
                            cases *= 2
                        } else {
                            cases++
                        }
                        lock = false
                    }
                    break;
                default:
                    lock = false                
            }
        }
        console.log(cases)
        return cases
        // return cases + extraCases
    };