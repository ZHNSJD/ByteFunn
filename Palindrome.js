let str = "A nut for a jar? of tuna";
//console.log(str)
// remove characters and space 
str2 = str.replace(/[.,\s?]/g, "");

// make lower case
str2 = str2.toLowerCase()
//console.log(str);

//reverse the string using 3 steps

// Step 1. Use the split() method to return a new array
var splitString = str2.split("");
////console.log(splitString);

// Step 2. Use the revers() method to revers the new created array

var reverseArray = splitString.reverse();
//console.log(reverseArray);

// use the join(method) to join all elements of the array to make a string 

var joinArray = reverseArray.join("");
//console.log(joinArray);
//var result = "";

// create if statement which prints the answer. 

if (str2 == joinArray){
console.log (str + " is a palindrome")
}else{
console.log (str + " is not a palindrome")
}
 