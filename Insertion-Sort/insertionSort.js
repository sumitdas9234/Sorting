//A function to perform Insertion Sort on the list
function insertionSort(list) {
  //create a list
  var newList = [list[0]];
  //loop to select an element from the list
  for (let i = 1; i < list.length; i++) {
    //pos variable to store the value of the correct pos of the element
    var pos;
    //counter variabke for loop 2
    index = 0;
    while (index < newList.length) { //if the radius is smaller than the element in newList
      if (list[i].r < newList[index].r) {
        pos = index; //save the index position i the pos variable
        break; //get out of the loop
      } else {
        pos = index + 1 //save the next position i+1 in pos variable
      }
      index++; //go to the next element
    }
    newList.splice(pos, 0, list[i]); //swap the values
  }
  // return the list
  return newList;
}