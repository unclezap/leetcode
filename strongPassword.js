var strongPasswordChecker = function(s) {
    if (s.length <= 3) {
        return 6 - s.length
    }
    
    // if (s.length === 3) {
    //     if (s[0] === s[1] && s[1] === s[2]) {
    //     return 4
    //     } else {
    //         return 3
    //     }
    // }
    
    let digits = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
    }
    
    let letters = {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true,
        h: true,
        i: true,
        j: true,
        k: true,
        l: true,
        m: true,
        n: true,
        o: true,
        p: true,
        q: true,
        r: true,
        s: true,
        t: true,
        u: true,
        v: true,
        w: true,
        x: true,
        y: true,
        z: true
    }
    
    let hasDigit = false
    let hasLowerCase = false
    let hasUpperCase = false
    // let map = new Map()
    let trips = 0
    let errors = 0
    let tripMax = 0
    
    for (let i=0; i < s.length; i++) {
        if (digits[s[i]]) {
            hasDigit = true
        } else if (letters[s[i].toLowerCase()]) {
            if (s[i].toLowerCase() === s[i]) {
                hasLowerCase = true
            } else {
                hasUpperCase = true
            }
        }
        
        if (i > 1 && s[i] === s[i-1] && s[i-1] === s[i-2]) {
           if (trips === 0) {
               trips = 3
           } else {
               trips++
               if (trips > tripMax) {
                   tripMax = trips
               }
           }
            if (trips % 3 === 0) {
                errors++
            }
        } else {
            trips = 0
        }
    }
    
    if (errors >= 3) {
        return errors
    }
    
    let otherErrors = 0
    
    if (!hasDigit) {
        otherErrors++
    }
    if (!hasLowerCase) {
        otherErrors++
    }
    if (!hasUpperCase) {
        otherErrors++
    }
    
    if (s.length > 20) {
        let lengthError = s.length - 20
        // console.log(errors)
        errors -= lengthError
        return Math.max(errors, otherErrors + lengthError, tripMax - lengthError - otherErrors)
    }
    
    return Math.max(errors,otherErrors, 6 - s.length)
//     let hasTrips = []
//     let hasTripsIndex = 0
    
//     let errors = 0
//     if (s.length < 6) {
//         errors += 6 - s.length
//     } else if (s.length > 20) {
//         errors += s.length - 20
//     }
    
//     
    
//     errors
    // console.log(map)
    // let x = 3
    // map.set('a',[...map.get('a'), x])
    // // console.log(map.get('a').push('a'))
    return errors
};