// loops in javascript
//for loop
for (let i = 1; i <= 10; i++) {
  console.log("i value", i);
}
//while loop
let k = 1;
while (k <= 10) {
  console.log(k);
  k++;
}
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);
// new loops in ES6
// for in, for of
// these loops are used to retrive data from iterables(bluk amount of dat which can be arrays strings)
let p_names = ["lg", "samsung", "vivo", "realme"];
for (let names of p_names) {
  console.log(names); /// here it is used for data in them
}
for (let names in p_names) {
  console.log(p_names[names]); // here it is used as index values
}
let emp_info = {
  emp_id: 1001,
  emp_name: "ashok",
  emp_salary: 100000,
};
for (let emp_details in emp_info) {
  console.log(emp_info[emp_details]);
}
// how to retrive from string
let college_name = "vignan";
for (let name of college_name) {
  console.log(name);
}
