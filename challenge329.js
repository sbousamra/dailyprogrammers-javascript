const numbers = Array.from(Array(120).keys())
const oddNumbers = numbers.reduce((acc, current, index) => {
  if (index % 2 === 0) {
    return acc
  } else {
    acc.push(current)
    return acc
  }
}, [])

function getLuckyNumbers(input, checker, inc) {
  const newLuckyNumbers = []
  if (checker < oddNumbers.length) {
    input.map((number, index) => {
      if ((index + 1) % checker !== 0) {
        newLuckyNumbers.push(number)
      }
    })
    const newChecker = newLuckyNumbers[inc + 1]
    console.log(newLuckyNumbers)
    getLuckyNumbers(newLuckyNumbers, newChecker, inc + 1)
  } else {
    return newLuckyNumbers
  }
}
getLuckyNumbers(oddNumbers, oddNumbers[1], 1)