// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

const fibonacci = function(memberOfSequence) {
        let array = [1, 1] // [1, 1, 2, ]
        for (i = 1; i <= memberOfSequence; i++) {
            result = array[i] + array[i - 1];
            array.push(result);
        }

    // Report specific member of the Fibonacci sequence
    return array[memberOfSequence - 1]

    };

fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8

// Do not edit below this line
module.exports = fibonacci;
