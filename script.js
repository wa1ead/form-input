const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameVal = document.getElementById("name").value;
  const emailVal = document.getElementById("email").value;
  const ageVal = document.getElementById("age").value;

  console.log(nameVal);

  errorMessages.innerHtml = "";

  if (!nameVal) {
    alert("Please enter your full name!");
    return;
  }
  if (ageVal < 18) {
    alert("Age must be greater than 18");
    return;
  }


  form.submit();
  form.reset();
});
