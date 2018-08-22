// Insertion sorting algorithm from ItA page 18

const insertionSort = (array) => {
  let startTime = process.hrtime()
  let len
  try {
    len = array.length
  } catch (err) {
    console.log('invalid array in insertionSort()')
    len = null
  }

  for (let i = 1; i < len; i++) {
    if (process.hrtime(startTime)[0] >= 15) {
      // times out after 15 seconds
      // this check increases the algorithm run time, but not massively
      return false
    }
    let key = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = key
  }

  return array
}

module.exports = insertionSort
