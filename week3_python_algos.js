////// Week 3 Algos - Stack/Queue (python using Javascript) \\\\\\

// SL Queue
class SLNode{
    constructor(value){
        this.val = value
        this.next = null
    }
}
class SLQueue{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(value){
        // ADDS a given VALUE to a queue
    }

    dequeue(){
        // removed and return the FIRST value in a queue
    }

    front(){
        // returns the FIRST value in a queue
    }

    contains(value){
        // reutrns TRUE/FALSE based on whether a given queue contains a given value
    }

    isEmpty(){
        // returns TRUE/FALSE based on whether a queue is empty
    }

    size(){
        // return the number of values in a queue
    }
}

// Answer
enqueue(value){
    // ADDS a given VALUE to a queue
    var newNode = new SLNode(value);
    if(this.head == null) {
        this.head = newNode;
        this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
}

dequeue(){
    // removed and return the FIRST value in a queue
    if(this.head == null){
        return null;
    }
    var removedVal = this.head
    this.head = this.head.next
    removedVal.next = null;
    return removedVal.val;

}

front(){
    // returns the FIRST value in a queue
    return this.head.val;
}

contains(value){
    // reutrns TRUE/FALSE based on whether a given queue contains a given value
    if(this.head == null){
        return false;
    }
    var runner = this.head;
    while(runner.next != null) {
        if(runner.val == value) {
            return true;
        }
        runner = runner.next;
    }
    return false;
}

isEmpty(){
    // returns TRUE/FALSE based on whether a queue is empty
    return this.head ? false : true;

    ternary

    if(this.head) {
        return false;
    } else {
        return true;
    }
}

size(){
    // return the number of values in a queue
    if(this.head == null){
        return 0;
    }
  
    var runner = this.head;
    var counter = 0;
    while(runner != null) {
        counter ++;
        console.log(runner.val + "-->");
        runner = runner.next;
    }
    return counter;
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Stack
class Stack{
    constructor(){
        this.top = null;
    }

    push(val){
        //add a new node with the value from the parameter to the top
        //of the stack. make sure to also set the new head
    }

    pop(){
        //return the value of the node at the top of the list
        //then set the new top
    }

    top(){
        //return the value of the node at the top of the stack
    }

    contains(val){
        //return true if any node in the stack contains the value in the
        //parameter. return false if no node matches
    }

    isEmpty(){
        //return true if there is nothing in the stack. return true otherwise
    }

    size(){
        //return a count of how many nodes exist in the stack, starting from the top
    }

    printMe(){
        let returnStr = '';
        let runner = this.top;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

// Answer
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(val){
        //add a new node with the value from the parameter to the top
        //of the stack. make sure to also set the new head
        let newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        //return the value of the node at the top of the list
        //then set the new top
        let prevTop = this.top;
        this.top = this.top.next;
        return prevTop.val;
    }

    top(){
        //return the value of the node at the top of the stack
        return this.top.val;
    }

    contains(val){
        //return true if any node in the stack contains the value in the
        //parameter. return false if no node matches
        let runner = this.top;
        while(runner != null){
            if(runner.val == val)
                return true;
            runner = runner.next;
        }
        return false;
    }

    isEmpty(){
        //return true if there is nothing in the stack. return true otherwise
        return this.top == null;
    }

    size(){
        //return a count of how many nodes exist in the stack, starting from the top
        let count = 0;
        let runner = this.top;
        while(runner != null){
            ++count;
            runner = runner.next;
        }
        return count;
    }

    printMe(){
        let returnStr = '';
        let runner = this.top;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

// is Palindrome
    //returns true if the stack represents a palindrome. false if it doesn't
    // 1 -> 2 -> 3 -> 4 -> 5 -> returns false
    // 1 -> 18 -> 462 -> -1 -> 462 -> 18 -> 1 -> return true
    // (null) -> returns true
    // 5 -> returns true
    isPalindrome(){
        
    }

// Answer
isPalindrome(str){ //// fix it. not correct
    var letters = []; // This is our stack
    var reverseWord = ""; // Variable to store the reversed word
    for(let i=0; i<str.length; i++) { // Iterate through string and push into our stack
        letters.push(str[i]);
    }
    for(let i=0; i<str.length; i++) { // Iterate through string again and concat the popped element from letters to reverseWord variable
        reverseWord+=letters.pop();
    }
    if (reverseWord === str) {
        console.log(str + ' is a palindrome');
    } else {
        console.log(str + ' is not a palindrome');
    }
}


// All together Stack
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(val){
        //add a new node with the value from the parameter to the top
        //of the stack. make sure to also set the new head
        let newNode = new Node(val);
        newNode.next - this.top;
        this.top = newNode;
    }

    pop(){
        //return the value of the node at the top of the list
        //then set the new top
        let prevTop = this.top;
        this.top = this.top.next;
        return prevTop.val;

    }

    top(){
        //return the value of the node at the top of the stack
        return this.top.val;
    }

    contains(val){
        //return true if any node in the stack contains the value in the
        //parameter. return false if no node matches
        let runner = this.top;
        while(runner != null){
                if (runner.val == val)
                    return true;
                runner = runner.next;
        }
        return false;
    }

    isEmpty(){
        //return true if there is nothing in the stack. return true otherwise
        return this.top == null;
    }

    size(){
        //return a count of how many nodes exist in the stack, starting from the top
        let count = 0;
        let runner = this.top;
        while(runner != null){
                ++count;
                runner = runner.next;
        }
        return count;
    }
    
      //returns true if the stack represents a palindrome. false if it doesn't
    // 1 -> 2 -> 3 -> 4 -> 5 -> returns false
    // 1 -> 18 -> 462 -> -1 -> 462 -> 18 -> 1 -> return true
    // (null) -> returns true
    // 5 -> returns true
    isPalindrome(str){ //// fix it. not correct
        var letters = []; // This is our stack
        var reverseWord = ""; // Variable to store the reversed word
        for(let i=0; i<str.length; i++) { // Iterate through string and push into our stack
            letters.push(str[i]);
        }
        for(let i=0; i<str.length; i++) { // Iterate through string again and concat the popped element from letters to reverseWord variable
            reverseWord+=letters.pop();
        }
        if (reverseWord === str) {
            console.log(str + ' is a palindrome');
        } else {
            console.log(str + ' is not a palindrome');
        }
    }
    
    printMe(){
        let returnStr = '';
        let runner = this.top;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

let pancakes = new Stack();
console.log(`Is it empty? ${pancakes.isEmpty()}`)
pancakes.push("blueberry");
pancakes.printMe();
pancakes.push("plain");
pancakes.printMe();
pancakes.push("strawberry");
pancakes.printMe();
pancakes.push("chocolate chip");
pancakes.printMe();
pancakes.push("syrup");
pancakes.printMe();
console.log(`Is it empty? ${pancakes.isEmpty()}`)
console.log(`the count is: ${pancakes.size()}`)
console.log(`Is it? ${pancakes.isPalindrome()}`)
pancakes.isPalindrome("racecar");

//All together Queue
class SLNode{
    constructor(value){
        this.val = value
        this.next = null
    }
}
class SLQueue{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(value){
        // ADDS a given VALUE to a queue
        var newNode = new SLNode(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue(){
        // removed and return the FIRST value in a queue
        if(this.head == null){
            return null;
        }
        var removedVal = this.head
        this.head = this.head.next
        removedVal.next = null;
        return removedVal.val;
        
    }

    front(){
        // returns the FIRST value in a queue
        return this.head.val;
    }

    contains(value){
        // reutrns TRUE/FALSE based on whether a given queue contains a given value
        if(this.head == null){
            return false;
        }
        var runner = this.head;
        while(runner.next != null) {
            if(runner.val == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    isEmpty(){
        // returns TRUE/FALSE based on whether a queue is empty
        return this.head ? false : true;
    }

    size(){
        // return the number of values in a queue
        if(this.head == null){
            return 0;
        }
        var runner = this.head;
        var counter = 0;
        while(runner != null) {
            counter++;
            console.log(runner.val + "-->");
            runner = runner.next;
        }
        return counter;
    }
}

var thisList = new SLQueue();
console.log(thisList.front());
console.log(thisList.isEmpty());
thisList.enqueue(15); 
thisList.enqueue(89); 
thisList.enqueue(12); 
thisList.enqueue(7854); 
thisList.enqueue(-145); 
thisList.enqueue(3);