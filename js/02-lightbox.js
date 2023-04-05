import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markupImages = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  })
  .join("");
const gallery = document.querySelector(".gallery");
gallery.innerHTML = markupImages;
var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
