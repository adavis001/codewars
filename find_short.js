// June 13th: Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)
// function descendingOrder(n){

//   var stringArray = n.toString().split("").sort().reverse();

//   var joinArr = "";

// for(var i = 0; i<stringArray.length; i++){
//   joinArr +=(stringArray[i]);
// }

// var answer = parseInt(fjoinArr, 10);
// return answer;
// }
// descendingOrder(123456789);

// another solution

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''));
// }
// console.log(descendingOrder(1021));

//June 21: x Simple, given a string of words, return the length of the shortest word(s).  String will never be empty and you do not need to account for different data types.

// Test.describe("Example tests",_=>{
// Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });

function findShort(s){
 let wordArr = s.split(" ");
 let smallestWord = Infinity;

 for(var i = 0; i<wordArr.length; i++){
  if (wordArr[i].length < smallestWord){
    smallestWord = wordArr[i].length;
  }
 }
console.log(smallestWord);
 return smallestWord;
}

findShort("bitcoin take over the world maybe who knows perhaps");

//Another solution

// const findShort = (s) => s
//   .split(' ')
//   .sort((a, b) => b.length - a.length)
//   .pop()
//   .length;
