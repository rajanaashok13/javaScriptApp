// rest parameters
const numbers = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(...c);
};
numbers(10, 20, 30, 40, 50);
//default parameter
const addNumbers = (a = 10, b) => {
  console.log(a + b);
};
addNumbers(40); // getting nan because only we can assign in last value but not first value;
