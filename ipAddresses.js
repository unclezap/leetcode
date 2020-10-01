// https://leetcode.com/problems/validate-ip-address/submissions/

var validIPAddress = function(IP) {
    let ipValues = IP.split('.')

    if (ipValues.length === 4) {
        for (let i=0; i < 4; i++) {
            if (ipValues[i].match(/[0-9]/g) === null) {
                return "Neither"
            }
            if (ipValues[i].length === 0 || ipValues[i].split('').length !== ipValues[i].match(/[0-9]/g).length || ipValues[i] < 0 || ipValues[i] > 255) {
                return "Neither"
            }
            if (ipValues[i].length > 1 && ipValues[i][0] === "0") {
                return "Neither"
            }
            
        }
        return "IPv4"
    }

    ipValues = IP.split(':')
    
    if (ipValues.length === 8) {
            for (let i=0; i < 8; i++) {
                if (ipValues[i].length > 4) {
                    return "Neither"
                }
                if (ipValues[i].match(/[0-9]|[abcdef]/gi) === null) {
                    return "Neither"
                }
                if (ipValues[i].split('').length !== ipValues[i].match(/[0-9]|[abcdef]/gi).length) {
                    return "Neither"
                }
                if (ipValues[i].length > 1 && ipValues[i][0] == 0) {
                    let allZeros = true
                    for (let j=1; j < ipValues[i].length; j++) {
                        if (ipValues[i][j] !== '0') {
                            allZeros = false
                            break
                        }
                    }
                    // if (allZeros) {
                    //         return "Neither"
                    // }
                }
            }
        return "IPv6"
    }
    
    return "Neither"
};