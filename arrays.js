//Arrays in js
// Ways to create array
let p_names = ["realme", "lg", "vivo", "samsung"]; //literal Syntax
let prices = new Array(20000, 30000, 40000, 60000); //object Syntax
// to get Array values
console.log(p_names[3]);
for (let names of p_names) {
  console.log(names);
}
//using for each method
let names = p_names.forEach((val) => {
  console.log(val); //function inside the function called callback
});
//to add elements
//push method or unshift method or splice method
p_names.push("oneplus");

console.log(p_names);

p_names.unshift("poco");
console.log(p_names);

p_names.splice(2, 0, "oppo", "moto");
console.log(p_names);
let arr = [1, 2, 3, 4, 5];
console.log(arr); // easy way
//to remove elements
//pop method ,shift method splice method,(delete operators)
p_names.pop();
console.log(p_names);
p_names.shift();
console.log(p_names);
p_names.splice(2, 1);
console.log(p_names);

/*delete p_names[3];
console.log(p_names);*/

// portion of a array
// slice method
console.log(p_names.slice(2, 4));
console.log(p_names.slice(-4, -2));
// to search a value
//indexof,lastindexof,find,includes methods
console.log(p_names.indexOf("realme")); // from left to right index if similar values are there
// sorting
console.log(p_names.sort());
console.log(p_names.reverse());
console.log(arr.sort());
console.log(p_names.reverse());
console.log(arr.reverse());
// Array advance methods(ES6 )
//reduce method
let sum = prices.reduce((total, value) => {
  return total + value;
});
console.log(sum);
//map
let offer_price = prices.map((value) => {
  return value - 5000;
});
console.log(offer_price);
let p_names1 = ["moto", "poco"];
console.log(p_names.concat(p_names1));
//spread operator
let brand = [...p_names, ...p_names1];
console.log(brand);
