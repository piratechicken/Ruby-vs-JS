function formatOrdinal(number) {
  if (number === 11) { return '11th' }
  else if (number === 12) { return '12th' }
  else if (number === 13) { return '13th' }

  let digit = number % 10
  switch(digit) {
    case 1: return `${number}st`
    case 2: return `${number}nd`
    case 3: return `${number}rd`
    default: return `${number}th`
  }

}

for (i = 1; i < 105; i++) {
  console.log(formatOrdinal(i))
}

// console.log(formatOrdinal(100))
// console.log(formatOrdinal(101))
// console.log(formatOrdinal(102))
// console.log(formatOrdinal(103))
// console.log(formatOrdinal(104))