document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let valid = true;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  }
  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    valid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    valid = false;
  }

  // Password validation
  if (password === "") {
    document.getElementById("passwordError").innerText = "Password is required";
    valid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Minimum 6 characters required";
    valid = false;
  }
   // Final submit
  if (valid) {
    alert("Form submitted successfully!");
  }
    


})