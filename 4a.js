function wordCount(string) {
  let words = string.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').split(' ').filter(word => word !== 'the' && word !== 'or' && word !== 'and' && word !== 'of')
  return words.length
}
// replace(/\W/g, '').
function wordFrequency(string) {
  let words = string.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').split(' ').filter(word => word !== 'the' && word !== 'or' && word !== 'and' && word !== 'of')
  let wordCounts = new Object
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })
  return wordCounts
}

function topFiveWords(string) {
  wordCounts = wordFrequency(string)
  topFive = []
  for (var word in wordCounts) {
    topFive.push([word, wordCounts[word]])
  }

  topFive.sort(function(a, b) {
    return b[1] - a[1]
  }
)
return topFive.slice(0,5)
}

// sentence = 'the brown fox of Melbourne jumps over the lazy dog and cat or cats'
sentence = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.'

// console.log(wordFrequency(sentence))
console.log(topFiveWords(sentence))



/*
Challenges:
1. Skip conjuctions (and / or / the / of) from `wordFrequencyTable` function
2. Skip conjuctions (and / or / the / of) from `wordCount` function
3. Change the sentence to the "It was the best of times…" chapter 1 excerpt from here: https://en.wikiquote.org/wiki/A_Tale_of_Two_Cities
4. Find the five most popular words using the result of `wordFrequencyTable`
*/