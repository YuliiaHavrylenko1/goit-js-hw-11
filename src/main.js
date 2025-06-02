import { fetchImages } from './js/pixabay-api';
import { createGalleryMarkup, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  clearGallery();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
    } else {
      createGalleryMarkup(images);
    }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
    console.error(error);

  } finally {
    hideLoader();
    input.value = '';
  }
});

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}