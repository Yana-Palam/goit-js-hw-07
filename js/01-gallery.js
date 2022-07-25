import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

refs.gallery.addEventListener('click', onGalleryClick);
let instance = null;
function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') return;
  const linkToLargeImg = evt.target.dataset.source;
  instance = basicLightbox.create(`
      <img src="${linkToLargeImg}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', keydownEsc);
}
function keydownEsc(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', keydownEsc);
  }
  console.log(event.code);
}
