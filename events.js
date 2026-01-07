//events.js
//event logic
function sample() {
  alert("hii");
}
let btn_value = document.getElementById("demo");
btn_value.addEventListener("click", sample);

function sample1() {
  alert("hello");
}
let btn = document.getElementById("demo1");
btn.addEventListener("click", sample1);
let header_value = document.getElementById("demo2");
const mouseover = () => {
  header_value.style.color = "blue";
};
const mouseout = () => {
  header_value.style.color = "";
};
header_value.addEventListener("mouseover", mouseover);
header_value.addEventListener("mouseout", mouseout);

let input_value = document.getElementById("input");
let paragraph = document.getElementById("para");
const inputlogic = () => {
  let uservalue = input_value.value;
  paragraph.textContent = uservalue;
};
input_value.addEventListener("input", inputlogic);
