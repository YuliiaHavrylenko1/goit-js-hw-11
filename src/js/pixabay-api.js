import axios from 'axios';

const API_KEY = '42560476-9b1970eba27c0bb9e34ff4d9e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data.hits;
}