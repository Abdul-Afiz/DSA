/*
inserting an element at a particular index in an array
*/

const pos = 2;
const size = [1, 20, 5, 78, 30];
const ele = 100;

console.log(
  `Before insertion => Original array ${size} and size is ${size.length}`
);
function insertingEle() {
  console.log("starting insertion");
  for (let i = size.length; i > pos; i--) {
    console.log("When the value is at index of", i);
    console.log(
      `Assigning prevIndex ${i - 1} value to next index ${i} ==> ${(size[i] =
        size[i - 1])}`
    );
    console.log(size);
  }
  size[pos] = ele;
}

insertingEle();

console.log(
  `After insertion => Modified array ${size} and size => ${size.length}`
);

/*

Time Complexity => O(1) for best-case 
because if you are to insert the value to the end, you will not need to move each value all, you need to do is to insert to the end of the arr which is constant. 

Time Complexity => O(N) for worst-case 
because if you are to insert the value to the front, you will need to move each value of the arr which is determine by the no of value in the arr. 

*/

console.log("##### \n \n \n \n");
/*
removing an element at a particular index in an array 

To do this we remove the element from that index and reassign to th next one then reduce the length of the arr 

*/

const index = 2;

console.log(
  `Before removing => Original array ${size} and size is ${size.length}`
);

function removingEle() {
  console.log("starting");
  for (let i = index; i < size.length - 1; i++) {
    console.log("When the value is at index of", i);
    console.log(
      `Assigning next Index ${i + 1} value to current index ${i} ==> ${(size[
        i
      ] = size[i + 1])}`
    );
    console.log(size);
  }
  size.length--;
}

removingEle();

console.log(
  `After Removing => Modified array ${size} and size => ${size.length}`
);

/*

Time Complexity => O(1) for best-case 
because if you are to remove the value at the end, you do not need to loop through each value, all you need is to deduct the size of the arr by 1 which is constant. 

Time Complexity => O(N) for worst-case 
because if you are to remove the value from the front, you will need to move each value of the arr which is determine by the no of value in the arr. 

*/

console.log("##### \n \n \n \n");
/*
Searching for an element in an array 

To do this we compare the value of each index in the array with the val we are looking for, if found it should be return and the loop should stop else continue till the val of the arr is exhausted 

*/

const value = 5;

console.log(
  `Before Searching => Original array ${size} and size is ${size.length}`
);

function searchingEle() {
  console.log("starting");
  for (let i = 0; i < size.length; i++) {
    console.log("When the value is at index of", i);
    console.log(
      `Checking if value ${
        size[i]
      } at IndexOf ${i} is equal to the value we are searching for ${value} ==> ${
        size[i] === value
      }`
    );

    if (size[i] === value) {
      console.log(size[i] === value && "found");
      break;
    }
    console.log("not found");
  }
}

searchingEle();

/*

Time Complexity => O(1) for best-case 
because if you are to search for the value at the front, you do not need to loop through each value, the value will be returned immdeiately. 

Time Complexity => O(N) for worst-case 
because if you are to search the value from the end, you will need to check each value of the arr which is determine by the no of value in the arr to find the one that match it. 

*/
