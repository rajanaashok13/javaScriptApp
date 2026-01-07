var a = 11;
console.log(typeof a);
var b = 23345567778;
console.log(typeof b);
var c = 43.6;
console.log(typeof c);
var d = "ashok";
console.log(typeof d);
var emp = true;
console.log(typeof emp);
var esi = null;
console.log(typeof esi); // null as object
var king;
console.log(typeof king);
var desg = ["developer", "hr", "manager"];
console.log(typeof desg); //array as object
var customer_info = {
  c_id: 2001,
  c_name: "ashok",
  c_add: "palasa",
};
console.log(typeof desg); //object as object
// advanced data types(ES6)
var tcs_turnover = BigInt(123456789847595);
console.log(typeof tcs_turnover); // for larger values
var p_name = Symbol("Samsung");
console.log(typeof p_name);
var p_name1 = Symbol("Samsung");
console.log(p_name == p_name1);
