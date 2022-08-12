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
    this.size = 0;
  }

  // insert first node
  insertFirst(data: dataType) {
    this.head = new NodeContainer(data, this.head as null);
    this.size++;
  }

  // insert last node
  insertLastNode(data: dataType) {
    let node = new NodeContainer(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // insert at index
  // get at index
  // remove at index
  //cler list

  //   printList() {
  //     //this represent the current variable
  //     let current = this.head;

  //     while (current) {
  //       console.log(current);
  //       // reassigning the next node to current, till it becomes null
  //       current = current.next;
  //     }
  //   }
  printList() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
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

ll.printList();
