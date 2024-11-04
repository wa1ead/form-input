const form = document.querySelector("form");
var users = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameVal = document.getElementById("name").value;
  const emailVal = document.getElementById("email").value;
  const ageVal = document.getElementById("age").value;

  console.log(nameVal);

  if (!nameVal) {
    alert("Please enter your full name!");
    return;
  }
  if (ageVal < 18) {
    alert("Age must be greater than 18");
    return;
  }

  var user = {
    name: nameVal,
    email: emailVal,
    age: ageVal,
  };

  users.push(user);
  localStorage.setItem("MyUsers", JSON.stringify(users));
  form.reset();

  console.warn("added", { users });
});
