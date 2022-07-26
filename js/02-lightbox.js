import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 0.25,
});
