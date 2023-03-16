var signinBtn = document.getElementById("signinBtn");
var nameField = document.getElementById("nameField");
var title = document.getElementById("title");

const signinBtnFunc = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

const signupBtnFunc = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
