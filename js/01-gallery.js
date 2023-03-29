import { galleryItems } from "./gallery-items.js";
// Change code below this line
const arrayImages = galleryItems;
const listGallery = document.querySelector(".gallery");

(function () {
  const markup = arrayImages
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join("");
  listGallery.insertAdjacentHTML("beforeend", markup);
})();
const imageGallery = document.querySelector(".gallery__image");
const itemGallery = document.querySelector(".gallery__item");
const linkGallery = document.querySelector(".gallery__link");
listGallery.addEventListener("click", onOpenImage);

function onOpenImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <div><img src="${source}" height = 790px></div>
`);
  instance.show();
}
