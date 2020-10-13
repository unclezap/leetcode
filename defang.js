// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
    let returnAddress = ""
    
    for (let i=0; i < address.length; i++) {
    
        if (address[i] === ".") {
           returnAddress += "[.]"
       } else {
           returnAddress += address[i]
       }
        
    }
    
    return returnAddress
};

//of course, regex
const defangIPaddrLeetcode100 = function(address) {
    let result = ""
   
    result = address.replace(/\./g, "[.]")
   
    return result
};

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    defangIPaddr("255.100.50.0")
    defangIPaddr("1.1.1.1")
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    defangIPaddrLeetcode100("255.100.50.0")
    defangIPaddrLeetcode100("1.1.1.1")
}
end = Date.now()
timeElapsed = end - start
console.log(`third time: ${timeElapsed} ms`)