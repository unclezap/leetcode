// https://leetcode.com/problems/3sum/

function threeSum(nums) {
	let hash = {}
    let prime = 2
    let verifyHash = {}
    let resultArray = []
    
    for (let i=0; i<nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = prime
            prime++
            while (!isPrime(prime)) {
                prime++
            }
        }    
    }

    for (let i=0; i<nums.length;i++) {
        for (let j=i+1; j < nums.length; j++) {
            for (let k=j+1; k < nums.length; k++) {
                if (nums[i]+nums[j]+nums[k] === 0) {
                    if (!verifyHash[hash[nums[i]]*hash[nums[j]]*hash[nums[k]]]) {
                        verifyHash[hash[nums[i]]*hash[nums[j]]*hash[nums[k]]] = true
                        resultArray.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }
    }
    
    
    return resultArray
};

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}