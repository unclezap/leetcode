// https://leetcode.com/problems/implement-strstr/submissions/

var strStr1 = function(haystack, needle) {
    if (!haystack || !needle) {
        return 0
    } else {
        for (let i=0; i<haystack.length; i++) {
            if (haystack[i] === needle[0]) {
                let works = true
                for (let j=1; i<needle.length; j++) {
                    if (haystack[i+j] !== needle[j]) {
                        works = false
                        break
                    }
                }
                if (works) {
                    return i
                }
            }
        }
        return -1
    }
};

var strStr2 = function(haystack, needle) {
    if (!needle) {
        return 0
    }
   
    let extra = 0
    if (haystack.indexOf(needle[0]) > -1) {
        while (haystack.length >= needle.length) {
            let i = haystack.indexOf(needle[0])
            if (haystack.slice(i,i+needle.length) == needle) {
                return i + extra
            } else {
                extra += i + 1
                haystack = haystack.slice(i+1)
            }
        }
    }
        
    return -1
};

var strStrLeetcode100 = function(haystack, needle) {
    if (needle == "") return 0;
        let j = 0;
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] == needle[j]) {
                if (j == needle.length - 1) return i-j;
                j++;
            }
            else {
                i -= j, j = 0;
            }
        }
        return -1
    };

    // console.log(strStr1("hello","ll"))
    // console.log(strStr1("aaaaa","bba"))
    // console.log(strStr1("",""))

    // console.log(strStr2("hello","ll"))
    // console.log(strStr2("aaaaa","bba"))
    // console.log(strStr2("",""))

    // console.log(strStrLeetcode100("hello","ll"))
    // console.log(strStrLeetcode100("aaaaa","bba"))
    // console.log(strStrLeetcode100("",""))

    console.log("=====")
    start = Date.now()
    for (u=0;u<10000000;u++) {
        strStr1("hello","ll")
        strStr1("aaaaa","bba")
        strStr1("","")
    }
    end = Date.now()
    timeElapsed = end - start
    console.log(`zeb1 time: ${timeElapsed} ms`)

    console.log("=====")
    start = Date.now()
    for (u=0;u<10000000;u++) {
        strStr2("hello","ll")
        strStr2("aaaaa","bba")
        strStr2("","")
    }
    end = Date.now()
    timeElapsed = end - start
    console.log(`zeb2 time: ${timeElapsed} ms`)

    console.log("=====")
    start = Date.now()
    for (u=0;u<10000000;u++) {
        strStrLeetcode100("hello","ll")
        strStrLeetcode100("aaaaa","bba")
        strStrLeetcode100("","")
    }
    end = Date.now()
    timeElapsed = end - start
    console.log(`leetcode time: ${timeElapsed} ms`)