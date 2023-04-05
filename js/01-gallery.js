import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createMarkupGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href = "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createMarkupGallery);

gallery.addEventListener("click", onOpen);

function onOpen(event) {
  event.preventDefault();
  const target = event.target.classList.contains("gallery__image");
  if (!target) {
    return;
  }
  const instance = basicLightbox.create(
    `<img
   src = '${event.target.dataset.source}'
    />
  `,
    {
      onShow: (instance) => {
        gallery.addEventListener("keydown", modalClose);
        function modalClose(event) {
          if (event.code === "Escape") {
            instance.close();
          }
        }
      },
      onClose: (instance) => {
        gallery.removeEventListener("keydown", modalClose);
        function modalClose(event) {
          if (event.code === "Escape") {
            instance.close();
          }
        }
      },
    }
  );

  instance.show();
}
