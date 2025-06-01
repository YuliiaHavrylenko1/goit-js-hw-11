import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function createGalleryMarkup(images) {
  const gallery = document.querySelector(".gallery");

  const markup = images.map(({ webformatURL, largeImageURL, tags }) => {
    return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
      </li>`;
  }).join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

export function clearGallery() {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = '';
}
