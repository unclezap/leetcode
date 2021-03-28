function binomialCalculator(array) {
    let hash = {}

    for (let i = 0; i <= array.length; i++) {
        hash[i] = 0
    }

    games(array, 1, 0)

    function games(array, percentage, wins) {
        if (array.length === 0) {
            return hash[wins] += percentage
        }

        games(array.slice(1), percentage * array[0], wins + 1, "win")
        games(array.slice(1), percentage * (1 - array[0]), wins, "loss")

    }

    // console.log(hash)

    let perc = 0

    for (let i = array.length; i >= 0; i--) {
        perc += hash[i]
        console.log(`Win ${i} games or more: ${100 * perc.toFixed(3)}`)
    }

    return hash
}

function hopper(hashHome, hashOpp, gmsBehind, opp) {
    console.log(opp)
    let homeGms = 0
    let oppGms = 0

    while (hashHome[homeGms]) {
        homeGms++
    }
    homeGms--
    while (hashOpp[oppGms]) {
        oppGms++
    }
    oppGms--

    let hopHash = {}

    for (let i = homeGms + oppGms; i >= 0; i--) {
        hopHash[i] = 0
        hopHash[-i] = 0
    }


    for (let i = 0; i <= homeGms; i++) {
        let homeUpDown = 2 * i - homeGms
        for (let j = 0; j <= oppGms; j++) {
            let oppUpDown = 2 * j - oppGms
            hopHash[homeUpDown - oppUpDown] += hashHome[i] * hashOpp[j]
        }
    }

    for (let i = -1 * (homeGms + oppGms); i <= homeGms + oppGms; i++) {
        if (hopHash[i] === 0) {
            delete hopHash[i]
        } else {
            hopHash[i] = (100 * hopHash[i]).toFixed(1)
        }
    }

    let hopHashMod = {}

    Object.keys(hopHash).forEach(key => {
        hopHashMod[key / 2 - gmsBehind] = hopHash[key]
    })

    let perc = 0

    for (let i = (homeGms + oppGms) / 2 - gmsBehind; i >= -1 * (homeGms + oppGms) / 2 - gmsBehind; i -= 0.5) {
        // console.log(i, hopHashMod[i], 'adaf')
        if (hopHashMod[i]) {
            perc += 1 * hopHashMod[i]
            if (i > 0) {
                console.log(`${i} games or more ahead: ${perc} %`)
            } else if (i === 0) {
                console.log(`Tied or better: ${perc}`)
            } else {
                console.log(`${i} games or fewer behind: ${perc} %`)
            }
        }

    }

    return hopHashMod

    // return [homeGms, oppGms, hashHome]

}

console.log(binomialCalculator([0.612, 0.256, 0.032]))
// console.log(binomialCalculator([0.631, 0.422, 0.467]))
// console.log(binomialCalculator([0.31, 0.44, 0.45]))
// console.log(binomialCalculator([0.454, 0.558, 0.293]))
// console.log(binomialCalculator([0.454, 0.558, 0.293]))

// console.log(binomialCalculator([0.229, 0.118, 0.028,]))
// console.log(binomialCalculator([0.375, 0.118, 0.028,]))
// 0.486, 0.48
// console.log(binomialCalculator([0.486,0.48,0.655,0.689,0.598,0.629,0.557,0.489,0.769,0.505,0.419,0.682,0.54]))
// console.log(binomialCalculator([0.514,0.52,0.586,0.573,0.652,0.589,0.523,0.697,0.416,0.663,0.61,0.401,0.638,0.412]))
// console.log(binomialCalculator([0.56,0.52,0.54,0.45]))
// console.log(binomialCalculator([0.3,0.53,0.44]))
// console.log(binomialCalculator([0.3,0.54,0.47,0.53,0.44]))
// console.log(binomialCalculator([0.7,0.48,0.45,0.54]))
// console.log(binomialCalculator([0.3,0.54,0.47,0.53,0.44,0.7,0.48,0.45,0.54]))
// console.log('========')
// console.log('ESPN')
// console.log('mavs')
let mavs = binomialCalculator([0.70, 0.50, 0.66, 0.41])
// console.log('sas')
// let sas = binomialCalculator([0.69, 0.43, 0.41, 0.69, 0.66, 0.65])
let sas = binomialCalculator([0.40, 0.69, 0.65, 0.64])
// 0-1

// console.log('por')
// let por = binomialCalculator([0.49, 0.33, 0.45, 0.3, 0.58])
let por = binomialCalculator([0.34, 0.45, 0.31, 0.58])
//0-1
// console.log('den')
// let den = binomialCalculator([0.69, 0.41, 0.57, 0.75, 0.74])
let den = binomialCalculator([0.56, 0.75, 0.73])
//1-0
// console.log('gsw')
// let gsw = binomialCalculator([0.55, 0.51, 0.43, 0.68, 0.37])
let gsw = binomialCalculator([0.42, 0.38, 0.69, 0.37])
//0-1
// console.log(binomialCalculator([0.52, 0.75, 0.52]))
console.log('=================')
console.log('=================')
console.log('=================')
console.log('mavs vs sas', hopper(mavs, sas, -0.5, 'vs SAS'))
console.log('mavs vs por', hopper(mavs, por, 1.5, 'vs POR'))
console.log('mavs vs denv', hopper(mavs, den, 2, 'vs DEN'))
console.log('mavs vs gsw', hopper(mavs, gsw, -2, 'vs GSW'))

