// https://leetcode.com/problems/first-bad-version/

console.log((1+4)/2 % 1 === 0.5)

//first version
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return 1
        } else {
            let binaryTransverse = function(lowerBound,upperBound) {
                if (upperBound - lowerBound === 1) {
                    if (!isBadVersion(lowerBound)) {
                        return upperBound  
                    } else {
                        return lowerBound
                    }
                }
                
                if (!isBadVersion(Math.floor((upperBound + lowerBound)/2))) {
                    return binaryTransverse(Math.floor((upperBound + lowerBound)/2), upperBound)
                } else {
                    return binaryTransverse(lowerBound, Math.floor((upperBound + lowerBound)/2))
                }
            }

            return binaryTransverse(1,n)
        }
    };
};

//sped up
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return 1
        } else {
            let binaryTransverse = function(lowerBound,upperBound) {
                if (upperBound - lowerBound === 1) {
                    if (!isBadVersion(lowerBound)) {
                        return upperBound  
                    } else {
                        return lowerBound
                    }
                }
                
                let middle = (lowerBound + upperBound)/2
                if (middle % 1 === 0.5) {
                    middle += 0.5
                }
                
                if (!isBadVersion(middle)) {
                    return binaryTransverse(middle, upperBound)
                } else {
                    return binaryTransverse(lowerBound, middle)
                }
            }

            return binaryTransverse(1,n)
        }
    };
};

//sped up up
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function binaryTransverse(n, lowerBound=1, upperBound=n) {
            if (upperBound - lowerBound <= 1) {
                if (!isBadVersion(lowerBound)) {
                    return upperBound  
                } else {
                    return lowerBound
                }
            }
                
            let middle = (lowerBound + upperBound)/2
            if (middle % 1 === 0.5) {
                middle += 0.5
            }
                
            if (!isBadVersion(middle)) {
                return binaryTransverse(n, middle, upperBound)
            } else {
                return binaryTransverse(n, lowerBound, middle)
            }
        }
};

//maybe even faster?
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function binaryTransverse(n, lowerBound=1, upperBound=n) {
                
        let middle = (lowerBound + upperBound)/2
        if (middle % 1 === 0.5) {
            middle += 0.5
        }
                
        if (!isBadVersion(middle)) {
            return binaryTransverse(n, middle, upperBound)
        } else {
            if (upperBound - lowerBound <= 1) {
                if (!isBadVersion(lowerBound)) {
                    return upperBound  
                } else {
                    return lowerBound
                }
            }
            return binaryTransverse(n, lowerBound, middle)
        }
    }
};