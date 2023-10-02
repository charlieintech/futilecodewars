// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((a, b) => a * b, 1)
}


//reduce method iterates through the array.
//a = accumulator
//b = current value
// 1 initializes the array the current value at 1