const baseUrl = `https://pixabay.com/api/`;
let myApiKey = `19826807-5678a17c69c5850135e2e3194`;

export default {
  queryy: "",
  page: 1,
  perPage: 12,

  getFetch() {
    let params = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${myApiKey}`;
    let url = baseUrl + params;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.hits);
  },

  set queryText(value) {
    this.query = value;
  },

  get queryText() {
    return this.query;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
