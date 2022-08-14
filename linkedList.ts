// const value = 5;

// console.log(
//   `Before Searching => Original array ${size} and size is ${size.length}`
// );

// function searchingEle() {
//   console.log("starting");
//   for (let i = 0; i < size.length; i++) {
//     console.log("When the value is at index of", i);
//     console.log(
//       `Checking if value ${
//         size[i]
//       } at IndexOf ${i} is equal to the value we are searching for ${value} ==> ${
//         size[i] === value
//       }`
//     );

//     if (size[i] === value) {
//       console.log(size[i] === value && "found");
//       break;
//     }
//     console.log("not found");
//   }
// }

// searchingEle();

// /*

// Time Complexity => O(1) for best-case
// because if you are to search for the value at the front, you do not need to loop through each value, the value will be returned immdeiately.

// Time Complexity => O(N) for worst-case
// because if you are to search the value from the end, you will need to check each value of the arr which is determine by the no of value in the arr to find the one that match it.

// */

type dataType = string | number | Array<string | number | object> | object;

class NodeContainer {
  data: dataType;
  next: null | NodeContainer;
  constructor(data: dataType, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  head: null | NodeContainer;
  size: number;
  constructor() {
    this.head = null;
    // console.log(`default head: ${this.head}`);
    this.size = 0;
  }

  // insert first node
  insertFirst(data: dataType) {
    this.head = new NodeContainer(data, this.head as null);
    // console.log(`when new head is added ${this.head.data}`);
    this.size++;
  }

  // insert last node
  insertLastNode(data: dataType) {
    // create a new node
    let node = new NodeContainer(data);
    // initialize current var
    let current;

    // check if the head is empty, if it's empty assign it to the node
    if (!this.head) {
      this.head = node;
    } else {
      //if there is head, then assign the head node to the current variable
      current = this.head;

      // the next step is to check if the next node is null

      while (current.next) {
        // if the current node is not empty, then reassign it to the cuurent variable till it's null

        current = current.next;
      }

      // when the next node becomes null, we assign the node to the last node
      current.next = node;
    }
  }

  // insert at index

  insertAt(data: dataType, index: number) {
    // Check if the index is more than the size of the linked list
    if (index > 0 && index > this.size) {
      return;
    }
    //check if index === 0
    if (index === 0) {
      this.insertFirst(data);
    }

    //initialise your node to a variable

    const node = new NodeContainer(data);
    let current, prev, count;

    //Set current variable to the first node
    current = this.head;
    // using count to rep index
    count = 0;
    //using while loop to check if count is less to the index
    while (count < index) {
      //the node before the index is assigned to prev
      prev = current;
      console.log("this is prev node", prev?.data, "index is", count);
      count++;
      current = current?.next;
    }
    node.next = current as NodeContainer;
    if (prev) {
      prev.next = node;
    }
  }

  // get at index
  getAtIndex(index: number) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }

    return null;
  }

  // remove at index
  //cler list

  printList() {
    //this represent the current variable
    let current = this.head;
    // console.log(`current node ${this.head?.data}`);
    while (current) {
      console.log(current.data);
      // console.log(`current node counting ${current.data}`);
      // reassigning the next node to current, till it becomes null
      current = current.next;
      // console.log(`next current node ${current?.data}`);
    }
  }
}

const ll = new linkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
// ll.insertHead(4);
// ll.insertHead(5);
ll.insertLastNode(40);
// ll.insertLastNode(50);
// ll.insertLastNode(60);
// ll.insertLastNode(70);
// ll.insertAt(80, 2);
// ll.printList();

ll.getAtIndex(1);