// console.log(binomialCalculator([0.465,0.476,0.601,0.588]))
// console.log(binomialCalculator([0.479,0.584,0.573]))
// console.log(binomialCalculator([0.479,0.447,0.461,0.584,0.573]))
// console.log(binomialCalculator([0.634,0.648,0.604,0.471]))
// console.log(binomialCalculator([0.479,0.447,0.461,0.584,0.573,0.634,0.648,0.604,0.471]))
// }console.log(binomialCalculator([0.582,0.535,0.62,0.651,0.776,0.597,0.676,0.443,0.552,0.705,0.527]))
// console.log(binomialCalculator([0.68,0.652,0.375,0.393,0.757,0.688,0.688,0.611,0.527,0.683]))
// console.log(binomialCalculator([0.465,0.445,0.455,0.584,0.573]))
// console.log(binomialCalculator([0.645,0.725,0.465,0.445,0.455,0.584,0.573,0.709,0.584,0.509,0.677,0.411]))
// console.log(binomialCalculator([0.49,0.34,0.7,0.8,0.34,0.6,0.21,0.82,0.32]))

// console.log(binomialCalculator([0.583,0.682,0.577,0.661,0.554,0.633,0.352,0.577,0.514]))
// console.log(binomialCalculator([0.82,0.55,0.69,0.49,0.32,0.31,0.57,0.76]))
// console.log(binomialCalculator([0.71,0.83,0.53,0.7]))
// console.log(binomialCalculator([0.71,0.83,0.53,0.7,0.44,0.32,0.33,0.57,0.77]))
// console.log(binomialCalculator([0.72,0.83,0.52,0.69,0.44,0.32,0.33,0.58,0.77]))
// console.log(binomialCalculator([0.64,0.72,0.83,0.52,0.69,0.44,0.32,0.33]))
// console.log(binomialCalculator([0.64,0.72,0.83,0.52,0.69]))
// console.log(binomialCalculator([0.80,0.68,0.66,0.72,0.84,0.5,0.69,0.44,0.33,0.33,0.59,0.77]))
// console.log(binomialCalculator([0.66,0.72,0.84,0.5,0.69,0.44,0.33,0.33,0.59,0.77]))
// console.log(binomialCalculator([0.68,0.66,0.72,0.84,0.5,0.69,0.44,0.33,0.33,0.59,0.77]))
// console.log(binomialCalculator([0.80,0.68,0.66,0.72,0.84,0.5,0.69]))
// console.log(binomialCalculator([0.66,0.72,0.84,0.5,0.69]))
// console.log(binomialCalculator([0.68,0.66,0.72]))
// console.log(binomialCalculator([.68,.65,.72]))
// console.log(binomialCalculator([0.44,0.33,0.33]))
// console.log(binomialCalculator([0.59,0.77]))


// console.log(binomialCalculator([0.6, 0.69, 0.49, 0.61]))
// console.log('============')
// console.log('ESPN')

// console.log(binomialCalculator([0.694,0.647,0.67,0.536,0.425,0.358,0.669,0.701]))
// console.log(binomialCalculator([0.643,0.686,0.635,0.662]))
// console.log(binomialCalculator([0.631,0.679,0.623,0.656,0.499,0.411,0.359,0.678,0.695]))
// console.log(binomialCalculator([0.631,0.679,0.517,0.185,0.426]))
// console.log(binomialCalculator([0.545,0.631,0.679,0.623,0.656,0.499,0.411,0.359]))
// console.log(binomialCalculator([0.545,0.631,0.679,0.623,0.656]))
// console.log(binomialCalculator([0.772,0.654,0.551,0.62,0.677,0.556,0.638,0.489,0.418,0.348,0.666,0.695]))
// console.log(binomialCalculator([0.551,0.62,0.677,0.556,0.638,0.489,0.418,0.348,0.666,0.695]))
// console.log(binomialCalculator([0.654,0.551,0.62,0.677,0.556,0.638,0.489,0.418,0.348,0.666,0.695]))
// console.log(binomialCalculator([0.772,0.654,0.551,0.62,0.677,0.556,0.638]))
// console.log(binomialCalculator([0.551,0.62,0.677,0.556,0.638]))
// console.log(binomialCalculator([0.654,0.551,0.62]))
// console.log(binomialCalculator([.658,.55,.629]))
// console.log(binomialCalculator([0.489,0.418,0.348]))
// console.log(binomialCalculator([0.556,0.638]))

// console.log(7*(.772+.654+.551+.62+.677+.556+.638)/7)