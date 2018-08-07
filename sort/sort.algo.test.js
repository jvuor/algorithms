const insertionSort = require('./insertionSort')
const builtInSort = require('./builtinSort')

randomArray = (array) => {
  let result = []
  for (let i = 0; i < 10000; i++) {
    result[i] = Math.random() * 10000
  }

  return result
}

const checkSortedArray = (array) => {
  let result = true
    
  for (let i = 1; i < array.length; i++) {
    if (array[i-1] > array[i]) {
      result = false
    }
  }

  return result
}

describe('Check test logic', () => {
  let testUnsorted
  let testSorted

  beforeEach(() => {
    testUnsorted = [4, 2, 3, 1]
    testSorted = [1, 2, 3, 4]
  })

  test('checkSortedArray works', () => {
    expect(checkSortedArray(testSorted)).toBe(true)
    expect(checkSortedArray(testUnsorted)).toBe(false)
  })

  test('insertionSort works', () => {
    expect(insertionSort(testUnsorted)).toEqual(testSorted)
  })

  test('JS sort function wrapper works', () => {
    expect(builtInSort(testUnsorted)).toEqual(testSorted)
  })
})

describe('sort tests', () => {
  let testArray
  
  beforeEach(() => {
    testArray = randomArray()
  })

  test('test array is not sorted before tests', () => {
    const result = checkSortedArray(testArray)
    expect(result).toBe(false)
  })
  test('insertionSort works', () => {
    const sortedArray = insertionSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })
  test('JS sort function wrapper works', () => {
    const sortedArray = builtInSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })
})