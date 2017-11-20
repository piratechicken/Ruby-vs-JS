const Path = require('path')

let d = new Date()

let date = d.getDate()
let month = d.getMonth()
month++
let year = d.getFullYear()

let formattedDate = `${date}/${month}/${year}`

console.log(d)
console.log(formattedDate)

const filePath = Path.join(__dirname, 'timestamp.txt')

// 1. Work out the date in 100 days, and display it
// 2. Work out the date 1000 days ago in the past, and display it