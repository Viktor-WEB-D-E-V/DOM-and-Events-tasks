// Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.querySelector("#name-input"),
  nameText = document.querySelector("#name-output");

input.addEventListener("input", typeName);

function typeName(e) {
  nameText.textContent = e.target.value.trim() || "Anonymous";
}
