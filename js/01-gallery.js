import { galleryItems } from './gallery-items.js'; 

const ul = document.querySelector(".gallery");
const imgMakup = createGalleryMarkup(galleryItems);


ul.insertAdjacentHTML('beforeend', imgMakup);
ul.addEventListener('click', onImgClick);

function createGalleryMarkup(gallery) {
	return gallery.map(({ preview, original, description }) => {
		return `
		<li class="gallery__item">
		<a class="gallery__link" href="${original}">
		<img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image" />
		</a>
		</li>
		`
	}).join("");
} 


function onImgClick(evt) {
	evt.preventDefault();
	if (!evt.target.classList.contains("gallery__image"))	return;
	const currentImgUrl = evt.target.dataset.source;
	const instance = basicLightbox.create(`
		<img src="${currentImgUrl}" />
		`,
  {
			onShow: (instance) => {
				window.addEventListener('keydown', onEscKeyPress);
			},
			onClose: (instance) => {
				window.removeEventListener('keydown', onEscKeyPress);
			},
		}
	);

	instance.show();
	
  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }
}



console.log(galleryItems);




