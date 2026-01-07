//validation logic
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("inputuser").value;
  let pass_word = document.getElementById("inputpass").value;
  let regex = /[a-z][A-Z][0-9]/;
  let confirm_password = document.getElementById("confirmpassword").value;
  let mobile_no = document.getElementById("mobile").value;
  let mbRegex = /[0-9]{10}/;
  let email_num = document.getElementById("emailnum").value;

  //validation logic
  if (user_name == "") {
    alert("please enter username");
    return false;
  }
  if (pass_word == "") {
    alert("please enter password");
    return false;
  }
  if (pass_word.length < 8 || pass_word.length > 12) {
    alert("password sholud be minimum 8 characters and maximum 12");
    return false;
  }
  if (!regex.test(pass_word)) {
    //test method is used for validtaion of password
    alert(
      "password shoul be combination of small letters capital letters and numbers"
    );
    return false;
  }
  if (confirm_password != pass_word) {
    alert("password not matched");
    return false;
  }
  if (mobile_no == "") {
    alert("please enter mobile number");
    return false;
  }
  //   if (mobile_no < 10) {
  //     alert("mobile number should be 10 digits");
  //     return false;
  //   }
  if (!mbregex.test(mobile_no)) {
    alert("mobile numbers should contain only digits");
    return false;
  }
  if (email_num == "") {
    alert("fill the email");
    return false;
  }
  if (!email_num.includes(".")) {
    alert("enter valid eamil");
    return false;
  }
  return true;
}
