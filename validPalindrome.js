/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let uniHash = {
        " ": false,
        "!": false,
        "\"": false,
        "#": false,
        "$": false,
        "%": false,
        "&": false,
        "'": false,
        "(": false,
        ")": false,
        "*": false,
        "+": false,
        ",": false,
        "-": false,
        ".": false,
        "/": false,
        ":": false,
        ";": false,
        "<": false,
        "=": false,
        ">": false,
        "?": false,
        "@": false,
        "[": false,
        "]": false,
        "^": false,
        "_": false.
        "\`": false,
        "\\": false,
        "{": false,
        "|": false,
        "}": false,
        "~": false
    }
    s = s.toLowerCase()
    let endCount = 1
    let i=0
    
    while (i < s.length - endCount) {
        while (s[i] === " ") {
            i++
        }
        while (s[s.length - endCount] === " ") {
            endCount++
        }
        console.log(s[i], s[s.length - endCount])
        if (s[i] !== s[s.length - endCount]) {
            return false
        }
        i++
        endCount++
    }
    return true
};