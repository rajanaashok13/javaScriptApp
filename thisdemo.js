//This keyword
const emp_info = {
  eFirstName: "ashok",
  eLastName: "rajana",
  fullName: function () {
    return this.eFirstName + "" + this.eLastName;
  },
};
console.log(emp_info.fullName());
