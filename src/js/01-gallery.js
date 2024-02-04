// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');

const newImages = [...galleryItems]
  .map(
    galleryItem =>
      `
<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" title="${galleryItem.description}"/>
   </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', newImages);

gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  gallery.options.CaptionDelay = 250;
});
gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});
