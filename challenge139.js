const lodash = require('lodash');

const input = ['The quick brown fox jumps over the lazy dog.', 
  'Pack my box with five dozen liquor jugs.', 
  'Saxophones quickly blew over my jazzy hair.'
]
const mapInput = lodash.map(input, (sentence) => {
  return pangramCheck(lodash.lowerCase(sentence))
})

function pangramCheck(sentence) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const formatSentence = lodash.map(alphabet, (char) => {
    return lodash.includes(sentence, char)
  })
  if (lodash.includes(formatSentence, false)) {
    return false
  } else {
    return true
  }
}
console.log(mapInput)
