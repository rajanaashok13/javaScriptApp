console.log("first");
setTimeout(() => {
  console.log("second");
}, 2000);
setTimeout(() => {
  console.log("three");
}, 0);
console.log("four");
