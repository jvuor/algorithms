const insertionSort = require('./insertionSort')
const builtInSort = require('./builtinSort')
const mergeSort = require('./mergeSort')
const mergeInsertionSort = require('./mergeInsert')

randomArray = () => {
  // creates a random array for testing purposes.
  // could use sort.createArray instead
  let newArray = []
  for (let i = 0; i < 10000; i++) {
    newArray[i] = Math.random() * 10000
  }

  return newArray
}

const checkSortedArray = (array) => {
  // checks that the array has been sorted, returns a boolean
  let result = true
    
  for (let i = 1; i < array.length; i++) {
    if (array[i-1] > array[i]) {
      result = false
    }
  }

  return result
}

describe('Check test logic', () => {
  // checking that the basic assumptions in our tests are correct:
  // -checkSortedArray does what it's supposed to do,
  // -sorting algorithms actually return sorted results
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

  test('mergeSort works', () => {
    expect(mergeSort(testUnsorted)).toEqual(testSorted)
  })

  test('merge insertion sort works', () => {
    expect(mergeInsertionSort(testUnsorted)).toEqual(testSorted)
  })
})

describe('sort tests', () => {
  // tests with a realistic array
  let testArray
  
  beforeEach(() => {
    testArray = randomArray()
  })

  test('test array is not sorted by default', () => {
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

  test('merge sort works', () => {
    const sortedArray = mergeSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })

  test('merge insertion sort works', () => {
    const sortedArray = mergeInsertionSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })
})