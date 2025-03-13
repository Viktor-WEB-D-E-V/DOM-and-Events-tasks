// Write a script to create a gallery of images from an array of data. There is a list, ul.gallery, in HTML.

// <ul class="gallery"></ul>

// Use an array of objects images to create <img> elements nested in <li>. Use template strings and the insertAdjacentHTML() method to create markup.

// All gallery items must be added to DOM in one insert operation.
// Add at least some gallery design with flexboxes or grids using CSS classes.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

function createGalleryListItem() {
  const galleryListItems = images
    .map((image) => {
      return `
    <li class="gallery-item">
      <img class="gallery-image" src="${image.url}" alt="${image.alt}">
    </li>`;
    })
    .join("");

  galleryList.insertAdjacentHTML("afterbegin", galleryListItems);
}

createGalleryListItem();
