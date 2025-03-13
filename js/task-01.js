"use strict";
//Task 1. In HTML, there is a list of categories, ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Write a script that:

// Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
// For each li.item element in the ul#categories list, will find and display in the console the element header text (<h2> tag) and the number of elements in the category (all nested <li>).
// As a result, the following messages will be displayed in the console.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const categoriesListItems = document.querySelectorAll(".item");

function countCategories() {
  console.log(`Number of categories: ${categoriesListItems.length}`);

  categoriesListItems.forEach((category) => {
    const categoryTitle = category.querySelector("h2");
    const categoryElements = category.querySelectorAll("ul>li");

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
  });
}

countCategories();
