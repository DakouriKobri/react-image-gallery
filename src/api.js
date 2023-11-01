// NPM Packages
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_ACCESS_KEY;

const imagesBaseUrl = `https://api.unsplash.com/search/photos/?client_id=${apiKey}`;

export async function getSearchImages(queryString) {
  try {
    const response = await axios(imagesBaseUrl, {
      params: {
        query: queryString,
      },
    });
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log('error.message:', error.message);
    throw new Error(error.message);
  }
}
