// Write a script to manage the login form.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Form submission (form.login-form) must be processed on the submit event.
// The page must not reload when the form is submitted.
// If the form has empty fields, display alert saying that all fields must be filled in.
// As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the elements property to access form elements.
// Display the object with the entered data in the console and clear the values of the form fields using the reset method.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email;
  const password = form.password;

  const formData = {};

  if (!email.value.trim() || !password.value.trim())
    return alert("Please fill in all the fields!");

  formData[email.name] = email.value.trim();
  formData[password.name] = password.value.trim();

  console.log(formData);
  form.reset();
});
