// https://leetcode.com/problems/validate-ip-address/submissions/

var validIPAddress = function(IP) {
    let ipValues = IP.split('.')

    if (ipValues.length === 4) {
        for (let i=0; i < 4; i++) {
            if (ipValues[i].match(/[0-9]/g) === null) {
                return "Neither"
            }
            if (ipValues[i].length === 0 || ipValues[i][0] === "0" || ipValues[i].split('').length !== ipValues[i].match(/[0-9]/g).length || ipValues[i] < 0 || ipValues[i] > 255) {
                return "Neither"
            }
        }
        return "IPv4"
    }

    ipValues = IP.split(':')
    
    if (ipValues.length === 8) {
        for (let i=0; i < 8; i++) {
            for (let i=0; i < 8; i++) {
                console.log(ipValues[i])
                if (ipValues[i].match(/[0-9]|[abcdef]/gi) === null) {
                    return "Neither"
                }
                if (ipValues[i].split('').length !== ipValues[i].match(/[0-9]|[abcdef]/gi).length) {
                    return "Neither"
                }
                // if (ipValues[i] === "85a3") {
                //     console.log(ipValues[i].match(/0/g).length)
                // }
                if (ipValues[i].length > 1 && ipValues[i].split('').join('') === ipValues[i].match(/0/g).join('')) {
                    return "Neither"
                }
                
            }
        }
        return "IPv6"
    }
    return "Neither"
};