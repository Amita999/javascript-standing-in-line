var testArray =[1,2,3,4,5];
var firstItem;
function nextInLine(testArray,item)
{
testArray.push(item);
firstItem = testArray.shift() ;//first item of array
testArray.unshift(firstItem);
return(item);
}
console.log("the array is "+testArray);
nextInLine(testArray,6);
console.log("the array now is "+ testArray);
console.log("the first element of the array is "+firstItem);
console.log("To convert the array to string "+JSON.stringify(testArray));