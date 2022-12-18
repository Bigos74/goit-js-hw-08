// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

console.log(galleryItems);
const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`
  )
  .join('');

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
