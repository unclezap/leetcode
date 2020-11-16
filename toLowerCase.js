// https://leetcode.com/problems/to-lower-case/

var toLowerCase = function(str) {
  
    //return str.toLowerCase()  is too easy
    let hash = {
        'A': 'a',
        'B': 'b',
        'C': 'c',
        'D': 'd',
        'E': 'e',
        'F': 'f',
        'G': 'g',
        'H': 'h',
        'I': 'i',
        'J': 'j',
        'K': 'k',
        'L': 'l',
        'M': 'm',
        'N': 'n',
        'O': 'o',
        'P': 'p',
        'Q': 'q',
        'R': 'r',
        'S': 's',
        'T': 't',
        'U': 'u',
        'V': 'v',
        'W': 'w',
        'X': 'x',
        'Y': 'y',
        'Z': 'z'
    }
    
    let returnString = ''
    
    for (let i=0; i<str.length;i++) {
        if (hash[str[i]]) {
            returnString += hash[str[i]]
        } else {
            returnString += str[i]
        }
    }
    
    return returnString
};

//ingenious
var toLowerCaseLeetcode100 = function(str) {

    let s = "";
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        if(code >= 65 && code <= 90) {
           s += String.fromCharCode(96+(code - 64));
            
        } else {
           s += str[i]; 
        }
    }
    return s;
};

var toLowerCaseLeetcodeSecond = function(str) {
    return str.length === 0 ? '' : str.toLowerCase();
};

//wins the brevity award
const toLowerCaseLeetcodeThird = (str) => str.toLowerCase();

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    toLowerCase('Hello')
    toLowerCase('here')
    toLowerCase('LOVELY')
    toLowerCase('The Quick Brown Fox Jumped Over the Lazy Dog')
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    toLowerCaseLeetcode100('Hello')
    toLowerCaseLeetcode100('here')
    toLowerCaseLeetcode100('LOVELY')
    toLowerCaseLeetcode100('The Quick Brown Fox Jumped Over the Lazy Dog')
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    toLowerCaseLeetcodeSecond('Hello')
    toLowerCaseLeetcodeSecond('here')
    toLowerCaseLeetcodeSecond('LOVELY')
    toLowerCaseLeetcodeSecond('The Quick Brown Fox Jumped Over the Lazy Dog')
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    toLowerCaseLeetcodeThird('Hello')
    toLowerCaseLeetcodeThird('here')
    toLowerCaseLeetcodeThird('LOVELY')
    toLowerCaseLeetcodeThird('The Quick Brown Fox Jumped Over the Lazy Dog')
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)