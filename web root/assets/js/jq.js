

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("mail").value;
  var userPassword = document.getElementById("password").value;

  if(userName === "") {
    var name_warning = document.getElementById("name_warn");
    name_warning.innerHTML = "You must enter your name !!";
    name_warning.style.color = "red";
  }

  if(userEmail === "") {
    var email_warning = document.getElementById("email_warn");
    email_warning.innerHTML = "You must enter your email !!";
    email_warning.style.color = "red";
  }

  if(userPassword === "") {
    var name_warning = document.getElementById("password_warn");
    name_warning.innerHTML = "You must enter your password !!";
    name_warning.style.color = "red";
  }

})
