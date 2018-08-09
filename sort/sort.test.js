const sort = require('./sort')
const insertionSort = require('./insertionSort')
const builtinSort = require('./builtinSort')
const mergeSort = require('./mergeSort')
jest.mock('./insertionSort')
jest.mock('./builtinSort')
jest.mock('./mergeSort')

describe('testing the algorithm test platform', () => {
  test('countTime returns correct time since last call', done => {
    const initialTime = sort.countTime()
    setTimeout(() => {
      const nextTime = sort.countTime()
      expect(nextTime[0] === 1).toBe(true)
      done()
    }, 1000)
  })

  test('createArray creates an array of desired length', () => {
    const array1 = sort.createArray(5)
    expect(array1.length).toBe(5)
    const array2 = sort.createArray(7786)
    expect(array2.length).toBe(7786)
  })

  test('createArray elements are numbers', () => {
    const array = sort.createArray(100)
    array.forEach((element) => {
      expect(typeof element).toBe('number')
      expect(element >= 0).toBe(true)
      expect(element < 10000).toBe(true)
    })
  })

  test('runTest calls the correct algorithms with expected arrays', () => {

    const testLength = 5
    sort.runTest(testLength)

    const mockFunctions = [ insertionSort, mergeSort, builtinSort ]

    mockFunctions.forEach( mockFunction => {
      //check that the mock function has been called exactly once
      expect(mockFunction.mock.calls.length).toBe(1)

      //check that the array that was sent to the function is correct
      const calledArray = mockFunction.mock.calls[0][0]
      expect(calledArray.length).toBe(testLength)
      for (let i = 0; i < testLength; i++) {
        expect(typeof calledArray[i]).toBe('number')
      }
    })
  })

  test('minArrayIndex returns the correct index', () => {
    const testArray1 = [[0, 99], [3, 0], [1, 99], [0, 80], [-3, 81]]
    const result = sort.minArrayIndex(testArray1)
    expect(result).toBe(4)
  })
})