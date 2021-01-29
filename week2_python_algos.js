////// Week 2 Algos - SLL Singly Linked List (python using Javascript) \\\\\\

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
//singly linked list
//add to front, add to back, display/contains
class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(val){
        //make a new node
        //set the next value of the node to current head
        //set the head to the new node
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(val){
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = new Node(val);
    }

    contains(val){
        let runner = this.head;
        while(runner != null){
            if(val == runner.val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    printMe(){
        let runner = this.head;
        while(runner != null){
            console.log(`${runner.val} ->`);
            runner = runner.next;
        }
    }
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}



// SLL Remove from Front and Remove From Back
class SLL{
    constructor(){
        this.head = null;
    }

    removeFromFront() {
        // REMOVE THE FIRST NODE IN YOUR SINGLY LINKED LIST
        // your code here
    }

    removeFromBack() {
        // REMOVE THE FINAL NODE IN YOUR SINGLY LINKED LIST
        // your code here
    }
}

// Answer
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SLL{
    constructor(){
        this.head = null;
    }

    removeFromFront() {
        //  15     13 -> -4 -> 98 -> 1400 -> -67 -> 423 -> 2 -> null
        //         ^^
        //         |temp
        //         head 

        // REMOVE THE FIRST NODE IN YOUR SINGLY LINKED LIST
        if(!this.head) {
            return -1;
        }
        var temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        return this.head;
    }

    removeFromBack() {
        if(!this.head) {
            return -1;
        }
        //  13 -> -4 -> 98 -> 1400 -> -67 -> 423                 2 
        //   ^
        //   |
        // head 

        var runner = this.head;
        while(runner.next.next != null) {
            runner = runner.next;
        }
        var temp = runner.next;
        runner.next = null;
        return temp;
        // REMOVE THE FINAL NODE IN YOUR SINGLY LINKED LIST
        // your code here
    }

}

mySLL = new SLL();
mySLL.addToFront(15);
mySLL.addToBack(13);
mySLL.addToBack(-4);
mySLL.addToBack(98);
mySLL.addToBack(1400);
mySLL.addToBack(-67);
mySLL.addToBack(423);
mySLL.addToBack(2);

mySLL.printMe();
console.log("=================")
mySLL.removeFromBack();
mySLL.printMe();
console.log("=================")
mySLL.removeFromFront();

// SLL - Min to Front and Max to Back
//find the smallest node value in the list, then move it to be the head
//before: 5(H)-> 3-> 7-> 2-> 6-> 2->
//after: 2(H)-> 5-> 3-> 7-> 6-> 2->
minToFront(){

}

//find the largest node value in the list, then move it to the tail
//before: 5(H)-> 3-> 7-> 6-> 2->
//after: 5(H)-> 3-> 6-> 2-> 7->
maxToBack(){
}


// Answer 
minToFront(){
    let runner = this.head;
    let min = this.head.val;

    while(runner != null){
        if(runner.val < min)
            min = runner.val;
        runner = runner.next;
    }

        runner = this.head;
    while(runner.next != null){
            if(runner.next.val == min){
            let minNode = runner.next;
            runner.next = minNode.next;
            minNode.next = this.head;
        this.head = minNode;
        return
        }
        runner = runner.next
    }
}

maxToBack(){
    let runner = this.head;
    let max = this.head.val;

    while(runner != null){
        if(runner.val > max)
            max = runner.val;
        runner = runner.next
    }

    runner = this.head;
    let maxNode = runner;
    while(runner.next != null){
        if(runner.next.val == max){
            maxNode = runner.next;
            runner.next = maxNode.next;
            maxNode.next = null;
        }
        runner = runner.next
    }
    runner.next = maxNode
}

// SLL - AppendVal and prependVal
appendVal(location, val){
// ADD VALUE AFTER SPECIFIC LOCATION IN A LIST
}

prependVal(location, val){
// ADD VALUE BEFORE SPECIFIC LOCATION IN A LIST
}

class Node{
constructor(val){
    this.val = val;
    this.next = null;
}
}


class SLL{
constructor(){
    this.head = null;
}
// ADD METHODS/FUNCTIONS HERE
}

// Answer - 
appendVal(loc, val) {
    // ADD VALUE AFTER SPECIFIC loc IN A LIST
    if(!this.head) {
        this.head = new Node(val);
    }
    var sprinter = this.head;
    var counter = 1;

    while(counter != loc) {
        sprinter = sprinter.next;
        counter ++;
    }

    var newNode = new Node(val);
    newNode.next = sprinter.next;
    sprinter.next = newNode;

}

// appendVal(4, 79);


prependVal(location, val) {
    // ADD VALUE BEFORE SPECIFIC LOCATION IN A LIST
    var runner = this.head;
    var counter = 1;
    while(counter + 1 != location) {
        runner = runner.next;
        counter ++;
    }

    var newNode = new Node(val);
    newNode.next = runner.next;
    runner.next = newNode;
}

// SLL - Remove Negatives
//find all the negative values in the list and remove them
//hint: connect the .next of the previous node to the node that comes after
//before: 5(H)-> 3-> 7-> -15-> 2-> 6-> -1-> 2->
//after: 5(H)-> 3-> 7-> 2-> 6-> 2->
removeNegatives(){
}

// Answer
removeNegatives(){
    let runner = this.head;
    let prev = null;

    while(runner != null){
        if(runner.val < 0){
            if(prev != null)
                prev.next = runner.next;
            else
                this.head = runner.next;
            let deleteMe = runner;
            runner = runner.next;
            deleteMe.next = null
        }
        else{
            prev = runner;
            runner = runner.next;
        }
    }
}

mySLL = new SLL()
mySLL.addToFront(6);
mySLL.addToFront(7);
mySLL.addToFront(3);
mySLL.addToFront(5);
mySLL.addToFront(2);
mySLL.printMe();
console.log(` contains 7: ${mySLL.contains(7)}`);
console.log(` contains 5: ${mySLL.contains(5)}`);
console.log(` contains 10: ${mySLL.contains(10)}`);
console.log(` contains 2: ${mySLL.contains(2)}`);

mySLL = new SLL()
mySLL.addToFront(6);
mySLL.addToFront(7);
mySLL.addToFront(3);
mySLL.addToFront(5);
mySLL.addToFront(2);
mySLL.appendVal(4, 79);
mySLL.prependVal(2);
mySLL.printMe();

