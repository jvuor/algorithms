const insertionSort = (array) => {
  var len
  try {
    len = array.length
  } catch (err) {
    console.log('invalid array in insertionSort()')
    len = null
  }

  for (var i = 1; i < len; i++) {
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