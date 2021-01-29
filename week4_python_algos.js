////// Week 4 Algos - Recursion (python using Javascript) \\\\\\

/// Sigma Function (Recursion)
function sigma(num) {
    // takes in a number ; adds all numbers in a sequence
    // EX: sigma(5) == 5+4+3+2+1                    == 15
    if(num === 1) {
        return 1;
    }
    return num + sigma(num - 1);
}

// Asnwer
function sigma(n){
    if(n===1) {
      return 1;
    } else {
      return n + sigma(n-1);
    }
  }
  
  // console.log(sigma(5));

  // Iterative Sigma Function
function interativeSigma(num) {
    var runner = num;
    var sum = 0;
    while(num > 0) {
        sum += runner;
        runner --;
    }
    return sum;
}

// NOTE THAT THESE 2 ACHIEVE THE SAME THING, BUT ONE IS RECURSIVE AND THE OTHER ITERATIVE

// Factorial Function (Recursion)
function factorial(num) {
    // takes in a number ; multiplies all numbers in a sequence
    // EX: factorial(8) == 8*7*6*5*4*3*2*1 == 40320
}
// Answer
function factorial(n){
    if(n===1) {
      return 1;
    } else {
      return n * factorial(n-1);
    }
  }
  
  // console.log(factorial(5));

// Fibonacci Function (Recursion)
function fibonacci(num) {
    // takes in a number ; ea number in the sequence is equal to the sum of the previous 2 ; find number at location in sequence
    // EX: fibonacci sequence == 1, 1, 2, 3, 5, 8, etc.
    // EX: fibonacci(6) == 8
}
// Answer
function fibonacci(n){
    if(n <= 1) {
      return 1;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(3));
// 0 1 1 2 3 5 8 13 21 34 ...

// Binary Search (Recursion)
//given a sorted array of integers and a target integer, recursively look through
//the array to check if the array contains the target value
//return true or false
//([1,3,5,6], 4) -> false
//([1,2,3,4,5,6,7,8,9,10,12,13], 10)) -> true
//don't forget your base case!
function binarySearch(arr, target){
}
// Answer
function binarySearch(arr, target){
    if(arr.length == 1){
        return arr[0] == target;
    }
    var mid = Math.floor((arr.length) / 2)
    if(target == arr[mid]){
        return true
    }
    if(target < arr[mid]){
        return binarySearch(arr.slice(0, mid), target)
    }
    else{
        return binarySearch(arr.slice(mid, arr.length), target)
    }
}

// inOrderSubset (Recursion)
//Given a string, return an array with every possible
//in-order character subset of the given string
//"abc" -> ["","c","b","bc","a","ac","ab", "abc"]
//"abcde"
function inOrderSubset(str){
}
//Answer
function helperFunc(str, sets){
    sets[str] =  str;
    if(str.length <= 0)
        return sets;
    for(let i = 0; i < str.length; i++){
        let substring = str.slice(0, i) + str.slice(i+1, str.length);
        sets = helperFunc(substring, sets);
    }
    return sets;
}

function inOrderSubset(str){
    sets = {};
    sets = helperFunc(str, sets);
    return Object.keys(sets);
}

console.log(inOrderSubset("abcdefghijklmnop"));


// Flood Fill (Recursion) Change a group of numbers in a matrix
function filler(matrix, x, y, prevNum, number){
    // base case, logic, and recursive
}

function floodFill(matrix, x , y, number){
  //calls on filler method
}

var matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1],  
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
]
floodFill(matrix, 4, 4, 8)

                         //  y
                         //  |
// var matrix = [
//     [1, 1, 1, 1, 1, 1, 1, 1],  <-- x
//     [1, 1, 1, 1, 1, 1, 0, 0],
//     [1, 0, 0, 1, 1, 0, 1, 1],
//     [1, 8, 8, 8, 8, 0, 1, 0],
//     [1, 1, 1, 8, 8, 0, 1, 0],
//     [1, 1, 1, 8, 8, 8, 8, 0],
//     [1, 1, 1, 1, 1, 8, 1, 1],
//     [1, 1, 1, 1, 1, 8, 8, 1],
// ]

//Answer
function filler(matrix, x, y, prevNum, number){
    //  BASE CASE
    if(x < 0 || y < 0 || x >= matrix.length || y >= matrix.length || matrix[x][y] != prevNum || matrix[x][y] === number) {
        // if the x and y coordinates are outside of the matrix
        // if the number we are on IS NOT the one we want to swap, keep moving
        // if the number we are on IS the number we want to swap to, keep moving because there's no change

        return
    }
    //  LOGIC / SWITCH THE NUMBA
    matrix[x][y] = number;

    //  RECURSION CALL FOR S, N, E, W

    filler(matrix, x+1, y, prevNum, number);
    filler(matrix, x-1, y, prevNum, number);
    filler(matrix, x, y+1, prevNum, number);
    filler(matrix, x, y-1, prevNum, number);

    
}

function floodFill(matrix, x , y, number){
    //  CALL ON FILLER FUNCTION
    var prevNum = matrix[x][y];
    filler(matrix, x, y, prevNum, number);
}

var matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1],  
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
]

floodFill(matrix, 4, 4, 8)

                         //  y
                         //  |
// var matrix = [
//     [1, 1, 1, 1, 1, 1, 1, 1],  <-- x
//     [1, 1, 1, 1, 1, 1, 0, 0],
//     [1, 0, 0, 1, 1, 0, 1, 1],
//     [1, 8, 8, 8, 8, 0, 1, 0],
//     [1, 1, 1, 8, 8, 0, 1, 0],
//     [1, 1, 1, 8, 8, 8, 8, 0],
//     [1, 1, 1, 1, 1, 8, 1, 1],
//     [1, 1, 1, 1, 1, 8, 8, 1],
// ]

// allParensValid (Recursion)
//Given the number of pairs of parentheses, return an array of strings,
//where each string represents a different valid way to order those parentheses
//allValidParens(2) -> ["()()", "(())"]
//allValidParens(3) -> ["()()()", "()(())", "(())()","((()))", "(()())"]
function allParensValid(num){
}

//Answer
function helperFunc(remainingParens, sets, count, currentStr){
    if(remainingParens <= 0 && count <= 0){
        sets[currentStr] = currentStr;
        return sets;
    }
    //add a ()
    if(remainingParens > 0){
        helperFunc(remainingParens - 1, sets, count + 1, currentStr + "(");
    }
    //add a )
    if(count > 0){
        helperFunc(remainingParens, sets, count - 1, currentStr + ")");
    }
    return sets;
}

function allParensValid(num){
    return Object.keys(helperFunc(num, {}, 0, ""));
}

console.log(allParensValid(3));
console.log(allParensValid(4));

