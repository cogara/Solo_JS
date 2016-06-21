var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// 1
var stringMessage = '';
for (var i = 0; i < stringList.length; i++) {
  if (i < stringList.length-1) {
    stringMessage += stringList[i] + ', ';
  }
  else {
    stringMessage += stringList[i] + '.';
  }
}
// 2 -- coded in console.logs below

// 3
var numListString = '';
for (var i = 0; i < numList.length; i++) {
  numListString += numList[i].toString();
}

// 4
var numListTotal = 0;
for (var i = 0; i < numList.length; i++) {
  numListTotal += numList[i];
}

// 5
var boolListTest = 0;
if (boolList[1]) {
  boolListTest = numList[0] + numList[numList.length-1];
}
else {
  boolListTest = numList[1] * numList[1];
}

//6
function boolListIteration() {
  var boolListCheck = '';
  for (var i = 0; i < boolList.length; i++) {
    if (boolList[i]) {
      boolListCheck += numList[i] + ' ';
    }
  }
  console.log('6) numList numbers correlating to true booList booleans:', boolListCheck)
}

// 7
var oneArray = [];
oneArray = oneArray.concat(stringList).concat(numList).concat(boolList).reverse();

console.log('1) Months listed are',stringMessage);
console.log('2)', numList[numList.length-1]);
console.log('3)', numListString);
console.log('4)', numListTotal);
console.log('5)', boolListTest);
boolListIteration();
console.log('7)', oneArray);
