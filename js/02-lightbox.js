import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItemMarkup(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');

galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

document.addEventListener('DOMContentLoaded', function () {
  new SimpleLightbox('.gallery a', {
    captions: true, 
    captionDelay: 300, 
  });
});


console.log(galleryItems);
