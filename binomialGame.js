function binomialCalculator(array) {
    let hash = {}

    for (let i=0;i<=array.length;i++) {
        hash[i] = 0
    }

    games(array,1,0)

    function games(array,percentage, wins) {
        if (array.length === 0) {
            return hash[wins] += percentage
        }
    
        games(array.slice(1), percentage * array[0], wins + 1, "win")
        games(array.slice(1), percentage * (1-array[0]), wins,"loss")

    }

    console.log(hash)

    let perc = 0

    for (let i=array.length;i>=0;i--) {
        perc += hash[i]
        console.log(`Win ${i} games or more: ${100*perc.toFixed(3)}`)
    }
}

console.log(binomialCalculator([0.80,0.68,0.66,0.72,0.84,0.5,0.69,0.44,0.33,0.33,0.59,0.77]))

console.log('============')
console.log('ESPN')

console.log(binomialCalculator([0.772,0.654,0.551,0.62,0.677,0.556,0.638,0.489,0.418,0.348,0.666,0.695]))

console.log('============')

for(let i=12;i>=0;i--) {
    console.log(i, "-", 12-i, ":", (10+i)/36)
}