const { runTest } = require('./testbench/sort')

// running a number of sorting tests with different size arrays
runTest(10)
runTest(1000)
runTest(100000)
