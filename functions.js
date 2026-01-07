//without parameters
function showMessage() {
  console.log("hii");
}
showMessage();
// with parameters
function sumOfNumbers(a, b) {
  // parameters
  console.log(a + b);
}
sumOfNumbers(20, 30); //arguments
// return a value from function
function multiOfNumbers(a, b) {
  return a * b;
}
let result = multiOfNumbers(10, 20); // why because for futher usage
console.log(result);
// ES6 new functions
// ARROW FUNCTION
const arrowDemo = () => {
  // fact arrow notation
  console.log("arrow function demo");
};
arrowDemo();
// arrow function with parameters
const addNumbers = (a, b) => {
  console.log(a + b);
};
addNumbers(10, 20);
// arrow function in a simple way
const addNums1 = (a, b) => a + b; // better way to implement
console.log(addNums1(100, 200));
// with return value;
const mulNum = (num1, num2) => {
  return num1 * num2;
};
console.log(mulNum(1, 2));
//without return
const mulNum2 = (num1, num2) => num1 * num2;
let ans = mulNum2(3, 4);
console.log(ans);
