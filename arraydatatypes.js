let arr = [1, 2, 3]



function getLength(arr){
  //return length of arr
  console.log(arr.length);
}
function getFirst(arr){
  //return the first element of arr
  console.log(arr[0])
}
function getLast(arr){
  //return the last element of arr
  console.log(arr[arr.length - 1])
}
function popElement(arr) {
  //pop an element from arr

  arr.pop();
  console.log(arr);
}
function pushElement(arr){
  var el=1;
  //push el to arr
  
    arr.push(el)
    console.log(arr)
}


getLength(arr)
getFirst(arr)
getLast(arr)
pushElement(arr)
popElement(arr)


const getLength = (array) => array.length;

const getFirst = (array) => array[0];

const getLast = (array) => array[array.length - 1];

const pushElement = (array) => array.concat(0);

const popElement = (array) => array.splice(0, array.length - 1);