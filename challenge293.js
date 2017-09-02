const lodash = require('lodash');

const input = ["white", "orange", "green", "white"]
const mapInput = lodash.map(input, (wire, index) => {
  return [wire, input[index +1]]
})

function rulesOfDisarming(wire, nextWire) {
  if (wire === "white") {
    if (nextWire === "white" || nextWire === "black") {
      return console.log("Goodbye my friends!")
    } else {
      return console.log("Bomb has been defused!")
    }
  } else if (wire === "red") {
    if (nextWire === "green") {
      return console.log("Bomb has been defused!")
    } else {
      return console.log("Goodbye my friends!")
    }
  } else if (wire === "black") {
    if (nextWire === "white" || nextWire === "green" || nextWire === "orange") {
      return console.log("Goodbye my friends!")
    } else {
      return console.log("Bomb has been defused!")
    }
  } else if (wire === "orange") {
    if (nextWire === "red" || nextWire === "black") {
      return console.log("Bomb has been defused!")
    } else {
      return console.log("Goodbye my friends!")
    }
  } else if (wire === "green") {
    if (nextWire === "orange" || nextWire === "white") {
      return console.log("Bomb has been defused!")
    } else {
      return console.log("Goodbye my friends!")
    }
  } else if (wire === "purple") {
    if (nextWire === "purple" || nextWire === "green" || nextWire === "orange" || nextWire === "white") {
      return console.log("Goodbye my friends!")
    } else {
      return console.log("Bomb has been defused!")
    }
  } else {
    return console.log("Houston we have a problem over")
  }
}

const result = lodash.map(mapInput, (wires) => {
  return rulesOfDisarming(wires[0], wires[1])
})