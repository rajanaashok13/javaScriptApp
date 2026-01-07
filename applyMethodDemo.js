//apply method
const s_info = {
  sDetails: function (qualification, phnNumber) {
    return (
      this.sRoll + " " + this.sName + " " + qualification + " " + phnNumber
    );
  },
};
const student = {
  sRoll: "J1",
  sName: "ashok",
};
console.log(s_info.sDetails.apply(student, ["Btech", "7569083526"]));
// apply method from different objects
