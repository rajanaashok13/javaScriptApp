//validation logic
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("inputuser").value;
  let pass_word = document.getElementById("inputpass").value;
  let regex = /[a-z][A-Z][0-9]/;
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

  return true;
}
