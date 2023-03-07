// Add imports above this line
import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryMarkUp = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join("");

galleryMarkUp.insertAdjacentHTML("beforeend", galleryEl);

new SimpleLightbox(".gallery__item", { captionDelay: 250 });
console.log(galleryItems);
