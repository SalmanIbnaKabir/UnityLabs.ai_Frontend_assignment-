// hackerNewsApi.js
const BASE_URL = "http://hn.algolia.com/api/v1";

const hackerNewsApi = {
  search: async (query) => {
    const response = await fetch(`${BASE_URL}/search?query=${query}`);
    const data = await response.json();
    return data.hits;
  },

  getItem: async (itemId) => {
    const response = await fetch(`${BASE_URL}/items/${itemId}`);
    const data = await response.json();
    return data;
  },
};

export default hackerNewsApi;
