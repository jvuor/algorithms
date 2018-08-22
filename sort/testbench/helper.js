const createArray = (len) => {
  // creates an array of desired length, filled with random numbers
  let newArray = []
  for (let i = 0; i < len; i++) {
    newArray[i] = Math.random() * 10000
  }

  return newArray
}

const minArrayIndex = (array) => {
  // finds the index of the shortest time in an array of hrtime tuples
  // returns the index as a number
  let minIndex = null
  let minResult = [+Infinity, +Infinity]

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] < minResult[0] || (array[i][0] === minResult[0] && array[i][1] < minResult[1])) {
      minResult = array[i]
      minIndex = i
    }
  }

  if (minIndex === null) {
    // no error handling - this is hardly a critical error in itself,
    // but obviously something has gone wrong somewhere else
    throw new Error('Error in minArrayIndex')
  } else {
    return minIndex
  }
}

const checkSortedArray = (array) => {
  // checks that the array has been sorted, returns a boolean
  let result = true

  if (!array) { return false }

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      result = false
    }
  }

  return result
}

module.exports = { createArray, minArrayIndex, checkSortedArray }
