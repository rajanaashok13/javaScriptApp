//with out closure
let counter = 1; // global variable
const counterResult = () => {
  let counter = 0; //local varaiable
  counter += 1;
  return counter;
};
console.log(counterResult());
console.log(counterResult()); // main priority  is local varaivble inside function
console.log(counterResult());
