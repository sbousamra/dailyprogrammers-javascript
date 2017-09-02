const lodash = require('lodash');

const possiblePlacings = lodash.range(0, 101)
const placement = 27
const placesMyDogDidntWin = lodash.filter(possiblePlacings, (place) => {
  if (place !== placement) {
    return lodash.toString(place)
  }
})

function formatPlacings(place) {
  if (lodash.endsWith(place, '1')) {
    return place + 'st'
  } else if (lodash.endsWith(place, '2')) {
    return place + 'nd'
  } else if (lodash.endsWith(place, '3')) {
    return place + 'rd'
  } else {
    return place + 'th'
  }
}

const result = lodash.map(placesMyDogDidntWin, (place) => {
  return formatPlacings(place)
})

console.log(result)