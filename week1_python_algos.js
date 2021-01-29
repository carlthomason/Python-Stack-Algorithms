/////////// Week 1 Javascript Algos taught in Python Class \\\\\\\\\\\\\\\

//take in string and return a new string with the characters reversed
function reverseString(word){
    //take in string and return a new string with the characters reversed
    //"did I shine my shoes today"
    //-> "yadot seohs ym enihs I did"
    newWord = "";
    for(let i = word.length - 1; i >= 0; --i){
      newWord += word[i];
    }
  
    return newWord;
  }

  reverseString('llor edit llor');
  console.log(reverseString('did I shine my shoes today?'))

//take in string and return new string with first letter of each word
function acronym(word){
    //take in string and return new string with first letter of each word
    //"self contained underwater breathing apparatus"
    //-> "SCUBA"

    newWord = "";
    for(var i = 0; i < word.length; i++){
        if(i == 0 || word[i-1] == " "){
            newWord += word[i];
        }
    }

    return newWord;
}
acronym(["University", "of", "Alabama"])
var y = acronym(["My","name","is","carl"])
console.log(y);

// This solution plays nicer with other languages as well
//take in string and return new string with first letter of each word
function acronym(word){
    //take in string and return new string with first letter of each word
    //"self contained underwater breathing apparatus"
    //-> "SCUBA"
    newWord = "";
    prevSpace = true;
    for(let i = 0; i < word.length; ++i){
        if(word[i] != " " && prevSpace){
            newWord += word[i].toUpperCase();
            prevSpace = false;
        }
        else if(word[i] == " "){
            prevSpace = true;
        }
    }
    
    return newWord;
  }

  acronym(["University", "of", "Alabama"])

// console.log(parensAlsoValid(")(((())))()"));
// ")))((("
// TAKE IN A STRING OF ONLY PARENTHESES AND RETURN TRUE/FALSE BASED ON WHETHER THE STRING IS COMPRISED OF ONLY VALID PAIRS (SEE EXAMPLES)
// Hint: Think about using a counter OR queue/array

// EX. "()( () )" => TRUE
// EX. "( ()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. "))((" => FALSE
function parensValid(string) {
}

function parensValid(string){
    var counter = 0
    for(var i = 0 ; i < string.length ; i++){
        if(string[i] == "("){
            counter++
        }
        else{
            counter--
        }
        if(counter < 0){
            console.log("PARENS NOT VALID")
            return false
        }
    }
    if(counter == 0){
        console.log("PARENS VALID")
        return true
    }
    else{
        console.log("PARENS NOT VALID")
        return false
    }
}

parensValid(["())(()"])

// or

function parensAlsoValid(string) {
    var newArr = [];
    for(var i = 0 ; i < string.length ; i++) {
      if(string[i] === "(") {
        newArr.push(string[i]);
      } else if(string[i] === ")" && newArr[newArr.length - 1] === "(") {
        newArr.pop();
      } else {
        return false;
      }
    }
    return true;
  }

 // (),[],{}
// TAKE IN A STRING OF ONLY BRACKETS (PARENS, SQUIGS, AND SQUARE) AND RETURN TRUE/FALSE BASED ON WHETHER THE STRING IS COMPRISED OF ONLY VALID PAIRS (SEE EXAMPLES)
// Hint: Think about using a queue/array


// EX. "((()))[]{[()]}" => TRUE
// EX. "({})[]" => TRUE
// EX. "(}()[]" => FALSE

function bracesValid(string) {
    //your code here
   }

   function bracesAreValid(string) {
    var newArr = [];

    for(var i = 0 ; i < string.length ; i ++) {
        if(string[i] === "(" || string[i] === "[" || string[i] === "{") {
            newArr.push(string[i]);
        }

        else if(newArr[newArr.length - 1] === "(" && string[i] === ")") {
            newArr.pop();
        }
        else if(newArr[newArr.length - 1] === "[" && string[i] === "]") {
            newArr.pop();
        }
        else if(newArr[newArr.length - 1] === "{" && string[i] === "}") {
            newArr.pop();
        } else {
            return false;
        }
    }
    return true;
}

//should take in a string and return whether the entirety of the string is a palindrome
//don't bother skipping spaces, unless you'd like an extra challenge
//isPalindrome("rats live on no evil star") -> returns true
//isPalindrome("hey it's me!") -> returns false
function isPalindrome(phrase){
    return true;
}
function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
}
console.log(isPalindrome("racecar"))

//takes a string and returns the longest palindrome within the string
//"my racecar is on another level!" -> returns "racecar"
//"laptop" -> returns "l"
function longestPalindrome(phrase){
}
function longestPalindrome(phrase){
    currentLongest = phrase[0];

    for(let start = 0; start < phrase.length; start++){
        for(let end = phrase.length - 1; start < end; end--){
            checkMe = phrase.slice(start,end + 1)
            if(checkMe.length > currentLongest.length && isPalindrome(checkMe)){
                currentLongest = checkMe;
            }
        }
    }

    return currentLongest;
}

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,3,13,14,15,16,17,36,37,38,70] => ["1","3" , "13-17", "36-38", "70"]
function bookIndex(array){
    // your code here
}
var arr = [1,3,13,14,15,16,17,36,37,38,70]

function bookIndex(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]+1 == arr[i+1]) {
            var start = arr[i];
            while (arr[i]+1 == arr[i+1]) {
                i++;
            }
        var end = arr[i];
        temp.push(start + "-" + end);
        } else {
            temp.push(arr[i].toString());
        }
    }
    return temp
}

console.log(bookIndex(arr));

//given a number of cents, return an object with the count
//of how many of each coin should be returned
//67 -> 2 quarters, 1 dime, 1 nickel, 2 pennies
//78 -> 3 quarters, 0 dimes, 0 nickels, 3 pennies
function coinChange(cents){
    var coins = {
        "quarters": 0,
        "dimes": 0,
        "nickels": 0,
        "pennies": 0
    }

    return coins;
}

function getChange(amount) {
    amount *= 100; // Convert to number of cents
    var denominations = [ 1, 5, 10, 25, ]; // cents
    var result = [];
    while (amount > 0) {
        var coin = denominations.pop(); // Get next greatest coin
        var count = Math.floor(amount/coin); // See how many times I need that coin
        amount -= count * coin; // Reduce the amount with that number of coins
        if (count) result.push([coin/100, count]); // Store count & coin
    }
    return result;
}
console.log(getChange(43.94))

//if you get the time, work on dollarAndCoinChange
//given a dollar amount, return an object with the count
//of how many dollars(1s, 5s, 10s) and how many coins
//should be returned
//46.32 -> 4 tens, 1 five, 1 one, 1 quarter, 0 dimes, 1 nickel, 2 pennies
function dollarAndCoinChange(dollars){
    var coins = {
        "ten": 0,
        "five": 0,
        "one": 0,
        "quarters": 0,
        "dimes": 0,
        "nickels": 0,
        "pennies": 0
    }
}

// with dollars
function getChange(amount) {
    amount *= 1; // Convert to number of cents
    var denominations = [ .01, .05, .10, .25, 1, 5, 10, 25 ]; // cents
    var result = [];
    while (amount > 0) {
        var coin = denominations.pop(); // Get next greatest coin
        var count = Math.floor(amount/coin); // See how many times I need that coin
        amount -= count * coin; // Reduce the amount with that number of coins
        if (count) result.push([coin, count]); // Store count & coin
    }
    return result;
}
console.log(getChange(43.94))