import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector(".gallery");
const imgMakup = createGalleryMarkup(galleryItems);

ul.insertAdjacentHTML('beforeend', imgMakup);

function createGalleryMarkup(gallery) {
	return gallery.map(({ preview, original, description }) => {
		return `
		<li class="gallery__item">
		<a class="gallery__link" href="${original}">
		<img
		class="gallery__image"
		src="${preview}" 
		alt="${description}"/>
		</a>
		</li>
		`
	}).join("");
} 


let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'bottom',
  captionDelay: 250,
});


console.log(galleryItems);
