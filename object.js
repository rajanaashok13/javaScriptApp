// objects in javascript
const movie_info = {
  movie_title: "kithakithalu",
  movie_hero: "allarinaresh",
  director: "Evv",
};
// how to get director name
console.log(movie_info.director); // .opertaor
console.log(movie_info["movie_hero"]);
// for in for acessing all objects
for (let names in movie_info) {
  console.log(movie_info[names]);
}
//Advanced Methods
//object.keys it retervies all the keys
console.log(Object.keys(movie_info));
Object.keys(movie_info).forEach((key) => {
  console.log(key);
});
// getting values only
// Object.values
console.log(Object.values(movie_info));
Object.values(movie_info).forEach((val) => {
  console.log(val);
});
// Object.entries
console.log(Object.entries(movie_info));
Object.entries(movie_info).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
// both key and value
for (let [info, infoval] of Object.entries(movie_info)) {
  console.log(info + " " + infoval);
}
/// Nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
// cart Object
const cart_items = {
  products: [
    { pid: 1234, price: 20000, pname: "drone" },
    { pid: 2345, price: 30000, pname: "ac" },
  ],
  shipping_Address: {
    Areaname: "palasa",
    pincode: 222212,
    Street: "maruthi nagar",
  },
  user_info: {
    userid: 101,
    username: "ashok",
  },
};
console.log(cart_items.user_info.username);
