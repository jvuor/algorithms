// Insertion sorting algorithm from ItA page 18

const insertionSort = (array) => {
  var startTime = process.hrtime()
  var len
  try {
    len = array.length
  } catch (err) {
    console.log('invalid array in insertionSort()')
    len = null
  }

  for (var i = 1; i < len; i++) {
    if(process.hrtime(startTime)[0] >= 15) {
      // times out after 15 seconds
      // this check increases the algorithm run time, but not massively
      return false
    }
    key = array[i]
    var j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = key
  }

  return array
}

module.exports = insertionSort