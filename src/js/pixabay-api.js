import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createGalleryMarkup } from './render-functions.js';

const API_KEY = '42560476-9b1970eba27c0bb9e34ff4d9e';

export function fetchImages(query) {
    const loader = document.querySelector('.loader');
    const loaderButton = document.querySelector('.input-btn');
    function showLoader() {
      loader.style.display = 'block';
    }
    loaderButton.addEventListener('click', function() {
      // Показати індикатор завантаження
        showLoader();
    });
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            loader.style.display = 'none';
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight"
                });
            } else {
                createGalleryMarkup(data.hits);
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            loader.style.display = 'none';
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.'
            });
        });
}