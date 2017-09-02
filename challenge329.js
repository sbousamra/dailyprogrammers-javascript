const lodash = require('lodash');

const numbers = Array.from(Array(120).keys())
const oddNumbers = lodash.filter(numbers, (current, index) => {
  if (index % 2 !== 0) {
    return current
  }
})

function getLuckyNumbers(input, checker, inc) {
  const newLuckyNumbers = []
  if (checker < oddNumbers.length) {
    lodash.forEach(input, (number, index) => {
      if ((index + 1) % checker !== 0) {
        newLuckyNumbers.push(number)
      }
    })
    const newChecker = newLuckyNumbers[inc + 1]
    getLuckyNumbers(newLuckyNumbers, newChecker, inc + 1)
    console.log(newLuckyNumbers)
  } else {
    return newLuckyNumbers
  }
}
getLuckyNumbers(oddNumbers, oddNumbers[1], 1)