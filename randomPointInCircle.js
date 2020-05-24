//https://leetcode.com/problems/generate-random-point-in-a-circle/

// sin = opposite/hyp
// cos = adjacent/hypotenuse

//finds a random direction to shoot off from the center and a random distance to go within the unit circle
function umHere () {
    let hypotenuse = Math.random()
    let radians = Math.random() * 2 * Math.PI

    let x = Math.cos(radians) * hypotenuse
    let y = Math.sin(radians) * hypotenuse

    return [x,y]
}

for (let i=0;i < 10; i++) {
    console.log(umHere())
}