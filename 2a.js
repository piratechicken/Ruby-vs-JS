let carrotLengthsFeet = [2, 3.4, 1.2, 0.4, 0.9, 2.9]
const minLengthFeet = 1.5
let legalCarrotInFeet = []

  carrotLengthsFeet.forEach((lengthFeet) => {
  if (lengthFeet < minLengthFeet) {
    console.log(`The carrot is not long enough at ${lengthFeet}`)
  } 
  else {
    console.log(`The carrot is an OK length at ${lengthFeet}`)
    legalCarrotInFeet.push(lengthFeet)
  }
}
)

console.log(`There are ${legalCarrotInFeet.length} legal carrots`)

let legalCarrotInCm = legalCarrotInFeet.map((feet) => {
  return Math.round(feet * 30.48)
})

console.log(legalCarrotInCm)

legalCarrotInFeet.forEach((length) => {
  return console.log(0.33*length)
})

let legalCarrotInYards = legalCarrotInFeet.map((length) => {
  return 0.33*length
})

console.log(legalCarrotInYards)

let longestCarrot = Math.max(...legalCarrotInCm)
console.log(longestCarrot)


let sortedLegalCarrotLengthInCm = legalCarrotInCm.sort(function(a, b) {
  return b - a
}
)

console.log(sortedLegalCarrotLengthInCm)

let total = legalCarrotInCm.reduce(function(sum, value) {
  return sum + value
}, 0
) 

let avLength = total / legalCarrotInCm.length

console.log(avLength)

/*

Challenges:
1. Convert the lengths to yards using `.each` (.rb) / `.forEach` (.js), and output them
2. Convert the lengths to yards using `.map` (.rb) / `.map` (.js), and output them
3. Find the longest fish, and output it
4. Create a sorted copy of the centimetre lengths array, and output it
5. Find average fish length in centimetres

*/